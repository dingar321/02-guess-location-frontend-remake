import * as Yup from 'yup';

//Yup validaiton schema
export const SignupSchema = Yup.object({
	email: Yup.string()
		.max(255, 'Cannot exceed 255 characters')
		.email('email Not valid')
		.required('Please enter your email'),

	firstName: Yup.string()
		.max(255, 'Cannot exceed 255 characters')
		.matches(/^[a-zA-Z\-_ ’'‘čćšđžČĆŠĐŽ]{2,255}$/, 'First name not valid')
		.required('Please enter you first name'),

	lastName: Yup.string()
		.max(255, 'Last nam,e cannot exceed 255 characters')
		.matches(/^[a-zA-Z\-_ ’'‘čćšđžČĆŠĐŽ]{2,255}$/, 'Last name not valid')
		.required('Please enter your last name'),

	password: Yup.string()
		.max(255, 'Cannot exceed 255 characters')
		.min(8, 'Cannot be less than 8 characters')
		.matches(
			/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
			"Please include at least one upper case, number and symbol characters"
		)
		.required("Please enter your password"),

	passwordConfirm: Yup.string()
		.oneOf([Yup.ref('password'), null], "Passwords don't match.")
		.required("Please confirm your password")
});

/*
Email validation:
- Max 255 characters, 
- Regex (Valid email)
- Required

First name validation:
- Max 255 characters
- Regex (Only characters)
- Required

Last name validation:
- Max 255 characters
- Regex (Only characters)
- Required

Password validation:
https://account.cern.ch/account/Help/?kbid=020040
- Max 255 characters
- Min 8 characters
- Regex (At least one symbol)
- Regex (At least one number)
- Regex (At least one Uppercase)
- Regex (At least one Lowercase)
- Required

Password confirm validation:
- Only check if it matches the password field
- Required
*/