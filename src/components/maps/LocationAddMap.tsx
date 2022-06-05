import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import React from 'react'
import LocationAddStyle from '../../assets/styles/LocationAdd.style';
import Coordinate from '../../utils/types/Coordinate'

const MarkedLocationIcon = require('../../assets/icons/MarkedLocationIcon.png') as string;

const LocationAddMapBox = styled(Box)({
	width: '100%',
	border: '2px solid #619B8A',
	zIndex: 1,
	position: 'relative',
});

const mapContainerStyle = {
	width: '100%',
	height: '650px'
}

const center = {
	lat: 0.000000,
	lng: 0.000000,
}

const googleMapsOptions = {
	//styles: LocationAddStyle,
	streetViewControl: false,
	mapTypeControl: false,
	keyboardShortcuts: false,
	restriction: { //<- Doesn't allow the user to see the grey border when zooming out
		latLngBounds: { north: 85, south: -85, west: -180, east: 180 },
		strictBounds: true,
	},
}

//Label settings:
const label = {
	text: 'Pictures location',
	fontWeight: 'bold',
	color: "#619B8A"
}



const LocationAddMap = ({ coordinates, onClick }:
	{ coordinates: Coordinate, onClick: any }) => {


	//Google api key
	const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string, });

	if (loadError) return <div>Error loading maps</div>;
	if (!isLoaded) return <div>Loading maps</div>;


	return (
		<LocationAddMapBox>
			<GoogleMap mapContainerStyle={mapContainerStyle} zoom={2} center={center} options={googleMapsOptions} onClick={onClick}>



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


}

export default LocationAddMap