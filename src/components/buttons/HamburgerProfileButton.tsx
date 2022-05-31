import { Box, Grid, IconButton, styled, Typography } from '@mui/material';
import React from 'react'
import ProfileIcon from '../icons/ProfileIcon'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const HamProfilBox = styled(Box)({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',

	width: '350px',


});

const Button = styled(IconButton)({
	/* The actuall button that gets clicked */

	borderRadius: '4px',
	'&:hover': {
		backgroundColor: "#E7E7E7"
	},


	width: '100%',

	display: 'flex',
	justifyContent: 'space-between',
});

const ButtonContentsBox = styled(Box)({
	display: 'flex',
	marginLeft: '10px'
});

const NameText = styled(Typography)({
	marginLeft: '20px',
	paddingTop: '10px'
});

const HamburgerProfileButton = ({ children, color }:
	{ children: string, color: string }) => {
	return (
		<HamProfilBox>
			<Button disableRipple>

				<ButtonContentsBox>
					<ProfileIcon width={50} height={50} />
					<NameText variant='h5' color={color}>
						John Doe
					</NameText>
					<Typography variant='h5' color={color}>
						{/* Maybe add chevron ? */}
					</Typography>
				</ButtonContentsBox>


			</Button>
		</HamProfilBox >
	);
}

export default HamburgerProfileButton