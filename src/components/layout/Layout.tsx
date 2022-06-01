import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Footer } from '../footer/Footer';
import Navbar from '../navbar/Navbar';


/* The main layout of the page!
In the page folder we always use this tag (layout)
So the position is always the same
*/

const AppBox = styled(Box)({
	/* This is the top of the page anything under this div is the footer */
	/* min-height -> makes the footer stay on the bottom of the page */

	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
});

const PageContainer = styled(Container)({
	background: 'wheat',
	marginBottom: '2em',
	//marginTop: '2em' <-- Not really needed
});

const Layout = ({ children }:
	{ children: any }) => {
	return (
		<AppBox>
			<Box>
				<Navbar />
				<PageContainer maxWidth="lg">
					{children}
				</PageContainer>
			</Box>
			<Footer />
		</AppBox >
	)
}

export default Layout