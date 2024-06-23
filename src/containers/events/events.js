import { events } from '../../mock/events';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import CelebrationIcon from '@mui/icons-material/Celebration';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';

import './events.css';

const iconsStyle = {
	color: 'var(--primary-bg)',
	fontSize: '3em'
};

const EachService = ({ title, img, desc }) => {
	return (
		<div className='each-service'>
			<div className='eb-infobox-dvwldye eb-infobox-wrapper'>
				<div className='infobox-wrapper-inner'>
					<div className='icon-img-wrapper'>
						<div className='eb-infobox-image-wrapper'>{img}</div>
					</div>
					<div className='contents-wrapper'>
						<h2 className='service-title'>{title}</h2>
						<p className='service-description'>{desc}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const Events = () => {
	const eventIcons = {
		engagement: <VolunteerActivismIcon style={iconsStyle} />,
		haldi: <CelebrationIcon style={iconsStyle} />,
		wedding_day: <FavoriteIcon style={iconsStyle} />,
		reception: <Diversity1Icon style={iconsStyle} />,
		photography: <PhotoCameraFrontIcon style={iconsStyle} />,
		party: <NightlifeIcon style={iconsStyle} />,
		family_dinner: <BrunchDiningIcon style={iconsStyle} />
	};

	return (
		<div className='contact-us-wrapper' id='events'>
			<div className='titles'>Events</div>
			<div className='our-services'>
				{events.map((eachService) => (
					<EachService
						key={eachService.key}
						title={eachService.title}
						img={eventIcons[eachService.key]}
						desc={eachService.desc}
					/>
				))}
			</div>
		</div>
	);
};

export default Events;
