import styled from '@emotion/styled';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Form } from 'formik';


const SignupFormBox = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	//centering the contents of this container
	margin: '0px 60px', //<-- might not need this

	//background: 'yellow', //<-- Testing

});

const HeaderBox = styled(Box)({

	marginBottom: '5px',
	textAlign: 'center'

	//background: 'purple', //<-- Testing
});


const UploadProfileBox = styled(Box)({
	marginTop: '10px',
	marginBottom: '20px',

	//background: 'green',  //<-- Testing
});

const FormikForm = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	marginBottom: '30px',

	//background: '#ADD8E6', //<-- Testing
});

const Header = styled(Typography)({
	paddingBottom: '10px'
});

const HrefBox = styled(Box)({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '420px',

	paddingTop: '10px'
	//background: 'magent', //<-- Testing
});

const FirstLastNameBox = styled(Box)({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '420px',
	marginBottom: '8px',

	//background: 'red', //<-- Testing
});

const SubmitButton = styled(Button)({
	width: '420px',
	//marginTop: '10px',

});

const LinkButton = styled(Button)({
	width: '80px',
	fontWeight: 400,
	fontSize: '16px',
});


export {
	SignupFormBox, FormikForm, FirstLastNameBox, SubmitButton,
	UploadProfileBox, HeaderBox, HrefBox, LinkButton, Header
};
