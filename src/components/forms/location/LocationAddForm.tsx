import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Grid, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import ImageUpload from '../../upload/ImageUpload'


const AccordionBox = styled(Accordion)({
	maxWidth: '420px',
	marginTop: '1em',


	'&.Mui-expanded': {
		Maxheight: '335px',
		background: 'rgba(255, 255, 255, 0.9)',
		//opacity: 0.6,
	},

});

const LocationAddForm = () => {

	//Location image
	const [image, setImage] = useState<File>()
	const [uploadedImagePath, setUploadedImagePath] = useState<string>('')
	const [uploadedImageName, setUploadedImageName] = useState<string>('')

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

	return (
		<Box>

			{/* 
			--------------------------
			TODO:  Maybe remove th background from the accordian ????!?!?!? 
			*/}

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
	);
}

export default LocationAddForm
/*
---------------------------------------
TODO: When resizing window the accoridan size needs to also resize
---------------------------------------
*/