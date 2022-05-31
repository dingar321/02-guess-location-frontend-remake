import { Menu } from '@mui/icons-material';
import { IconButton, styled, Typography } from '@mui/material';
import React from 'react'

const MenuIconButton = styled(IconButton)({
	marginTop: '15px',
	//Make the button bigger:
	transform: 'scale(1.2)',

	width: '40px',
	height: '40px',

	background: 'white',

	paddingTop: '15px',
	/* Gradient green NOT WORKING */
	//background: 'linear-gradient(90deg, #659E89 0%, #619B8A 32.12%, #A1C181 100%)',

	/* The actuall button that gets clicked */
	borderRadius: '4px',
	'&:hover': {
		backgroundColor: "#E7E7E7"
	},
});

const MenuIcon = ({ onClick }:
	{ onClick: any }) => {
	return (
		<MenuIconButton disableRipple onClick={onClick}>
			<Typography color='primary'>
				{/* TODO: Move to seperate component */}
				<Menu />
			</Typography>
		</MenuIconButton>
	)
}

export default MenuIcon