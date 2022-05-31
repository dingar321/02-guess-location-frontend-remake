import { Close } from '@mui/icons-material';
import { IconButton, styled, Typography } from '@mui/material';
import React from 'react'


const CloseIconButton = styled(IconButton)({

	float: 'right',

	//Make the button bigger:
	transform: 'scale(1.2)',
	width: '40px',
	height: '40px',

	background: 'white',

	margin: '18px',
	marginRight: '57px',
	marginTop: '30px',
	paddingTop: '15px',
	/* Gradient green NOT WORKING */
	//background: 'linear-gradient(90deg, #659E89 0%, #619B8A 32.12%, #A1C181 100%)',

	/* The actuall button that gets clicked */
	borderRadius: '4px',
	'&:hover': {
		backgroundColor: "#E7E7E7"
	},
});

const CloseIcon = ({ onClick }:
	{ onClick: any }) => {
	return (
		<CloseIconButton disableRipple onClick={onClick}>
			<Typography color='primary'>
				{/* TODO: Move to seperate component */}
				<Close />
			</Typography>
		</CloseIconButton>
	)
}

export default CloseIcon