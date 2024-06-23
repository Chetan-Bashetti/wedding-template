import React from 'react';
import './index.css';

// Components
import Banner from './banner/banner';
import AboutUs from './about-us/about-us';
import FabIcon from './fab/fab';
import { Snackbar } from '@mui/material';
import CheckConnection from '../components/NetworkChecker/NetworkChecker';
import Footer from './footer/footer';
import Events from './events/events';
import ContactUs from './contact-us/contact-us';
import Gallery from './gallery/gallery';

export const ContextHelth = React.createContext();

const MainWrapper = () => {
	const [snackBar, setSnackBar] = React.useState(false);
	const [frame, setFrame] = React.useState(1);

	const handleCloseSnack = () => setSnackBar(false);

	return (
		<ContextHelth.Provider
			value={{
				frame,
				setFrame
			}}
		>
			<div className='main-wrapper'>
				<Banner setSnackBar={() => setSnackBar(true)} />
				<Events />
				<AboutUs />
				<Gallery />
				<ContactUs />
				<FabIcon />
				<Footer />
				<Snackbar
					anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
					open={snackBar}
					onClose={handleCloseSnack}
					autoHideDuration={5000}
					message='Message sent, Thank you, we will contact you shortly'
				/>
				<CheckConnection />
			</div>
		</ContextHelth.Provider>
	);
};

export default MainWrapper;
