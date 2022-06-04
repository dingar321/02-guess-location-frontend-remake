import { Clear, Edit } from '@mui/icons-material';
import { Box, CardActionArea, IconButton, styled } from '@mui/material';
import React, { useState } from 'react';
import {
	IconButtonBox,
	IconButtonCard,
	LocationCardBox, LocationCardButton,
	LocationCardMedia, LockedLocationCardBox, LockIcon
} from './LocationCard.style';


const LocationCard = ({ width, height, }:  //<--- We are also going to recieve a location object
	{ width: number, height: number, }) => {

	//If the user is logged in	
	const [loggedUser, setLoggedUser] = useState<boolean>(false);

	//If we are on the profile page
	const [profilePage, serProfilePage] = useState<boolean>(false);

	//Placeholder, when the real data is introducet replace with the Location object
	const ImageSRC = 'https://scandinaviantraveler.com/sites/default/files/styles/facebook_share/public/paris-momontmartre-1140x619.png?itok=-VCuhabT';

	return (
		<>
			{((profilePage === false)) &&
				//If the user is NOT located on the profie page
				<>
					{((loggedUser === false)) &&
						//User is NOT logged (show a card with a lock and gradient)
						<LockedLocationCardBox cardwidth={width} cardheight={height} elevation={5} >
							<LocationCardButton cardwidth={width} cardheight={height} onClick={(e) =>
								console.log('Location card Clicked')}>
								<LockIcon />
								<LocationCardMedia cardwidth={width} cardheight={height} src={ImageSRC} />
							</LocationCardButton>
						</LockedLocationCardBox>

					}

					{((loggedUser === true)) &&
						//User IS logged (show a card no lock or gradient )
						<LocationCardBox cardwidth={width} cardheight={height} elevation={5} >
							<LocationCardButton cardwidth={width} cardheight={height}
								onClick={(e) => console.log('Locationcard Clicked')}>
								<LocationCardMedia cardwidth={width} cardheight={height} src={ImageSRC} />
							</LocationCardButton>
						</LocationCardBox>
					}
				</>
			}

			{((profilePage === true)) &&
				//If the user IS located on the profie page
				<LocationCardBox cardwidth={width} cardheight={height} elevation={5} >
					{/* Edit icon */}
					<IconButtonBox sx={{ float: 'left', }}>
						<IconButtonCard background='#619B8A' onClick={(e) =>
							console.log('I am an edit button')}>
							<Edit />
						</IconButtonCard>
					</IconButtonBox>
					{/* Delete icon */}
					<IconButtonBox sx={{ float: 'right' }}>
						<IconButtonCard background='#9B6161' onClick={(e) =>
							console.log('I am a delete button')}>
							<Clear />
						</IconButtonCard>
					</IconButtonBox>
					{/* The clickable image */}
					<LocationCardButton cardwidth={width} cardheight={height}
						onClick={(e) => console.log('Locationcard Clicked')}>
						<LocationCardMedia cardwidth={width} cardheight={height} src={ImageSRC} />
					</LocationCardButton>
				</LocationCardBox>
			}

		</>
	)
}

export default LocationCard


/*LOCATION CARD WITH THE LOCK
<LockedLocationCardBox cardwidth={width} cardheight={height} elevation={5} >
		<LocationCardButton cardwidth={width} cardheight={height} onClick={(e) => console.log('Locationcard Clicked')}>
			<LockIcon />
			<LocationCardMedia cardwidth={width} cardheight={height} src={ImageSRC} />
	</LocationCardButton>
</LockedLocationCardBox>
*/

/*LOCATION CARD LOGGED IN
<LocationCardBox cardwidth={width} cardheight={height} elevation={5} >
	<LocationCardButton cardwidth={width} cardheight={height} onClick={(e) => console.log('Locationcard Clicked')}>
		<LocationCardMedia cardwidth={width} cardheight={height} src={ImageSRC} />
	</LocationCardButton>
</LocationCardBox>
*/

/*LOCATION CARD LOGGED IN AND ON PROFILE

*/

//disableRipple

/*
Currently only 2 sizes:
- 310 x 175 <> I
- 420 x 235 <> I
*/