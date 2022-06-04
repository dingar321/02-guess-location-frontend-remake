import styled from '@emotion/styled';
import { LockOutlined } from '@mui/icons-material';
import { Box, Button, Card, Grid, IconButton, Typography } from '@mui/material';

const LockedLocationCardBox = styled(Card)(({ cardwidth, cardheight }:
	{ cardwidth: number, cardheight: number }) => ({
		width: cardwidth,
		height: cardheight,
		cursor: 'pointer',
		borderRadius: '4px',
		//Background gradient:
		background: 'linear-gradient(90deg, rgba(102, 159, 137, 0.6) 50%, rgba(159, 193, 129, 0.6) 128%)'
	}));

const LocationCardBox = styled(Card)(({ cardwidth, cardheight }:
	{ cardwidth: number, cardheight: number }) => ({
		width: cardwidth,
		height: cardheight,
		cursor: 'pointer',
		borderRadius: '4px',
		//Background gradient:
		background: 'none'
	}));

const LocationCardMedia = styled('img')(({ cardwidth, cardheight }:
	{ cardwidth: number, cardheight: number }) => ({
		//Image fits inside the card
		width: cardwidth,
		height: cardheight,
		zIndex: -1,
		position: 'relative',
	}));

const LocationCardButton = styled(IconButton)(({ cardwidth, cardheight }:
	{ cardwidth: number, cardheight: number }) => ({
		//Button fits inside the card
		width: cardwidth,
		height: cardheight,
		borderRadius: '4px',

	}));

const LockIcon = styled(LockOutlined)({
	position: 'absolute',
	color: '#FFFFFF',
	//Size:
	width: '32px',
	height: '42px',
});


//If the user is NOT located on the profie page
/* The card with 2 buttons styles */

const IconButtonCard = styled(IconButton)(({ background }:
	{ background: string }) => ({
		background: background,
		width: '40px',
		height: '40px',
		borderRadius: '4px',
		color: 'white',

		position: 'absolute',
		zIndex: 2,
		margin: '10px',

		//On hover: 
		'&:hover': {
			color: 'orange', //<-- TODO:  Placeholder color (use theme -> primary)
			background: background,
		}
	}));

const IconButtonBox = styled(Box)({
	marginRight: 60,
});


export {
	LockIcon, LocationCardButton, LocationCardMedia, IconButtonCard,
	LocationCardBox, LockedLocationCardBox, IconButtonBox
};