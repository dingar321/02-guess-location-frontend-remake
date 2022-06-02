import { Box, styled, TextField, Typography } from '@mui/material'
import React from 'react'


const TextInputField = styled(TextField)({
	/* Style for my 'TextField' */
	// ------------------------------------
	//TODO: Move the style in component to the styled props (weight and height)
	//------------------------------------
	marginBottom: '8px',
	input: {
		fontWeight: 500,
		fontSize: '12px',
		color: '#322D38'
	},

});

const TextInput = ({ width, height, onChange, error, helperText, variant, label, value, name }:
	{
		width: number, height: number, onChange: any, error: any, helperText: any,
		variant: string, label: string, value: any, name: string
	}) => {

	if (variant === 'standard') {
		return (
			/* Standard text input field  */
			<Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
				<Typography sx={{ width: width }} color='secondary' variant='caption'>
					{label}
				</Typography>
				<TextInputField style={{ width: width, height: height, }}
					type='text' variant='standard' name={name} autoComplete='off'
					value={value} onChange={onChange} error={error} helperText={helperText}
				/>
			</Box>
		);
	} else if (variant === 'outlined') {
		return (
			/* Outlined text input field  */
			<Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
				<Typography sx={{ width: width }} color='secondary' variant='caption'>
					{label}
				</Typography>
				<TextInputField style={{ width: width, height: height, }}
					type='text' variant='outlined' name={name} autoComplete='off'
					value={value} onChange={onChange} error={error} helperText={helperText}
				/>
			</Box>
		);
	} else {
		return (<div>Error</div>);
	}

}

export default TextInput


/*

<TextInput width={420} height={50} variant='standard' label='Email'
	onChange={Formik.handleChange} name='email' value={Formik.values.email}
	error={Formik.touched.email && Boolean(Formik.errors.email)}
	helperText={Formik.touched.email && Formik.errors.email}
/>

*/