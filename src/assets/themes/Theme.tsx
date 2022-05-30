import { ThemeContext, useTheme } from '@emotion/react';
import { createTheme, ThemeOptions } from "@mui/material";
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { palette } from '@mui/system';


declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		body: true;
		bodyB: true;
		cap: true;
	}
}


interface ExtendedTypographyOptions extends TypographyOptions {
	body: React.CSSProperties;
	bodyB: React.CSSProperties;
	cap: React.CSSProperties;
}

declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		contained: true;
		outlined: true;
		text: true;
		circle: true;
	}
}

const primaryColor = '#619B8A';
const secondaryColor = '#233D4D';
const buttonHoverColor = '#FE7F2D';


/*
//INSTRUCTIONS ON HOW TO USE:
The whole application has a theme. That means we have 2 colors, 8 typography styles and 3 distinct buttns.
To use the typography and button styles use the respective component and specify the variant.
If we want to use their colors we only have to add (color: 'palette') to the component to specify which. 
*/

/*  Typography example on how to use
<Typography variant='body' color='primary'>
	I am a body with the primary color !
</Typography>
*/

/*  Button example on how to use (IMPORTANT: use 'disableRipple' inside the button component's)
<Button variant='contained' color='primary'>
	I am a contained Button
</Button>

<Button  variant='outlined' color='primary'>
	I am a outlined button
</Button>

<Button style variant='text' color='secondary'>
	I am a text button
</Button>
*/


//Default font of the website
const Theme = createTheme({

	//Colors Pallet
	palette: {
		primary: {
			/* Green earth */
			main: primaryColor
		},
		secondary: {
			/* Dark */
			main: secondaryColor
		},
	},

	/* Typography variants */
	typography: {
		h1: {
			/* Header 1 */
			fontWeight: 'light',
			fontSize: '96px'
		},
		h2: {
			/* Header 2 */
			fontWeight: 'light',
			fontSize: '60px'
		},
		h3: {
			/* Header 3 */
			fontWeight: 'regular',
			fontSize: '48px'
		},
		h4: {
			/* Header 4 */
			fontWeight: 'regular',
			fontSize: '34px'
		},
		h5: {
			/* Header 5 */
			fontWeight: 'regular',
			fontSize: '24px'
		},
		body: {
			/* body */
			fontWeight: 'regular',
			fontSize: '16px'
		},
		bodyB: {
			/* Body (Bold) */
			fontWeight: 'bold',
			fontSize: '16px'
		},
		/* caption */
		cap: {
			fontWeight: 'normal',
			fontSize: '12px'
		}
	} as ExtendedTypographyOptions,

	/* Button variants */
	components: {
		MuiButtonBase: {
			defaultProps: {
				// No more ripple, on the whole application	
				disableRipple: true,
			},
		},
		MuiButton: {
			variants: [
				{
					/* Button/Contained */
					props: { variant: "contained" },
					style: {
						textTransform: 'none',
						boxShadow: '0 0.25em 0 0 hsla(195,47%,50%,0),0 4px 5px rgba(0,0,0,0.2)',
						'&:hover': {
							/* On hover effect */
							color: buttonHoverColor,
							background: primaryColor,
							boxShadow: '0 0.25em 0 0 hsla(195,47%,50%,0),0 4px 5px rgba(0,0,0,0.2)',
						}
					},
				},
				{
					/* Button/Outlined */
					props: { variant: "outlined" },
					style: {
						textTransform: 'none',
						boxShadow: '0 0.25em 0 0 hsla(195,47%,50%,0),0 4px 5px rgba(0,0,0,0.2)',
						'&:hover': {
							/* On hover effect */
							color: buttonHoverColor,
							background: 'white',
							border: 'solid 1px ' + buttonHoverColor
						}
					},
				},
				{
					/* Button/Text */
					props: { variant: "text" },
					style: {
						textTransform: 'none',
						'&:hover': {
							/* On hover effect */
							color: buttonHoverColor,
							background: 'white',
						},
					},
				},
			]
		}
	},

	//Custom breakpoints
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 1000,
			lg: 1200,
			xl: 1500,
		},
	},

} as ThemeOptions)

export default Theme;
