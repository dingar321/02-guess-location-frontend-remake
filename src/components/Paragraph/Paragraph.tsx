import styled from '@emotion/styled';
import { Typography } from '@mui/material';

/*
- Here we have declared all of the design systems. To use them just use the name from the "const <name>".
- They are all "Typography" element 
- We can also use styles when calling them, to change different styles
*/

const HeaderOne = styled(Typography)({
	/* Header 1 */
	fontWeight: 'light',
	fontSize: '96px',
});

const HeaderTwo = styled(Typography)({
	/* Header 2 */
	fontWeight: 'light',
	fontSize: '60px',
});

const HeaderThree = styled(Typography)({
	/* Header 3 */
	fontWeight: 'light',
	fontSize: '48px',
});

const HeaderFour = styled(Typography)({
	/* Header 4 */
	fontWeight: 'light',
	fontSize: '34px',
});

const HeaderFive = styled(Typography)({
	/* Header 5 */
	fontWeight: 'light',
	fontSize: '24px',
});

const Body = styled(Typography)({
	/* Paragraph */
	fontWeight: 'regular',
	fontSize: '16px',
});

const BodyBold = styled(Typography)({
	/* Paragraph bolder */
	fontWeight: 'bold',
});

const Caption = styled(Typography)({
	/* Small text */
	fontWeight: 'normal',
	fontSize: '12px',
});

export {
	HeaderOne, HeaderTwo, HeaderThree, HeaderFour,
	HeaderFive, Body, BodyBold, Caption
};

