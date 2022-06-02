import { Person, Upload } from '@mui/icons-material';
import { Avatar, Box, IconButton, Input, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProfileIcon from '../icons/ProfileIcon'

//Remove the input field from showing up
const UploadInput = styled('input')({
	display: 'none',
});

const AvatarIcon = styled(Avatar)({
	background: '#BDBDBD', //<-- TODO: Placeholder color (use theme ?gray?)
	color: 'white',

	//Size 
	/* Style for my 'TextField' */
	// ------------------------------------
	//TODO: Move the style in component to the styled props (weight and height)
	//------------------------------------

	'&:hover': {
		backgroundColor: '#619B8A', //<-- TODO:  Placeholder color (use theme -> primary)
	}

});

const ProfileUpload = ({ onChange, width, height, imageUrl }:
	{ onChange: any, width: number, height: number, imageUrl: string }) => {

	//Checks if we are hovering over the input
	const [onHover, setOnHover] = useState<boolean>(false);

	return (
		<label htmlFor="icon-button-file" onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
			<UploadInput id="icon-button-file" type="file" onChange={onChange} />
			<span>

				{((onHover === true)) &&
					/* If the user has not uploaded an image display: 'green uploade icon' */
					<AvatarIcon style={{ width: width, height: height }}>
						<Upload />
					</AvatarIcon>
				}

				{((onHover === false)) &&
					<>
						{((imageUrl === '')) &&
							/* If the user has not uploaded an image display: 'placeholder uploade icon' */
							<AvatarIcon style={{ width: width, height: height }}>
								<Person />
							</AvatarIcon>
						}

						{((imageUrl !== '')) &&
							/* If the user has uploaded an image display: 'Users uploaded profile image' */
							<AvatarIcon alt='profile' src={imageUrl} style={{ width: width, height: height }}>
								{/* Uploaded profile image */}
							</AvatarIcon>
						}
					</>
				}

			</span>
		</label>
	)
}

export default ProfileUpload