import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react';

const SignupFormBox = styled(Box)({
	background: 'yellow',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',

	//centering the contents of this container
	margin: '0px 60px', //<-- might not need this
});

const SignupForm = () => {
	return (
		<SignupFormBox>

			<Typography variant='h3'>
				Sign up
			</Typography>
			<Typography variant='body' style={{ textAlign: 'center' }}>
				Your name will appear on posts and your public profle.
			</Typography>

		</SignupFormBox>
	)
}

export default SignupForm