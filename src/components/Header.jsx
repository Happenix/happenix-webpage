import logo from '../assets/logo.png';
export default function Header() {
	return (
		<div className='flex items-center  gap-2'>
			<img
				style={{
					borderRadius: '50%',
				}}
				className='h-[60px] w-[60px]'
				src={logo}
				alt=''
			/>
			<h1 className='text-2xl font-bold   mb-4 mt-4'>Happenix</h1>
		</div>
	);
}
