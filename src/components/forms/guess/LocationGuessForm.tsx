import { ExpandMore } from '@mui/icons-material';
import { AccordionDetails, AccordionSummary, Box, Button, Divider, Grid, Hidden, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import Coordinate from '../../../utils/types/Coordinate';
import LeaderboardCard from '../../cards/leaderboard/LeaderboardCard';
import LocationGuessMap from '../../maps/LocationGuessMap';
import { AccordianContainerBox, AccordionBox, GreenSpan, MapContainerBox, SubmitButton } from './LocationGuessForm.style';

const LocationGuessForm = () => {

	//Location coordinates marker 
	const [coordinates, setCoordinates] = useState<Coordinate>({ lat: 0.000000, lng: 0.000000 });
	const [cordChanged, setChordChanged] = useState<boolean>(false);

	//Checks the window width  
	const matches = useMediaQuery("(min-width: 1000px)");

	//Mock data GET THE IMAGE FROM THE OBJECT 
	const uploadedImagePath = 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Velenjski_grad_poleti.jpg';

	//Handle submit
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		//check if data exists !
		// - location is selected
		//error otherwise

		console.log('Lat: ', coordinates.lat);
		console.log('Lng: ', coordinates.lng);
	}

	return (
		<>
			{/* Browser view */}
			<Grid container wrap="nowrap" component="form" noValidate={true} onSubmit={handleSubmit}
				sx={{ display: { xs: 'none', md: 'flex' } }}>

				<Grid item xs={8} style={{ maxWidth: 1000, minWidth: 500 }}>

					<Typography style={{ paddingBottom: 20, }} variant='h4' color='secondary'>
						Guees the <GreenSpan>location</GreenSpan>
					</Typography>

					<AccordianContainerBox>
						{/* Accordian with location picture */}
						<AccordionBox elevation={2}>
							<AccordionSummary expandIcon={<ExpandMore />}>
								<Typography variant='h5' color='secondary'>
									Location picture
								</Typography>
							</AccordionSummary>
							<AccordionDetails style={{ maxHeight: '335px' }}>
								<Divider />
								{/*  Location image */}
								<Box style={{ border: '2px solid #619B8A', maxWidth: '420px', height: '235px', textAlign: 'center' }}>
									<img style={{ maxWidth: '100%', height: '100%' }} src={uploadedImagePath} alt='location' />
								</Box>
								<Typography variant='caption' color='secondary' style={{ width: '100%', marginTop: '10px' }}>
									Try and guess this location
								</Typography>
							</AccordionDetails>
						</AccordionBox>
					</AccordianContainerBox>

					<MapContainerBox >
						{/* Google maps */}
						<LocationGuessMap coordinates={coordinates} onClick={(e: any) => {
							setCoordinates({ lat: e.latLng?.lat() as number, lng: e.latLng?.lng() as number });
							setChordChanged(true);
						}} />
					</MapContainerBox>

					<SubmitButton>
						<Button type='submit' disableRipple variant='contained' color='primary'>
							GUESS
						</Button>
					</SubmitButton>
				</Grid>

				<Grid item xs={4} style={{ paddingLeft: 25, minWidth: 445 }}>
					<Typography style={{ paddingBottom: 20, }} variant='h4' color='secondary'>
						Leaderboard
					</Typography>
					{/* TODO: Add map function */}
					<LeaderboardCard width={420} height={48} rank={1} />


				</Grid>
			</Grid>


			{/* Device view */}
			<Grid component="form" style={{ flexDirection: 'column' }} noValidate={true} onSubmit={handleSubmit}
				sx={{ display: { xs: 'flex', md: 'none' } }}>

				<Grid style={{ maxWidth: 1000 }}>

					<Typography style={{ paddingBottom: 20, }} variant='h4' color='secondary'>
						Guees the <GreenSpan>location</GreenSpan>
					</Typography>

					<AccordianContainerBox>
						{/* Accordian with location picture */}
						<AccordionBox elevation={2}>
							<AccordionSummary expandIcon={<ExpandMore />}>
								<Typography variant='h5' color='secondary'>
									Location picture
								</Typography>
							</AccordionSummary>
							<AccordionDetails style={{ maxHeight: '335px' }}>
								<Divider />
								{/*  Location image */}
								<Box style={{ border: '2px solid #619B8A', maxWidth: '420px', height: '235px', textAlign: 'center' }}>
									<img style={{ maxWidth: '100%', height: '100%' }} src={uploadedImagePath} alt='location' />
								</Box>
								<Typography variant='caption' color='secondary' style={{ width: '100%', marginTop: '10px' }}>
									Try and guess this location
								</Typography>
							</AccordionDetails>
						</AccordionBox>
					</AccordianContainerBox>

					<MapContainerBox >
						{/* Google maps */}
						<LocationGuessMap coordinates={coordinates} onClick={(e: any) => {
							setCoordinates({ lat: e.latLng?.lat() as number, lng: e.latLng?.lng() as number });
							setChordChanged(true);
						}} />
					</MapContainerBox>

					<SubmitButton>
						<Button type='submit' disableRipple variant='contained' color='primary'>
							GUESS
						</Button>
					</SubmitButton>
				</Grid>

				<Grid style={{}}>
					<Typography style={{ paddingBottom: 20, paddingTop: 50 }} variant='h4' color='secondary'>
						Leaderboard
					</Typography>
					<Grid style={{ display: 'flex', justifyContent: 'center', }}>

						<Box style={{ maxWidth: '400px', }}>
							{/* TODO: Add map function */}
							<LeaderboardCard width={420} height={48} rank={1} />

						</Box>

					</Grid>
				</Grid>
			</Grid>

		</>
	);
}

export default LocationGuessForm

/*
---------------------------------------
TODO: When resizing window the accoridan size needs to also resize
---------------------------------------

TODO: ACCORDIAN AS A RESPECTIVE COMPONENT (expanded=true) //OPEN BY DEFAULT
	ADD ON CLIKC TO CLOSE AND OPEN 
---------------------------------------
*/