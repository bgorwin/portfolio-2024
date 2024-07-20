import Image from "next/image";
import profileImage from "/public/profile.jpg";
import Link from "next/link";

export default function Navigation() {
	return (
		<nav className='container mx-auto mt-4 mb-4 my-auto bg-opacity-0'>
			<div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center md:justify-between lg:justify-between'>
				<div className='flex md:flex-row lg:flex-row flex-col flex-wrap justify-center'>
					<div className='flex flex-col justify-center mx-auto'>
						<Image
							src={profileImage}
							alt='Profile image of Brent'
							width={150}
							height={150}
							className='rounded-full mr-3'
						/>
					</div>

					<div className='flex flex-col align-middle justify-center my-3 pe-4'>
						<p className='text-base text-center'>
							&copy; Brent Gorwin
						</p>
					</div>
				</div>

				<div className='flex flex-row align-middle justify-center'>
					<ul className='flex flex-row align-middle justify-center bg-slate-200 my-auto rounded-full'>
						<li className='text-sm sm:text-sm md:text-base lg:text-base mr-1 py-2 px-5 border hover:border-slate-600 text-black rounded-full'>
							<Link className='' href='/about'>
								About
							</Link>
						</li>
						<li className='text-sm sm:text-sm md:text-base lg:text-base mr-1 py-2 px-5 border hover:border-slate-600 text-black rounded-full'>
							<Link className='' href='/'>
								Work
							</Link>
						</li>
						<li className='text-sm sm:text-sm md:text-base lg:text-base py-2 px-5 border hover:border-slate-600 text-black rounded-full'>
							<Link className='' href='/contact'>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
