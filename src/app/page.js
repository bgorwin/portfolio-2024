import Navigation from "../components/Navigation";

export default function Home() {
	return (
		<div>
			<Navigation />
			<div className='container mx-auto'>
				<h1 className='text-3xl font-light mt-10 w-full md:w-3/4 lg:w-3/4 xl:w-3/4 text-center md:text-start lg:text-start xl:text-start'>
					I&apos;m Brent Gorwin! I&apos;m a Frontend Engineer with a
					passion for building web applications.
				</h1>

				<p className='text-lg font-thin text-slate-200 mt-4 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-center md:text-start lg:text-start xl:text-start'>
					I have experience with a variety of technologies, including
					React, Nextjs and Angular. I&apos;m always looking to learn
					new things and improve my skills as a developer. Please view
					my projects below and contact me if you want to connect on a
					job opportunity.
				</p>
			</div>
		</div>
	);
}
