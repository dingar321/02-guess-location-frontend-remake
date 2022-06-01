import styled from '@emotion/styled';
import { Box, Grid, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { RightSideImage } from '../assets/images/Images';
import SigninForm from '../components/forms/signin/SigninForm';
import Navbar from '../components/navbar/Navbar';


const SigninFormGrid = styled(Grid)({
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
});


const Signin = () => {
	//Checks the window width  
	const matches = useMediaQuery("(min-width: 850px)");

	return (
		<Grid container={matches}>
			<SigninFormGrid item xs={12} sm={6}>
				<Navbar />
				<SigninForm />
				<Box />
			</SigninFormGrid>

			<Grid container item xs={12} sm={6}
				sx={{ display: { xs: 'none', md: 'flex' } }}>
				{/* Move to component "RightSideImage" */}
				<img src={RightSideImage}
					style={{ width: '100%', height: '100vh', objectFit: 'cover' }} alt="right-side" />
			</Grid>
		</Grid >
	)
}

export default Signin