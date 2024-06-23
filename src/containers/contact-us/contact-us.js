import React from 'react';

import { date, phoneNumer } from 'mock/details';

import './contact-us.css';
import MuiButton from 'components/Button/MuiButton';

const ContactUs = () => {
	const [message, setMessage] = React.useState('');

	return (
		<div className='contact-us-wrapper' id='wish_us'>
			<div className='titles'>Contact us</div>
			<div className='contact-us-content-map'>
				<div className='map'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7638.795369759317!2d75.727571!3d16.806616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc655431bc7b009%3A0x2cade8583af1c26f!2sShivasharane%20Hemareddy%20Mallama%20Kalyan%20Mantapa!5e0!3m2!1sen!2sin!4v1719134089794!5m2!1sen!2sin'
						width='100%'
						height='450'
						style={{ border: 0, outline: 'none' }}
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						title='Shop address'
					></iframe>
				</div>
				<div className='contact-us-content'>
					<div className='each-info'>
						<div className='contact-us-content-title'>Address</div>
						<div className='contact-us-content-desc'>
							Hemareddy mallamma kalyana mantapa, Ibrahimpur road, Vijayapura
						</div>
					</div>
					<div className='each-info'>
						<div className='contact-us-content-title'>Timings</div>
						<div className='contact-us-content-desc'>
							{date}, 12:00pm Onwards,
						</div>
					</div>
					<div className='each-info' style={{ width: '100%' }}>
						<div className='contact-us-content-title'>Wish the couples on</div>
						<div
							style={{
								marginTop: '1em',
								display: 'flex',
								width: '100%',
								flexDirection: 'column'
							}}
						>
							<input
								className='input-field'
								placeholder={'Write your message here'}
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
							<MuiButton
								title='Send'
								style={{ marginTop: '1em' }}
								onClick={() => {
									window.open(
										`https://wa.me/${phoneNumer}?text=${message}`,
										'_blank'
									);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
