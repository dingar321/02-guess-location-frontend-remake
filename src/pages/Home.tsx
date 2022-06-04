import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import HeroSection from '../components/hero/HeroSection'
import Layout from '../components/layout/Layout'
import LocationPagination from '../components/pagination/location/LocationPagination'

const LocationCardsHeaderBox = styled(Box)({
	textAlign: 'center',
	itemAlign: 'center',
	paddingTop: 750

})

const Home = () => {
	return (
		<Layout>
			{/* Hero */}
			<HeroSection />

			{/* Showcase  */}
			<LocationCardsHeaderBox>
				<Typography variant='h4' color='primary' style={{ marginBottom: '10px' }}>
					Try yourself at Geotagger!
				</Typography>
				<Typography variant='body' color='secondary'>
					Try to guess the location of image by selecting position on the map. When you guess it, it gives you the error distance.
				</Typography>
			</LocationCardsHeaderBox>

			{/* Showcase  */}
			<LocationPagination />

		</Layout >
	)
}

export default Home