import * as Yup from 'yup';

//Yup validaiton schema
export const SigninSchema = Yup.object({
	email: Yup.string()
		.required('Please enter your email'),
	password: Yup.string()
		.required("Please enter your password"),
});

/*
Email validation:
- Only check if the field is not empty
Password validation:
- Only check if the field is not empty
*/