import { Fade } from '@mui/material';
import React, { useState } from 'react';
import { ErrorDistance, GuessCardBox, GuessCardButton, GuessCardMedia, SolidGreenBox } from './GuessCard.syle';


const GuessCard = ({ width, height, }:  //<--- We are also going to recieve a Guess object
	{ width: number, height: number, }) => {

	//Placeholder, when the real data is introducet replace with the Guess object
	const imageURL = 'https://scandinaviantraveler.com/sites/default/files/styles/facebook_share/public/paris-momontmartre-1140x619.png?itok=-VCuhabT';
	//Placeholder, when the real data is introducet replace with the Guess object
	const errorDistance = '353';

	//Checks if we are hovering over the guess card
	const [onHover, setOnHover] = useState<boolean>(false);

	return (
		<GuessCardBox cardwidth={width} cardheight={height} elevation={5}
			onMouseEnter={() => setOnHover(true)}
			onMouseLeave={() => setOnHover(false)}>
			<GuessCardButton cardwidth={width} cardheight={height}
				onClick={(e) => console.log('Guess card clicked')}>

				{/* Fade effect if we arent hovered (Looks better) */}
				<Fade in={onHover === false} timeout={500}>
					<ErrorDistance variant='distance' >
						{errorDistance} km
					</ErrorDistance>
				</Fade>

				{/* Fade effect if we hover over the card */}
				<Fade in={onHover === true} timeout={500}>
					<SolidGreenBox cardwidth={width} cardheight={height}>
						<ErrorDistance variant='distance'>
							GUESS
						</ErrorDistance>
					</SolidGreenBox>
				</Fade>

				{/* The background should always be visible */}
				<GuessCardMedia cardwidth={width} cardheight={height} src={imageURL} />
			</GuessCardButton>
		</GuessCardBox>
	);
}

export default GuessCard

/* LEGACY
(Not Figma compliant): 
<FadeButton>
	GUESS
</FadeButton>
*/