import styled from '@emotion/styled';
import { AppBar, Box, Button, Toolbar } from '@mui/material';

const NavbarToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
	background: 'white',

	height: '64px',
	margin: '0px 30px',
	padding: '10px 20px',

});

const Nav = styled(AppBar)({
	background: 'white',
	marginTop: '20px' //<--  space from top to navbar
});

const ContentBox = styled(Box)({
	display: 'flex',
	gap: '20px',
	alignItems: 'center',
});

const TextButton = styled(Button)({
	height: '20px',
	paddingTop: '10px',
});

const ContainedButton = styled(Button)({
	width: '140px',
	height: '30px',
	marginLeft: '10px',
});


//Hamburger style
const HamContentBox = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',

	marginBottom: '20px',

	marginLeft: '50px',
	marginRight: '50px',
});

const HamContainedButton = styled(Button)({
	width: '350px',
	height: '40px',
	marginLeft: '10px',
	marginRight: '10px',

	marginBottom: '10px',
});

const HamOutlinedButton = styled(Button)({
	width: '350px',
	height: '40px',
	marginLeft: '10px',
	marginRight: '10px',

});


export {
	Nav, TextButton, ContainedButton, HamContainedButton,
	HamOutlinedButton, NavbarToolbar, ContentBox, HamContentBox,
};

