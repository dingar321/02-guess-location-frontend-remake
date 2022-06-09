import { Autocomplete, Box, Hidden, styled, TextField } from '@mui/material';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import axios from 'axios';
import React, { useState } from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import LocationAddStyle from '../../assets/styles/LocationAdd.style';
import LocationGuessStyle from '../../assets/styles/LocationGuess.style';
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
	border: '2px solid #619B8A',
	zIndex: 1,
	position: 'relative',
});

const mapContainerStyle = {

	height: '570px'
}

const googleMapsOptions = {
	styles: LocationGuessStyle,
	streetViewControl: false,
	mapTypeControl: false,
	keyboardShortcuts: false,
	fullscreenControl: false,
	//Doesn't allow the user to see the grey border when zooming out
	restriction: {
		latLngBounds: {
			north: 85,
			south: -85,
			west: -180,
			east: 180
		},
		strictBounds: true,
	},
}




const AutoCompleteTextField = styled(TextField)({
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

				{/* Guess marker */}
				{((coordinates.lat !== 0.000000 && coordinates.lng !== 0.000000)) &&
					<Marker label={{ text: 'Your guess', fontWeight: 'bold', color: "white" }} position={{ lat: coordinates.lat, lng: coordinates.lng }}
						icon={{ labelOrigin: new window.google.maps.Point(10, -10), url: MarkedLocationIcon, scaledSize: new window.google.maps.Size(20, 30) }} />
				}

			</GoogleMap>
		</LocationAddMapBox>
	);
}

export default LocationAddMap

