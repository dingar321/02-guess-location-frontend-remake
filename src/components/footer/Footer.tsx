import { Box, Hidden, Typography } from '@mui/material'
import React from 'react'
import { FooterLogo, FooterLogoSmall } from '../../assets/logos/Logos'
import { FooterBox, FooterContainer, ImageBox, ImageBoxSmall } from './Footer.style'

export const Footer = () => {
	return (
		<FooterContainer style={{ background: '#619B8A' }}>
			<Hidden smDown>
				{/* Browser footer */}
				<ImageBox>
					<img src={FooterLogo} />
				</ImageBox>
				<FooterBox>
					<Typography sx={{ color: 'white', fontSize: 16 }}>
						All Rights Reserved | skillupmentor.com
					</Typography>
				</FooterBox>
			</Hidden>


			<Hidden smUp>
				{/* Device footer */}
				<ImageBoxSmall>
					<img src={FooterLogoSmall} />
				</ImageBoxSmall>
				<FooterBox>
					<Typography sx={{ color: 'white', fontSize: 16 }}>
						skillupmentor.com
					</Typography>
				</FooterBox>
			</Hidden>

		</FooterContainer >
	);
}
