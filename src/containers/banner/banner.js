/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { bride, date, groom } from 'mock/details';

import NavBar from 'components/Navbar/NavBar';
import BgImg1 from 'assets/images/bg-img.jpg';
import BgImg2 from 'assets/images/Ethnic1.jpg';
import BgImg3 from 'assets/images/Res2.jpg';
import BgImg4 from 'assets/images/Res3.jpg';
import BgImg5 from 'assets/images/Nature1.jpg';
import BgImg6 from 'assets/images/Nature4.jpg';

import './banner.css';

const Banner = () => {
	const images = [BgImg1, BgImg2, BgImg3, BgImg4, BgImg5, BgImg6];
	const [bgImage, setBgImage] = React.useState(images[0]);

	React.useEffect(() => {
		let timer = setInterval(() => {
			setBgImage(images[Math.floor(Math.random() * 6)]);
		}, 3000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	console.log(bgImage, 'bgImage');

	return (
		<div
			className='banner-wrapper'
			id='home'
			style={{
				backgroundImage: `url(${bgImage})`
			}}
		>
			<div style={{ backgroundColor: '#e91e6382' }}>
				<NavBar />
				<div className='banner-content'>
					<div className='banner-sub-title'>Welcome to the wedding of</div>
					<div className='banner-title'>
						{bride} & {groom}
					</div>
					<div className='banner-sub-title'>on {date}</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
