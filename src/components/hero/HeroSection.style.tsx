import styled from '@emotion/styled';
import { Box, Button, Grid, Typography } from '@mui/material';

const HeroContainer = styled(Box)({

});


//Hero browser
const HeroGridBrowser = styled(Grid)({
	position: 'relative',
	float: 'left',
	top: 0,
	left: 0,
	width: '100%',
	minHeight: '700px'
});

const HeroImageBrowser = styled('img')({
	right: 0,
	width: '1150px',
	height: '650px',
	position: 'absolute',
});

const HeroGreetingBrowser = styled(Box)({
	position: 'absolute',
	maxWidth: '430px',

	//padding top (TODO: BETTER WAY OF CENTERING PLEASE)
	marginTop: '160px',
});

const HeroHeaderBrowser = styled(Typography)({
	fontWeight: 500,
	fontSize: '61px',
	lineHeight: '70px',
	letterSpacing: '-0.5px',
});

const HeroDescriptionBrowser = styled(Typography)({
	lineHeight: '19px',
	marginTop: '30px',
});


//Hero device
const HeroGridDevice = styled(Grid)({
	textAlign: 'center',
	itemAlign: 'center',
	position: 'relative',
	float: 'left',
	top: 0,
	left: 0,
	width: '100%',
	minHeight: '500px',
	paddingTop: 48
});


const HeroHeaderDevice = styled(Typography)({
	lineHeight: '40px',
	marginBottom: '20px',
});


const HeroDescriptionDevice = styled(Typography)({

});

const HeroImageDevice = styled('img')({
	width: '80%', //<-- keep at 80% for best results
	height: 'auto'
});

const HeroButton = styled(Button)({
	width: '137px',
	height: '39px',

	marginTop: '30px'
});


export {
	HeroContainer, HeroGridBrowser, HeroImageBrowser, HeroGreetingBrowser,
	HeroHeaderBrowser, HeroDescriptionBrowser, HeroGridDevice, HeroImageDevice,
	HeroHeaderDevice, HeroDescriptionDevice, HeroButton,
};