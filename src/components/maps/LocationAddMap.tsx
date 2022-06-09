import { Autocomplete, Box, Hidden, styled, TextField } from '@mui/material';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import axios from 'axios';
import React, { useState } from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import LocationAddStyle from '../../assets/styles/LocationAdd.style';
import Coordinate from '../../utils/types/Coordinate';



{/* 
		//--------------------------------------------------------
		TODO Move to a different location in components 
		//--------------------------------------------------------
		TODO:	IF AT 850PX MOVE THE AUTOCOMPLETE TEXTBOX ON THE BOTOOM
		//--------------------------------------------------------
		TODO:	ORGANIZE THE CODE FOR BETTER READABILITY
*/}


const MarkedLocationIcon = require('../../assets/icons/MarkedLocationIcon.png') as string;

const LocationAddMapBox = styled(Box)({
	width: '100%',
	border: '2px solid #619B8A',
	zIndex: 1,
	position: 'relative',
});

const mapContainerStyle = {
	width: '100%',
	height: '570px'
}

const center = {
	lat: 0.000000,
	lng: 0.000000,
}

const googleMapsOptions = {
	styles: LocationAddStyle,
	streetViewControl: false,
	mapTypeControl: false,
	keyboardShortcuts: false,
	fullscreenControl: false,
	//Doesn't allow the user to see the grey border when zooming out
	restriction: {
		latLngBounds: { north: 85, south: -85, west: -180, east: 180 },
		strictBounds: true,
	},
}

//Label settings:
const label = {
	text: 'Pictures location',
	fontWeight: 'bold',
	color: "white"
}


const AutoComplete = styled(Autocomplete)({

	maxWidth: 300,

	'& .MuiInputBase-input': {
		height: 7,
		background: 'white',
		borderRadius: '2px',
	},

});

const AutoCompleteSMBox = styled(Box)({
	paddingTop: 70,
	paddingLeft: 20,
})

const AutoCompleteDefBox = styled(Box)({
	paddingTop: 10,
	paddingLeft: 500,
})



const AutoCompleteTextField = styled(TextField)({
	'&:hover fieldset': {
		borderColor: 'white',
	},

	'*.Mui-focused': {
		borderColor: 'transparent',
		outline: 'none',
	},

	background: 'white',
	borderRadius: '2px',

});

const libraries = ["places"];

//Component:
const LocationAddMap = ({ coordinates, onClick }:
	{ coordinates: Coordinate, onClick: any }) => {

	//Location coordinates marker (For paning and zooming)
	const [mapCoordinates, setMapCoordinates] = useState<Coordinate>(coordinates);
	const [zoom, setzoom] = useState<number>(2);
	const [locationName, setLocationName] = useState<string>('');

	//Google api key
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
		//@ts-ignore
		libraries,
	});

	if (loadError) return <div>Error loading maps</div>;
	if (!isLoaded) return <div>Loading maps</div>;

	return (
		<LocationAddMapBox>
			<GoogleMap mapContainerStyle={mapContainerStyle} zoom={zoom}
				center={mapCoordinates} options={googleMapsOptions} onClick={onClick}>

				{/* Location search /w autocomplete */}
				<AutoCompleteDefBox sx={{ display: { xs: 'none', lg: 'block' } }}>
					<Search />
				</AutoCompleteDefBox>

				<AutoCompleteSMBox sx={{ display: { xs: 'block', lg: 'none' } }}>
					<Search />
				</AutoCompleteSMBox>

				{/* Location marker */}
				{((coordinates.lat !== 0.000000 && coordinates.lng !== 0.000000)) &&
					<Marker label={label} icon={{
						labelOrigin: new window.google.maps.Point(15, -10),
						url: MarkedLocationIcon as string,
						scaledSize: new window.google.maps.Size(20, 30)
					}} position={{ lat: coordinates.lat, lng: coordinates.lng }} />
				}

			</GoogleMap>
		</LocationAddMapBox>
	);


	function Search() {
		const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
			requestOptions: { //@ts-ignore
				location: { lat: () => 0.000000, lng: () => 0.000000 },
				radius: 200 * 1000,
			},
		});

		return (
			<AutoComplete
				value={locationName}
				onChange={async (event, value) => {
					axios({
						method: 'GET',
						url: `https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string}`,
					}).then(async function (response) {
						//@ts-ignore
						setLocationName(value)
						setValue(locationName, false);
						clearSuggestions();

						setMapCoordinates({
							lat: response.data.results[0].geometry.location.lat,
							lng: response.data.results[0].geometry.location.lng
						});
						value = value;
						setzoom(15);
					}).catch(error => {
						console.error('Error: ', error);
					});
				}}
				disablePortal
				id="combo-box-demo"
				options={
					data.map(item => {
						return item.description;
					})
				}
				renderInput={(params) =>
					<AutoCompleteTextField variant='outlined'
						style={{}} {...params} placeholder="Enter picture location"
						value={value} onChange={(e) => setValue(e.target.value)}
						disabled={!ready}
					/>

				}
			/>
		);
	}
}

export default LocationAddMap

