import Header from './components/Header';
// import bg from './assets/bg.png';
import phone from './assets/phone.png';
import Footer from './components/Footer';
export default function App() {
	return (
		<div>
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
						/>
						<button className='bg-[rgba(139,93,225,1)] text-white md:w-[6rem] text-sm  rounded-lg px-[2px]'>
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
