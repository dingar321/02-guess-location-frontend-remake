import styled from '@emotion/styled';
import { Box, Card, Grid, Typography } from '@mui/material';

const LeaderboardCardBox = styled(Card)(({ cardwidth, cardheight }:
	{ cardwidth: number, cardheight: number }) => ({
		width: cardwidth,
		height: cardheight,
		borderRadius: '4px',

		//background: 'red', //<-- Testing
	}));

const GridContainer = styled(Grid)({
	display: 'flex',
	justifyContent: "flex-start",
});

const RankGrid = styled(Grid)({
	verticalAlign: 'baseline',
	display: 'table-cell',

	textAlign: 'center',
	paddingLeft: '10px',
	paddingRight: '10px',
	paddingTop: '16%'
});

const ProfileGrid = styled(Grid)({
	paddingTop: '5px',
	paddingLeft: '8px',
});

const UserInfoGrid = styled(Grid)({
	paddingTop: '5px',
	paddingLeft: '6px',
});

const ErrorDistanceGrid = styled(Grid)({
	paddingTop: '15px',
	paddingRight: '5px'
});



//Rank styles:
const RankIcon = styled(Box)(({ background }:
	{ background: string }) => ({
		//Icon size
		width: 32,
		height: 32,

		//Style
		borderRadius: '50%',
		color: 'white',
		textAlign: 'center',

		background: background,

	}));


const RankText = styled(Typography)({
	//Font styles
	fontWeight: 400,
	fontSize: '12px',
	paddingTop: 7,

});



export {
	RankText, RankIcon, ErrorDistanceGrid, UserInfoGrid,
	ProfileGrid, RankGrid, GridContainer, LeaderboardCardBox
};
