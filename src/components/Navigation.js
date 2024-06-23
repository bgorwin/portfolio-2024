import Image from "next/image";
import profileImage from "/public/profile.jpg";
import Link from "next/link";

export default function Navigation() {
	return (
		<nav className='container mx-auto flex justify-between mt-4 my-auto'>
			<div className='flex flex-row'>
				<div className='flex-col'>
					<Image
						src={profileImage}
						alt='Profile image of Brent'
						width={150}
						height={150}
						className='rounded-full mr-3'
					/>
				</div>

				<div className='flex flex-col align-middle justify-center'>
					<p className='text-base'>Brent Gorwin</p>
				</div>
			</div>
			<div className='flex flex-row align-middle'>
				<ul className='flex flex-row align-middle justify-center bg-slate-200 my-auto rounded-full'>
					<li className='mr-1 py-2 px-5 border hover:border-slate-600 text-black rounded-full'>
						<Link className='' href='/about'>
							About
						</Link>
					</li>
					<li className='mr-1 py-2 px-5 border hover:border-slate-600 text-black rounded-full'>
						<Link className='' href='/'>
							Work
						</Link>
					</li>
					<li className='py-2 px-5 border hover:border-slate-600 text-black rounded-full'>
						<Link className='' href='/contact'>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
