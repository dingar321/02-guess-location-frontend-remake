import styled from '@emotion/styled';
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const HamChevronButton = styled(IconButton)({
	/* The actuall button that gets clicked */

	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',

	width: '350px',

	borderRadius: '4px',
	'&:hover': {
		backgroundColor: "#E7E7E7"
	}

});


const HamburgerChevronButton = ({ children, color }:
	{ children: string, color: string }) => {
	return (
		<HamChevronButton disableRipple >
			<Typography variant='h5' color={color}>
				{children}
			</Typography>
			<Typography variant='h5' color={color}
				style={{ paddingTop: '10px' }}>
				<ChevronRightIcon />
			</Typography>
		</HamChevronButton>
	)
}

export default HamburgerChevronButton