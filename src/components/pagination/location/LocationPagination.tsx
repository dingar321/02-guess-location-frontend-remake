import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { Box, Pagination, PaginationItem, styled } from '@mui/material';
import React from 'react';

const PaginationBox = styled(Box)({
	marginTop: '1em',

	display: 'flex', flexDirection: 'column', alignItems: 'center',

});


const PaginationStyle = styled(Pagination)({
	//Hover color (orange)
	//default text color
	//Border 2px solid and green(primary)


	/* 
	'&:hover': {

		color: 'orange',

	},

		"&.MuiPaginationItem-root:hover": {
		background: 'red'
	},


	"& .MuiPaginationItem-root": {
		color: "#233D4D",
		border: '2px solid #BDBDBD'
	}
	*/
});

const PaginationItemStyle = styled(PaginationItem)({

	"&.Mui-selected": {
		//Selected page styles:
		background: '#619B8A',
		color: 'white',
		border: '2px solid #619B8A',
		fontWeight: 'bold',
	},

});

const LocationPagination = () => {

	const handleChangePage = (e: any, pageNumber: number) => {
		console.log(pageNumber);
	};

	return (
		<PaginationBox>




			{/* Must always be on the bottom */}
			<PaginationStyle
				size='large'
				onChange={handleChangePage}
				count={25} defaultPage={1} boundaryCount={2}
				variant="outlined" shape="rounded"
				renderItem={(item) => (
					<PaginationItemStyle
						components={{ previous: ArrowLeft, next: ArrowRight }}
						{...item}
					/>
				)}
			/>

		</PaginationBox>
	)
}
export default LocationPagination

//Maybe add this in (Would be really nice)
//				showFirstButton showLastButton



//Documentation
//https://mui.com/material-ui/react-pagination/#pagination-ranges
//https://mui.com/system/the-sx-prop/#palette