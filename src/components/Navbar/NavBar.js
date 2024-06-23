import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css';
import { ContextHelth } from '../../containers';
import { appName } from 'mock/details';

const NavBar = () => {
	const { frame } = React.useContext(ContextHelth);

	const links = [
		{ title: 'home', id: '#home', icon: <HomeIcon /> },
		{ title: 'events', id: '#events', icon: <MiscellaneousServicesIcon /> },
		{ title: 'about us', id: '#about_us', icon: <SupervisorAccountIcon /> },
		{ title: 'wish us', id: '#wish_us', icon: <RateReviewOutlinedIcon /> }
	];

	const [isMenuOpen, setMenuOpen] = React.useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<header style={{ boxShadow: frame === 1 ? 'none' : '' }}>
			<div className='logo'>{appName}</div>

			<nav className={isMenuOpen ? 'open' : ''}>
				{isMenuOpen ? <div className='logo-sm'>{appName}</div> : ''}
				<ul>
					{links.map((eachLink, id) => (
						<li key={id} onClick={toggleMenu}>
							<a href={`${eachLink.id}`} className='links'>
								{isMenuOpen ? <div className='icons'>{eachLink.icon}</div> : ''}
								<div style={{ marginLeft: '4px', fontWeight: 600 }}>
									{eachLink.title}
								</div>
							</a>
						</li>
					))}
				</ul>
			</nav>

			<div className='mobile-menu-icon' onClick={toggleMenu}>
				{isMenuOpen ? (
					<CloseIcon
						style={{
							position: 'fixed',
							top: '1em',
							right: '1em'
						}}
					/>
				) : (
					<MenuIcon />
				)}
			</div>
		</header>
	);
};

export default NavBar;
