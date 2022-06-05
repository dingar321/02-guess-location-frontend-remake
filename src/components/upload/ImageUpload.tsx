import { CameraAlt } from '@mui/icons-material';
import { Box, Button, Grid, IconButton, styled, Typography } from '@mui/material'
import React from 'react'
import { UploadImagePlaceholder } from '../../assets/images/Images';

/* The images and divs width's conform to the set width in the accoridan  */

//Remove the input field from showing up
const Input = styled('input')({
	display: 'none',
});

const ImageUploadBox = styled(Box)({
	paddingTop: '1em',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
});

const ButtonUploadBox = styled(Box)({
	marginTop: '1em',
});

const UploadButton = styled(IconButton)({
	width: '200px',
	height: '40px',
	background: 'white',
	borderRadius: 0,
});

const ButtonStyle = styled(Button)({
	width: 200, height: 40,
});


const ImageUpload = ({ onChange, onClick, uploadedImagePath, uploadedImageName }:
	{ onChange: any, onClick: any, uploadedImagePath: string, uploadedImageName: string }) => {



	return (
		<Grid sx={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)' }}>
			<ImageUploadBox>

				{((!uploadedImagePath)) &&
					<>
						<Box style={{ border: '2px dashed #619B8A', maxWidth: '100%', height: 'auto' }}>
							{/* TODO: ADD THE 'NO IMAGE UPLOADED' AND AN ICON (ABSOLUTE, RELATIVE) */}
							<img style={{ maxWidth: '100%', height: '100%' }} src={UploadImagePlaceholder} alt='location' />
						</Box>
					</>
				}
				{((uploadedImagePath)) &&
					<>
						<Box style={{ border: '2px solid #619B8A', maxWidth: '420px', height: '235px', textAlign: 'center' }}>
							<img style={{ maxWidth: '100%', height: '100%' }} src={uploadedImagePath} alt='location' />
						</Box>
						<Typography variant='caption' color='secondary' style={{ width: '100%', marginTop: '10px' }}>
							{uploadedImageName}
						</Typography>
					</>
				}

			</ImageUploadBox>

			<ButtonUploadBox>
				<label htmlFor="icon-button-file">
					<Input id="icon-button-file" type="file" onChange={onChange} />
					<Button disableRipple component="span" variant='contained' color='primary'>
						UPLOAD IMAGE
					</Button>
				</label>
			</ButtonUploadBox>



		</Grid >

	)
}

export default ImageUpload