import { Person } from '@mui/icons-material';
import { Avatar, Box, IconButton, styled } from '@mui/material'
import React, { useState } from 'react'

const AvatarPlaceholder = styled(Avatar)({
	background: '#BDBDBD',
});

const ProfileIcon = ({ width, height }:
	{ width: number, height: number }) => {

	const [loggedUser, setLoggedUser] = useState<boolean>(false);

	return (
		<Box style={{ cursor: 'pointer' }}>
			{((loggedUser === false)) &&
				<AvatarPlaceholder alt='profile'
					style={{ width: width, height: height }}>
					<Person />
				</AvatarPlaceholder>
			}

			{((loggedUser === true)) &&
				<Avatar alt='profile' src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'
					style={{ width: width, height: height }} />
			}
		</Box >
	)
}

export default ProfileIcon