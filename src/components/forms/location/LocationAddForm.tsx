import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, IconButton, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import Coordinate from '../../../utils/types/Coordinate';
import LocationAddMap from '../../maps/LocationAddMap';

import ImageUpload from '../../upload/ImageUpload';


const AccordionBox = styled(Accordion)({
	maxWidth: '420px',
	marginTop: '1em',


	'&.Mui-expanded': {
		Maxheight: '335px',
		background: 'rgba(255, 255, 255, 1)',
		//opacity: 0.6,
	},

});



const LocationAddForm = () => {

	//Location image
	const [image, setImage] = useState<File>()
	const [uploadedImagePath, setUploadedImagePath] = useState<string>('')
	const [uploadedImageName, setUploadedImageName] = useState<string>('')

	//Location coordinates marker
	const [coordinates, setCoordinates] = useState<Coordinate>({ lat: 0.000000, lng: 0.000000 });
	const [cordChanged, setChordChanged] = useState<boolean>(false);

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		//Picture upload
		if (!e.target.files) {
			return;
		} else {
			let img = e.target.files[0];
			setImage(img);
			setUploadedImageName(img.name);
			setUploadedImagePath(URL.createObjectURL(img));
		}
	}

	return (
		<Box>
			<Box style={{ position: 'absolute', zIndex: 2, marginTop: '40px', marginLeft: '20px', marginRight: '20px', }}>
				{/* Accordian with location picture */}
				<AccordionBox elevation={2}>
					<AccordionSummary expandIcon={<ExpandMore />}>
						<Typography variant='h5' color='secondary'>
							Add a new <span style={{ color: '#619B8A' }}>location</span>
						</Typography>
					</AccordionSummary>
					<AccordionDetails style={{ maxHeight: '335px' }}>
						<Divider />
						{/* Are where we are gonna place the image upload */}
						<ImageUpload uploadedImageName={uploadedImageName} uploadedImagePath={uploadedImagePath}
							onChange={handleChange} onClick={null} />
					</AccordionDetails>
				</AccordionBox>
			</Box>

			<Box>
				{/* Google maps */}
				<LocationAddMap coordinates={coordinates} onClick={(e: any) => {
					setCoordinates({ lat: e.latLng?.lat() as number, lng: e.latLng?.lng() as number });
					setChordChanged(true);
				}} />
			</Box>


		</Box>
	);
}

export default LocationAddForm
/*
---------------------------------------
TODO: When resizing window the accoridan size needs to also resize
---------------------------------------
TODO:  Maybe remove th background from the accordian ????!?!?!? 
*/