import { Box, IconButton, InputAdornment, styled, TextField, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React, { useState } from 'react'

//Style
const TextInput = styled(TextField)({
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

const PassInput = ({ width, height, onChange, error, helperText, variant, label, value, name }:
	{
		width: number, height: number, onChange: any, error: any, helperText: any,
		variant: string, label: string, value: any, name: string,
	}) => {

	//Showing the password fields
	const [passwordShow, setPasswordShow] = useState<boolean>(false);

	if (variant === 'standard') {
		return (
			/* Standard password input field  */
			<Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Typography sx={{ width: width }} color='secondary' variant='caption'>
					{label}
				</Typography>
				<TextInput variant='standard' name={name} autoComplete='off' style={{ width: width, height: height, }}
					onChange={onChange} error={error} helperText={helperText}
					type={passwordShow ? "text" : "password"}
					value={value}
					InputProps={{
						endAdornment: (
							<InputAdornment sx={{ paddingBottom: '6px', paddingRight: '3px' }} position="end">
								<IconButton
									aria-label="toggle password visibility"
									onMouseDown={(e) => setPasswordShow(true)}
									onMouseUp={(e) => setPasswordShow(false)}
									onMouseLeave={(e) => setPasswordShow(false)}
									edge="end" >
									{passwordShow ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			</Box >
		);
	} else if (variant === 'outlined') {
		return (
			/* Outlined password input field  */
			<Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
				<Typography sx={{ width: width }} color='secondary' variant='caption'>
					{label}
				</Typography>
				<TextInput variant='outlined' name={name} autoComplete='off' style={{ width: width, height: height, }}
					onChange={onChange} error={error} helperText={helperText}
					type={passwordShow ? "text" : "password"}
					value={value}
					InputProps={{
						endAdornment: (
							<InputAdornment sx={{}} position="end">
								<IconButton
									aria-label="toggle password visibility"
									onMouseDown={(e) => setPasswordShow(true)}
									onMouseUp={(e) => setPasswordShow(false)}
									onMouseLeave={(e) => setPasswordShow(false)}
									edge="end" >
									{passwordShow ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			</Box >
		);
	}
	else {
		return (<div>Error</div>);
	}

}

export default PassInput

/*

<PassInput width={420} height={50} variant='standard' label='Password Confirm' name='password'
	value={Formik.values.password}
	onChange={Formik.handleChange} name='password'
	error={Formik.touched.password && Boolean(Formik.errors.password)}
	helperText={Formik.touched.password && Formik.errors.password}
/>

*/