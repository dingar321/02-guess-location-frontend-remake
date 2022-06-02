import { Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { SignupSchema } from '../../../utils/validation/Signup.schema';
import PassInput from '../../inputs/PassInput';
import TextInput from '../../inputs/TextInput';
import ProfileUpload from '../../upload/ProfileUpload';
import {
	FirstLastNameBox, FormikForm, Header, HeaderBox, HrefBox,
	LinkButton, SignupFormBox, SubmitButton, UploadProfileBox
} from './SignupForm.style';

const SignupForm = () => {

	//Profile image values provided by the user
	const [image, setImage] = useState<File>()
	const [imageUrl, setImageUrl] = useState<string>('')
	const [imageUploaded, setImageUploaded] = useState<boolean>(false);

	{/* Formik used to create a form */ }
	const signupFormik = useFormik({
		initialValues: {
			email: '',
			firstName: '',
			lastName: '',
			password: '',
			passwordConfirm: '',
		},
		validationSchema: SignupSchema,
		onSubmit: (values) => {
			//This is where the axios call goes to 
			console.log(JSON.stringify(values, null, 2));
			console.log('Uploaded profile image: ', image);
		},
	});


	//Image upload handle
	const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) {
			return;
		}
		let img = e.target.files[0];
		setImage(img);
		setImageUploaded(true);
		setImageUrl(URL.createObjectURL(img));
	}

	return (
		<SignupFormBox>

			<HeaderBox>
				<Header variant='h3' color='secondary'>
					Sign up
				</Header>
				<Typography variant='body' color='secondary'>
					Your name will appear on posts and your public profle.
				</Typography>
			</HeaderBox>

			<UploadProfileBox>
				<ProfileUpload imageUrl={imageUrl} onChange={handleImageUpload}
					width={64} height={64} />
			</UploadProfileBox>

			<form onSubmit={signupFormik.handleSubmit}>
				<FormikForm>

					{/* Email */}
					<TextInput width={420} height={50} variant='standard' label='Email' name='email'
						value={signupFormik.values.email}
						onChange={signupFormik.handleChange}
						error={signupFormik.touched.email && Boolean(signupFormik.errors.email)}
						helperText={signupFormik.touched.email && signupFormik.errors.email}
					/>

					<FirstLastNameBox>
						{/* First name (left) side */}
						<TextInput width={200} height={50} variant='standard' label='First Name' name='firstName'
							value={signupFormik.values.firstName}
							onChange={signupFormik.handleChange}
							error={signupFormik.touched.firstName && Boolean(signupFormik.errors.firstName)}
							helperText={signupFormik.touched.firstName && signupFormik.errors.firstName}
						/>
						{/* Last name (right) side */}
						<TextInput width={200} height={50} variant='standard' label='Last Name' name='lastName'
							value={signupFormik.values.lastName}
							onChange={signupFormik.handleChange}
							error={signupFormik.touched.lastName && Boolean(signupFormik.errors.lastName)}
							helperText={signupFormik.touched.lastName && signupFormik.errors.lastName}
						/>
					</FirstLastNameBox>

					{/* Password */}
					<PassInput width={420} height={50} variant='standard' label='Password'
						value={signupFormik.values.password} onChange={signupFormik.handleChange} name='password'
						error={signupFormik.touched.password && Boolean(signupFormik.errors.password)}
						helperText={signupFormik.touched.password && signupFormik.errors.password}
					/>

					{/* Password Confirm */}
					<PassInput width={420} height={50} variant='standard' label='Password Confirm'
						value={signupFormik.values.passwordConfirm} onChange={signupFormik.handleChange} name='passwordConfirm'
						error={signupFormik.touched.passwordConfirm && Boolean(signupFormik.errors.passwordConfirm)}
						helperText={signupFormik.touched.passwordConfirm && signupFormik.errors.passwordConfirm}
					/>

					<SubmitButton type='submit' disableRipple variant='contained'>SIGN UP</SubmitButton>

					<HrefBox>
						<Typography variant='body' color='secondary'>
							Already have an account?
						</Typography>
						<LinkButton variant='text' disableRipple color='primary'>
							Sign in
						</LinkButton>
					</HrefBox>

				</FormikForm>
			</form>

		</SignupFormBox >
	)
}

export default SignupForm