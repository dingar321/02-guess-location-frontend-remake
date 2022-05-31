import styled from '@emotion/styled';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';

const FooterContainer = styled(Box)({
	height: '60px',

	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	textAlign: 'center',

	padding: '0 55px'

});


const FooterBox = styled(Box)({
	paddingTop: '18px',
});

const ImageBox = styled(Box)({
	paddingTop: '18px',
});

const ImageBoxSmall = styled(Box)({
	paddingTop: '15px',
});



export { ImageBox, FooterBox, FooterContainer, ImageBoxSmall };