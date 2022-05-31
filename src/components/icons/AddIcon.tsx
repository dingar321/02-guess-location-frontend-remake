import { Add } from '@mui/icons-material'
import { Box, IconButton, styled } from '@mui/material'
import React from 'react'

const Button = styled(IconButton)({
	background: '#619B8A',
});


const AddIcon = ({ width, height, color }:
	{ width: number, height: number, color: string }) => {
	return (
		<Box>
			<Button disableRipple
				style={{ width: width, height: height, }}>
				<Add style={{ color: 'white' }} />
			</Button>
		</Box>
	)
}

export default AddIcon