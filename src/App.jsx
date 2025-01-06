import Header from './components/Header';
import { useState } from 'react';
import phone from './assets/phone.png';
import Footer from './components/Footer';
import { sendEmail } from './services/api';
export default function App() {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const handleSendEmail = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			if (!email) {
				alert('Please Enter Email');
			}
			const data = { email };
			setEmail('');
			const response = await sendEmail(data);
			if (response.status === 200) {
				alert('Email Sent Successfully');
			} else {
				alert('Our Servers Are Down, Please Try Again Later');
			}
			loading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};
	return (
		<div>
			{loading && (
				<div className='fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center'></div>
			)}
			<header className='flex justify-center items-center md:justify-start md:ml-6'>
				<Header />
			</header>
			<div className='flex flex-col justify-center items-center gap-3 md:flex-row md:justify-between md:items-start md:p-[2rem]'>
				<div className='flex flex-col  items-center  md:items-start p-4  gap-[1rem] md:w-1/2'>
					<h1 className='text-[1.5rem] font-extralight '>Coming Soon</h1>
					<h1 className='text-[2rem] font-bold'>Where Moments</h1>
					<h1 className='text-[2rem] font-bold'>Comes Alive</h1>
					<form className='flex border-2 border-black rounded-lg md:w-full md:flex p-1'>
						<input
							className=' rounded-lg outline-none md:w-full'
							type='email'
							placeholder='Enter Your Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<button
							className='bg-[rgba(139,93,225,1)] text-white md:w-[6rem] text-sm  rounded-lg px-[2px]'
							onClick={handleSendEmail}>
							Notify Me
						</button>
					</form>
					<h1>*Register for Beta version :)</h1>
				</div>
				<div className='md:bg-[url("./assets/bg.png")] bg-no-repeat bg-center  bg-contain md:w-1/2  md:flex md:justify-center'>
					<img
						style={{
							width: 200,
							height: 'auto',
						}}
						src={phone}
						alt=''
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
