
import { Box, Divider, SwipeableDrawer, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { LogoFull } from '../../assets/logos/Logos';
import HamburgerChevronButton from '../buttons/HamburgerChevronButton';
import HamburgerProfileButton from '../buttons/HamburgerProfileButton';
import AddIcon from '../icons/AddIcon';
import CloseIcon from '../icons/CloseIcon';
import MenuIcon from '../icons/MenuIcon';
import ProfileIcon from '../icons/ProfileIcon';
import { ContainedButton, ContentBox, HamContainedButton, HamContentBox, HamOutlinedButton, Nav, NavbarToolbar, TextButton } from './Navbar.style';

const Navbar = () => {

	const [loggedUser, setLoggedUser] = useState<boolean>(false);
	const [formPage, setFormPage] = useState<boolean>(false);

	//Opening and closing the burger menu
	const [openBurgerMenu, setOpenBurgerMenu] = useState<boolean>(false);

	//Checks the window width  
	const matches = useMediaQuery("(min-width: 1000px)");

	useEffect(() => {

		if (matches) {
			setOpenBurgerMenu(false);
		}

	}, [matches]);

	return (

		<Nav position='sticky' elevation={0}>

			{((formPage === false)) &&
				/* Default navbar style (Shows on all of the pages) */
				<NavbarToolbar sx={{ display: { xs: 'none', md: 'flex' } }}>
					<img alt='profile' src={LogoFull} />
					<ContentBox style={{ background: 'white' }}>
						{((loggedUser === false)) &&
							<>
								<TextButton variant='text' color='secondary' disableRipple>Sign in</TextButton>
								<Typography variant='body' color='secondary'>or</Typography>
								<ContainedButton variant='contained' disableRipple>SIGN UP</ContainedButton>
							</>
						}
						{((loggedUser === true)) &&
							<>
								<TextButton variant='text' color='secondary' disableRipple>Home</TextButton>
								<TextButton variant='text' color='secondary' disableRipple>Profile settings</TextButton>
								<TextButton variant='text' color='secondary' disableRipple>Logout</TextButton>
								<ProfileIcon width={40} height={40} />
								<AddIcon width={40} height={40} color='primary' />
							</>
						}
					</ContentBox>
				</NavbarToolbar>
			}

			{((formPage === true)) &&
				/* Default navbar (On the signup/signin page) */
				<NavbarToolbar sx={{ display: { xs: 'none', md: 'flex' } }}>
					< img src={LogoFull} alt='header-logo' />
				</NavbarToolbar>

			}


			{/* Hambrger navbar */}
			<NavbarToolbar sx={{ display: { xs: 'flex', md: 'none' } }} >
				< img src={LogoFull} alt='header-logo' />
				<MenuIcon onClick={() => setOpenBurgerMenu(true)} />
			</NavbarToolbar>


			<SwipeableDrawer anchor='top' open={openBurgerMenu} onOpen={() => setOpenBurgerMenu(true)} onClose={() => setOpenBurgerMenu(false)}>
				{/* Hambrger navbar's menu (swipable)*/}
				<Box>
					<CloseIcon onClick={() => setOpenBurgerMenu(false)} />
				</Box>
				<Divider />
				<HamContentBox>

					{((loggedUser === false)) &&
						<>
							<Box sx={{ my: '10px', mb: '20px' }}>
								<HamburgerChevronButton color='secondary'>Home</HamburgerChevronButton>
							</Box>
							<HamContainedButton disableRipple variant='contained' color='primary'>SIGN UP</HamContainedButton>
							<HamOutlinedButton disableRipple variant='outlined' color='primary'>SIGN IN</HamOutlinedButton>
						</>
					}
					{((loggedUser === true)) &&
						<>
							<Box sx={{ my: '10px', mb: '20px' }}>
								<HamburgerProfileButton color='secondary'>John Doe</HamburgerProfileButton>
							</Box>
							<HamburgerChevronButton color='secondary'>Home</HamburgerChevronButton>
							<HamburgerChevronButton color='secondary'>Profile settings</HamburgerChevronButton>
							<HamburgerChevronButton color='primary'>Logout</HamburgerChevronButton>
						</>
					}

				</HamContentBox>
			</SwipeableDrawer >

		</Nav >
	);
}

export default Navbar