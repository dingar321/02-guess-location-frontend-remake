import styled from '@emotion/styled';
import { Avatar, Box, Card, Grid, Typography } from '@mui/material';
import React from 'react'
import { ErrorDistanceGrid, LeaderboardCardBox, ProfileGrid, RankGrid, RankIcon, RankText, UserInfoGrid } from './LeaderboardCard.style';

const LeaderboardCard = ({ width, height, rank }:  //<--- We are also going to recieve a an object (??)
	{ width: number, height: number, rank: number }) => {

	//Ordnal background colors
	const firstRank = 'linear-gradient(41.75deg, #FE7F2D 22.78%, #FCCA46 87.18%)';
	const secondRank = 'linear-gradient(41.75deg, #D8D8D8 22.78%, #999999 87.18%)';
	const thirdRank = 'linear-gradient(41.75deg, #956956 22.78%, #D79376 87.18%)';
	const ordinalRank = '#233D4D';

	//Placeholder, when the real data is introducet replace with the Guess object
	const userProfileImage = 'https://image.shutterstock.com/image-photo/young-man-checking-his-sports-600w-1373615606.jpg';

	return (
		<LeaderboardCardBox cardwidth={width} cardheight={height} elevation={5}
			sx={{ display: 'grid', gridTemplateColumns: '0.3fr 0.3fr 1fr 120px' }}>

			<RankGrid>
				{(rank === 1) &&
					/* First rank */
					<RankIcon background={firstRank}>
						<RankText>
							{rank}
						</RankText>
					</RankIcon>
				}
				{(rank === 2) &&
					/* Second rank */
					<RankIcon background={secondRank}>
						<RankText>
							{rank}
						</RankText>
					</RankIcon>
				}
				{(rank === 3) &&
					/* Third rank */
					<RankIcon background={thirdRank}>
						<RankText>
							{rank}
						</RankText>
					</RankIcon>
				}
				{(rank !== 1) && (rank !== 2) && (rank !== 3) &&
					/* Rest of the ordinal rank's */
					<RankIcon background={ordinalRank}>
						<RankText>
							{rank}
						</RankText>
					</RankIcon>
				}

			</RankGrid>
			<ProfileGrid>
				{/* Profile picture  */}
				<Avatar src={userProfileImage} alt='profile' />
			</ProfileGrid>
			<UserInfoGrid>
				{/*Info */}
				<Typography variant='body' color='secondary'>
					Elmer Laverty <br /> 2. 4. 2012
				</Typography>
			</UserInfoGrid>
			<ErrorDistanceGrid >
				<Typography variant='body' color='primary'
					sx={{ float: 'right' }}>
					3021 km
				</Typography>
			</ErrorDistanceGrid>
		</LeaderboardCardBox >
	);
}

export default LeaderboardCard
