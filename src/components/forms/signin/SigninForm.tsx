import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react'

const SigninFormBox = styled(Box)({
	background: 'yellow',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',

	//centering the contents of this container
	margin: '0px 60px', //<-- might not need this
});

const SigninForm = () => {
	return (
		<SigninFormBox>

			<Typography variant='h3'>
				Sign in
			</Typography>
			<Typography variant='body' style={{ textAlign: 'center' }}>
				Welcome back to Geotagger. We are glad that you are back.
			</Typography>

		</SigninFormBox>
	)
}

export default SigninForm