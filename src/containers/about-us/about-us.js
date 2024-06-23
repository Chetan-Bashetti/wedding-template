import React from 'react';
import { aboutBride, aboutGroom, bride, groom } from 'mock/details';

import './about-us.css';

const AboutUs = () => {
	return (
		<div className='about-us-wrapper' id='about_us'>
			<div className='titles'>About us</div>
			<div className='about-us-sub-title'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua ut enim ad minim
				veniam
			</div>
			<div className='about-us-content'>
				<div className='couple'>
					<div className='couple-name'>{groom}</div>
					<div className='about-couple'>{aboutGroom}</div>
				</div>
				<div>
					<img
						className='couple-image'
						src={require('../../assets/images/Res6.jpg')}
						alt='couple'
					/>
				</div>
				<div className='couple'>
					<div className='couple-name'>{bride}</div>
					<div className='about-couple'>{aboutBride}</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
