import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, styled, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Coordinate from '../../../utils/types/Coordinate';
import LocationAddMap from '../../maps/LocationAddMap';
import ImageUpload from '../../upload/ImageUpload';
import { AccordianContainerBox, AccordionBox, GreenSpan, MapContainerBox, SubmitButton } from './LocationAddForm.style';

const LocationAddForm = () => {

	//Location image
	const [image, setImage] = useState<File>()
	const [uploadedImagePath, setUploadedImagePath] = useState<string>('')
	const [uploadedImageName, setUploadedImageName] = useState<string>('')

	//Location coordinates marker 
	const [coordinates, setCoordinates] = useState<Coordinate>({ lat: 0.000000, lng: 0.000000 });
	const [cordChanged, setChordChanged] = useState<boolean>(false);

	//Chosen location name
	const [locationName, setLocationName] = useState<string>('');

	//setting location after selecting a location on the map
	useEffect(() => {
		if (cordChanged) {
			setChordChanged(false);
			axios({
				method: 'GET',
				url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string}`,
			}).then(async function (response) {
				//Getting the location name
				setLocationName(response.data.results[2].formatted_address);
			}).catch(error => {
				setLocationName('Unknown');
				console.error('Error: ', error);
			});
		}
	}, [cordChanged])

	//Picture upload
	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) {
			return;
		} else {
			let img = e.target.files[0];
			setImage(img);
			setUploadedImageName(img.name);
			setUploadedImagePath(URL.createObjectURL(img));
		}
	}

	//Handle submit
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		//check if data exists !
		// - image is uploaded
		// - location is selected
		//error otherwise

		console.log('Picture: ', image);
		console.log('Lat: ', coordinates.lat);
		console.log('Lng: ', coordinates.lng);
		console.log('Location: ', locationName);
	}

	return (
		<Box component="form" noValidate={true} onSubmit={handleSubmit}>
			<Typography style={{ paddingBottom: 20, }} variant='h4' color='secondary'>
				Add a new <GreenSpan>location</GreenSpan>
			</Typography>
			<AccordianContainerBox>
				{/* Accordian with location picture */}
				<AccordionBox elevation={2}>
					<AccordionSummary expandIcon={<ExpandMore />}>
						<Typography variant='h5' color='secondary'>
							Uploade picture
						</Typography>
					</AccordionSummary>
					<AccordionDetails style={{ maxHeight: '335px' }}>
						<Divider />
						{/* Are where we are gonna place the image upload */}
						<ImageUpload uploadedImageName={uploadedImageName} uploadedImagePath={uploadedImagePath}
							onChange={handleChange} onClick={null} />
					</AccordionDetails>
				</AccordionBox>
			</AccordianContainerBox>

			<MapContainerBox>
				{/* Google maps */}
				<LocationAddMap coordinates={coordinates} onClick={(e: any) => {
					setCoordinates({ lat: e.latLng?.lat() as number, lng: e.latLng?.lng() as number });
					setChordChanged(true);
				}} />
			</MapContainerBox>

			<Typography>
				<GreenSpan>Selected location: </GreenSpan>
				{locationName}
			</Typography>

			<SubmitButton>
				<Button type='submit' disableRipple variant='contained' color='primary'>
					ADD LOCATION
				</Button>
			</SubmitButton>
		</Box>
	);
}

export default LocationAddForm


/*
---------------------------------------
TODO: When resizing window the accoridan size needs to also resize
---------------------------------------
*/