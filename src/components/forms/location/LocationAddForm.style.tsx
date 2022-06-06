import styled from '@emotion/styled';
import { Accordion, Box } from '@mui/material';

const AccordionBox = styled(Accordion)({
	maxWidth: '420px',

	'&.Mui-expanded': {
		Maxheight: '335px',
	},

});

const AccordianContainerBox = styled(Box)({
	position: 'absolute',
	zIndex: 2,
	marginTop: '12px',
	marginLeft: '20px',
	marginRight: '20px',
});

const MapContainerBox = styled(Box)({

});

const SubmitButton = styled(Box)({
	paddingTop: 20,
	float: 'right'
});

const GreenSpan = styled('span')({
	color: '#619B8A'
});

export {
	AccordionBox, AccordianContainerBox, MapContainerBox,
	SubmitButton, GreenSpan
};
