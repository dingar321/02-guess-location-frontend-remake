import { Box, Grid, styled, useMediaQuery } from '@mui/material'
import React from 'react'
import { RightSideImage } from '../assets/images/Images'
import SignupForm from '../components/forms/signup/SignupForm'
import Navbar from '../components/navbar/Navbar'

const SignupFormGrid = styled(Grid)({
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
});

const Signup = () => {
	//Checks the window width  
	const matches = useMediaQuery("(min-width: 1000px)");

	return (
		<Grid container={matches}>
			<SignupFormGrid item xs={12} sm={6}>
				<Navbar />
				<SignupForm />
				<Box />
			</SignupFormGrid>

			<Grid container item xs={12} sm={6}
				sx={{ display: { xs: 'none', md: 'flex' } }}>
				{/* Move to component "RightSideImage" */}
				<img src={RightSideImage}
					style={{ width: '100%', height: '100vh', objectFit: 'cover' }} alt="right-side" />
			</Grid>
		</Grid >
	);
}

export default Signup