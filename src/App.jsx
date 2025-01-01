import Header from './components/Header.jsx';
import { CiSearch } from 'react-icons/ci';
import fb from './assets/fb.png';
import x from './assets/x.png';
import bg from './assets/bg.png';
import insta from './assets/insta.png';
import linkedIn from './assets/linke.png';
import github from './assets/git.png';
import phone from './assets/phone.png';
export default function App() {
	return (
		<div className=' min-h-screen'>
			<Header />
			<div className='flex justify-between p-[30px] md:flex-row flex-col items-baseline h-screen '>
				<div className='mt-10 relative z-50  w-1/2 py-28'>
					<h1 className='font-thin text-3xl'>Coming Soon</h1>
					<h1 className='text-xl font-thin text-end'>....Happenix</h1>
					<div className='font-bold text-5xl flex flex-col gap-4 mt-10 '>
						<h1>Where Moments</h1>
						<h1>Comes Live</h1>
					</div>
					<div className='flex md:w-[500px] border-[3px] py-1 border-black   rounded-2xl px-4 justify-between mt-10 '>
						<div className='flex items-center gap-2  '>
							<CiSearch />
							<input
								placeholder='Enter your email'
								className='outline-none w-2/3'
								type='text'
							/>
						</div>

						<button className=' text-white rounded-2xl px-4 py-1 bg-[#8C5CFE]  hover:bg-red-400'>
							Notify me
						</button>
					</div>
					<h1 className='text-black-300 text-xl ml-3 mt-5 '>
						{' '}
						Register for Beta version:)
					</h1>
				</div>
				<div className='flex md:justify-center md:flex-row flex-col w-full '>
					<img
						className='w-[840px] h-[360px] md:absolute'
						src={bg}
						alt=''
					/>
					<img
						className='h-[750px] w-[358px] md:absolute md:top-20  shadow-2xl shadow-zinc-500  rounded-3xl p-3'
						src={phone}
						alt=''
					/>
				</div>
			</div>
			<div className='absolute bottom-0  left-20 flex flex-col gap-3'>
				<div className='flex  gap-5 mt-[100px] p-2'>
					<img
						className='size-5'
						src={fb}
						alt=''
					/>
					<img
						src={github}
						className='size-5'
						alt=''
					/>
					<img
						className='size-5'
						src={insta}
						alt=''
					/>
					<img
						className='size-5'
						src={linkedIn}
						alt=''
					/>
					<img
						className='size-5'
						src={x}
						alt=''
					/>
				</div>
				<div className=''>
					<h1>Copyright Happenix@2024</h1>
				</div>
			</div>
		</div>
	);
}
