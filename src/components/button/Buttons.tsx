import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { color } from '@mui/system';
import React from 'react';

const TextButton = styled(Button)(({ width, height, color }:
	{ width: number, height: number, color: string }) => ({
		/* Button/Contained */
		/* Const's */
		borderRadius: '4px',
		//padding: '4px 0px',

		/* Text inside styles */
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '19px',

		/* Dynamic's  */
		width: width,
		height: height,
		color: color,
		border: '1px solid',
		borderColor: color,
	}));


const OutlinedButton = styled(Button)(({ width, height, textColor }:
	{ width: number, height: number, textColor: string }) => ({
		/* Button/Contained */
		/* Const's */
		borderRadius: '4px',
		//padding: '4px 0px',
		//background: background, <- No background

		/* Text inside styles */
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '16px',
		lineHeight: '19px',

		/* Dynamic's  */
		width: width,
		height: height,
		color: textColor,

	}));


const ContainedButton = styled(Button)(({ width, height, background }:
	{ width: number, height: number, background: string }) => ({
		/* Button/Contained */
		/* Const's */
		borderRadius: '4px',
		padding: '4px 0px',
		color: 'white',

		/* Text inside styles */
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '19px',

		//Makes text uppercase
		textTransform: 'uppercase',

		/* Dynamic's  */
		width: width,
		height: height,
		background: background,

	}));

export { TextButton, OutlinedButton, ContainedButton }