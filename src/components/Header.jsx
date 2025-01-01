import logo from '../assets/logo.png';
export default function Header() {
	return (
		<div className='flex flex-row items-center gap-2'>
			<img
				style={{
					borderRadius: '50%',
				}}
				className='h-[60px] w-[60px]'
				src={logo}
				alt=''
			/>
			<h1 className='text-2xl size-5 font-bold  flex flex-row mb-4'>
				Happenix
			</h1>
		</div>
	);
}
