import styled from '@emotion/styled';
import { Box, Card, IconButton, Typography } from '@mui/material';

const GuessCardBox = styled(Card)(({ cardwidth, cardheight }:
	{ cardwidth: number, cardheight: number }) => ({
		width: cardwidth,
		height: cardheight,
		cursor: 'pointer',
		borderRadius: '4px',
		//Background gradient:
		background: 'linear-gradient(90deg, rgba(102, 159, 137, 0.6) 50%, rgba(159, 193, 129, 0.6) 128%)'

	}));

const GuessCardButton = styled(IconButton)(({ cardwidth, cardheight }:
	{ cardwidth: number, cardheight: number }) => ({
		//Button fits inside the card
		width: cardwidth,
		height: cardheight,
		borderRadius: '4px',

	}));

const GuessCardMedia = styled('img')(({ cardwidth, cardheight }:
	{ cardwidth: number, cardheight: number }) => ({
		//Image fits inside the card
		width: cardwidth,
		height: cardheight,
		zIndex: -1,
		position: 'relative',

	}));

const ErrorDistance = styled(Typography)({
	position: 'absolute',
	color: '#FFFFFF',
});

//Hover styles:

const FadeButton = styled(Typography)({
	background: 'white',
	width: '120px', height: '36px',
	borderRadius: '4px',
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',

});

const SolidGreenBox = styled(Box)(({ cardwidth, cardheight }:
	{ cardwidth: number, cardheight: number }) => ({
		top: 0, left: 0, position: 'absolute',
		background: '#619B8A',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: cardwidth, height: cardheight,
	}));


export {
	GuessCardBox, GuessCardButton, GuessCardMedia,
	ErrorDistance, FadeButton, SolidGreenBox
};
