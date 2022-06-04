import { Box } from '@mui/material';
import React from 'react';
import { WorldMap } from '../../assets/images/Images';
import { HeroButton, HeroContainer, HeroDescriptionBrowser, HeroDescriptionDevice, HeroGreetingBrowser, HeroGridBrowser, HeroGridDevice, HeroHeaderBrowser, HeroHeaderDevice, HeroImageBrowser, HeroImageDevice } from './HeroSection.style';

const HeroSection = () => {
	return (
		<HeroContainer>

			<HeroGridBrowser sx={{ display: { xs: 'none', lg: 'flex' } }}>
				{/* Hero browser */}
				<HeroImageBrowser src={WorldMap} />
				<HeroGreetingBrowser>
					<HeroHeaderBrowser color='primary'>
						Explore the
						world with Geotagger!
					</HeroHeaderBrowser>
					<HeroDescriptionBrowser color='secondary'>
						Geotagger is website that allows you to post picture and tag it on the map. Other user than try to locate it via Google Maps.
					</HeroDescriptionBrowser>
					<HeroButton variant='contained' disableRipple color='primary'>
						SIGN UP
					</HeroButton>
				</HeroGreetingBrowser>
			</HeroGridBrowser >

			<HeroGridDevice sx={{ display: { xs: 'block', lg: 'none', } }} >
				{/* Hero device */}
				<Box>
					<HeroHeaderDevice variant='h4' color='primary'>
						Explore the world with  Geotagger!
					</HeroHeaderDevice>
					<HeroDescriptionDevice variant='body' color='secondary'>
						Geotagger is website that allows you to post picture and tag it on the map. Other user than try to locate it via Google Maps.
					</HeroDescriptionDevice>

				</Box>
				<Box>
					<HeroButton variant='contained' disableRipple color='primary'>
						SIGN UP
					</HeroButton>
				</Box>
				<HeroImageDevice src={WorldMap} />
			</HeroGridDevice>



		</HeroContainer>
	);
}

export default HeroSection