import Button from "../../components/Button";

export default function Contact() {
	return (
		<div>
			<div className='container mx-auto'>
				<h1 className='text-3xl font-light mt-10 w-full md:w-3/4 lg:w-3/4 xl:w-3/4 text-center md:text-start lg:text-start xl:text-start'>
					Contact Page
				</h1>

				<div className='mt-10'>
					<Button href='/' buttonText='Contact Me!' />
				</div>
			</div>
		</div>
	);
}
