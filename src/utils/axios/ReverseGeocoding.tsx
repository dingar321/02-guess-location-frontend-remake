import axios from 'axios';
import Coordinate from '../types/Coordinate';

//Convert postal GPS coordinates to addresses
export function reverseGeocoding({ coordinates }: { coordinates: Coordinate }) {

	//Getting the api key from enviroment file 
	const APIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;

	axios({
		method: 'GET',
		url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=${APIKey}`,
	}).then(async function (response) {
		//Getting the location name
		return response.data.results[2].formatted_address;
	}).catch(error => {
		//If he click on the ocean !
		return 'Unknown';
	});

}

