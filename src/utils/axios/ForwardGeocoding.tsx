import axios from 'axios';

//Convert postal addresses to GPS coordinates
export async function forwardGeocoding({ locationName }: { locationName: string }) {

	var array: any = []


	//Getting the api key from enviroment file 
	const APIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;

	axios({
		method: 'GET',
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${locationName}&key=${APIKey}`,
	}).then(response => {

		array = response;

	}).catch(error => {
		console.error('Error: ', error);
	});

	return await array;
}