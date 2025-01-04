import React from 'react';
import fb from '../assets/fb.png';
import insta from '../assets/insta.png';
import linkedIn from '../assets/linke.png';

function Footer() {
	return (
		<div className='flex flex-col items-center sticky bottom-0 mt-[2rem]'>
			<div className='flex gap-4'>
				<a
					href='https://www.facebook.com/share/19kRQAtnRM/'
					target='_blank'>
					<img
						className='size-5'
						src={fb}
						alt=''
					/>
				</a>
				<a
					href='https://www.instagram.com/happenix_/'
					target='_blank'>
					<img
						className='size-5'
						src={insta}
						alt=''
					/>
				</a>
				<a
					href='https://www.linkedin.com/company/106092486/admin/dashboard/'
					target='_blank'>
					<img
						className='size-5'
						src={linkedIn}
						alt=''
					/>
				</a>
			</div>
			<h1>Copyright Happenix@2024</h1>
		</div>
	);
}

export default Footer;
