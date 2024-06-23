import React from 'react';

import BgImg1 from 'assets/images/bg-img.jpg';
import BgImgEtn1 from 'assets/images/Ethnic1.jpg';
import BgImgEtn2 from 'assets/images/Ethnic2.jpg';
import BgImgEtn3 from 'assets/images/Ethnic3.jpg';
import BgImgEtn4 from 'assets/images/Ethnic4.jpg';
import BgImgNat1 from 'assets/images/Nature1.jpg';
import BgImgNat2 from 'assets/images/Nature2.jpg';
import BgImgNat4 from 'assets/images/Nature4.jpg';
import BgImgNat5 from 'assets/images/Nature5.jpg';
import BgImgNat7 from 'assets/images/Nature7.jpg';

import BgImgRes1 from 'assets/images/Res1.jpg';
import BgImgRes2 from 'assets/images/Res2.jpg';
import BgImgRes3 from 'assets/images/Res3.jpg';
import BgImgRes4 from 'assets/images/Res4.jpg';
import BgImgRes6 from 'assets/images/Res6.jpg';

import './gallery.css';

const gallery = [
	BgImg1,
	BgImgEtn1,
	BgImgEtn2,
	BgImgEtn3,
	BgImgEtn4,
	BgImgNat1,
	BgImgNat2,
	BgImgNat4,
	BgImgNat5,
	BgImgNat7,
	BgImgRes1,
	BgImgRes2,
	BgImgRes3,
	BgImgRes4,
	BgImgRes6
];

const Viewer = ({ img = 0, hideShowImg }) => {
	return (
		<div className='viewer-wrapper' onClick={hideShowImg}>
			<img className='view-img' src={gallery[img]} alt='couple' />
		</div>
	);
};

const Gallery = () => {
	const [viewImage, setViewImage] = React.useState(0);
	const [showImage, setShowImage] = React.useState(false);

	const handleViewImage = (id) => {
		setViewImage(id);
		setShowImage(true);
	};

	return (
		<div>
			<div className='titles'>Our Gallery</div>
			<div className='about-us-content'>
				<div className='gallery-content'>
					{gallery.map((eachImage, id) => (
						<img
							className='gallery-images'
							src={eachImage}
							alt='couples'
							onClick={() => handleViewImage(id)}
						/>
					))}
				</div>
			</div>
			{showImage && (
				<Viewer
					img={viewImage}
					hideShowImg={() => {
						setShowImage(false);
						setViewImage(0);
					}}
				/>
			)}
		</div>
	);
};
export default Gallery;
