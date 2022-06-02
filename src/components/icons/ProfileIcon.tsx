import { Person, Upload } from '@mui/icons-material';
import { Avatar, Box, IconButton, styled } from '@mui/material'
import React, { useState } from 'react'

const ProfileIcon = ({ width, height }:
	{ width: number, height: number }) => {

	const [loggedUser, setLoggedUser] = useState<boolean>(false); //<-- Use this for the profile image !

	const ProfileImageBox = styled(Box)({
		cursor: 'pointer',
		borderRadius: '50%',
	});

	const AvatarIcon = styled(Avatar)({
		borderRadius: '50%',

		width: width,
		height: height,

		background: '#BDBDBD',
		color: 'white',
	});

	return (
		<ProfileImageBox>

			{((loggedUser === false)) &&
				/* If the user is not logged id display: 'placeholder profile' image */
				<AvatarIcon>
					<Person />
				</AvatarIcon>
			}

			{((loggedUser === true)) &&
				/* If the user is logged in display: 'Users profile image' */
				<AvatarIcon alt='profile' src='https://image.shutterstock.com/image-photo/young-man-checking-his-sports-600w-1373615606.jpg'>
					{/* Uploaded profile image */}
				</AvatarIcon>
			}

		</ProfileImageBox >
	)
}

export default ProfileIcon