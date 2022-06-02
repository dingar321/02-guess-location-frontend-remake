import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react'
import { SigninSchema } from '../../../utils/validation/Signin.schema';
import PassInput from '../../inputs/PassInput';
import TextInput from '../../inputs/TextInput';
import { FormikForm, Header, HeaderBox, HrefBox, LinkButton, SigninFormBox, SubmitButton } from './SigninForm.style';

const SigninForm = () => {

	{/* Formik used to create a form */ }
	const signinFormik = useFormik({
		initialValues: {
			email: '',
			password: '',

		},
		validationSchema: SigninSchema,
		onSubmit: (values) => {
			//This is where the axios call goes to 
			console.log(JSON.stringify(values, null, 2));
		},
	});


	return (
		<SigninFormBox>

			<HeaderBox>
				<Header variant='h3' color='secondary'>
					Sign in
				</Header>
				<Typography variant='body' color='secondary'>
					Welcome back to Geotagger. We are glad that you are back.
				</Typography>
			</HeaderBox>

			<form onSubmit={signinFormik.handleSubmit}>
				<FormikForm>

					{/* Email */}
					<TextInput width={420} height={50} variant='outlined' label='Email' name='email'
						value={signinFormik.values.email}
						onChange={signinFormik.handleChange}
						error={signinFormik.touched.email && Boolean(signinFormik.errors.email)}
						helperText={signinFormik.touched.email && signinFormik.errors.email}
					/>

					{/* Password */}
					<PassInput width={420} height={50} variant='outlined' label='Password'
						value={signinFormik.values.password} onChange={signinFormik.handleChange} name='password'
						error={signinFormik.touched.password && Boolean(signinFormik.errors.password)}
						helperText={signinFormik.touched.password && signinFormik.errors.password}
					/>

					<SubmitButton type='submit' disableRipple variant='contained'>SIGN IN</SubmitButton>


					<HrefBox>
						<Typography variant='body' color='secondary'>
							Do you want to create an account?
						</Typography>
						<LinkButton variant='text' disableRipple color='primary'>
							Sign up
						</LinkButton>
					</HrefBox>

				</FormikForm>
			</form>

		</SigninFormBox>
	)
}

export default SigninForm