"use client";
import { useState } from "react";
import Button from "../components/Button";
import ProjectCard from "../components/Project-Card";

const projects = [
	{
		id: 1,
		title: "Project React 1",
		description: "A React project.",
		category: "React",
	},
	{
		id: 2,
		title: "Project Angular 1",
		description: "An Angular project.",
		category: "Angular",
	},
	{
		id: 3,
		title: "Project Vue 1",
		description: "A Vue project.",
		category: "Vue",
	},
	{
		id: 4,
		title: "Project React 2",
		description: "Another React project.",
		category: "React",
	},
	{
		id: 5,
		title: "Project Angular 2",
		description: "Another Angular project.",
		category: "Angular",
	},
	// Add more projects as needed
];

export default function Home() {
	const [filter, setFilter] = useState("All");

	const filteredProjects =
		filter === "All"
			? projects
			: projects.filter((project) => project.category === filter);

	return (
		<>
			<div className='container mx-auto px-5'>
				<h1 className='text-3xl font-light mt-10 w-full md:w-3/4 lg:w-3/4 xl:w-3/4 '>
					I&apos;m Brent Gorwin! I&apos;m a Frontend Engineer with a
					passion for building web applications.
				</h1>

				<p className='text-lg font-light text-slate-800 mt-4 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 '>
					I have experience with a variety of technologies, including
					React, Nextjs and Angular. I&apos;m always looking to learn
					new things and improve my skills as a developer. Please view
					my projects below and contact me if you want to connect on a
					job opportunity.
				</p>

				<div className='mt-10'>
					<Button href='#' buttonText='Contact Me!' />
				</div>
			</div>

			<section className='container mx-auto mt-20'>
				<div className='grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4'>
					<div className='col-span-2'></div>
					<div className='col-span-2'>
						<p className='text-3xl font-light'>
							I have a deep passion for coding and constantly
							exploring new technologies to stay at the forefront
							of the industry. In my free time, I enjoy riding
							motorcycles and capturing moments through
							photography. These hobbies not only keep me engaged
							but also inspire my creativity and problem-solving
							skills.
						</p>

						<div className='mt-10'>
							<Button href='#' buttonText='Download Resume' />
						</div>
					</div>
				</div>
			</section>

			<hr className='container mx-auto my-10 bg-zinc-500 h-[2px;] opacity-50' />

			<section className='container mx-auto mt-10'>
				<h2 className='text-3xl font-light'>Work I Do</h2>

				<div className='container mx-auto mt-5'>
					<div className='flex justify-start mb-8'>
						{["All", "React", "Angular", "Vue"].map((tag) => (
							<button
								key={tag}
								onClick={() => setFilter(tag)}
								className={`me-5 px-4 py-2 border-2 border-x-gray-900 text-black rounded-full ${
									filter === tag
										? "bg-black text-white"
										: "bg-white text-black"
								}`}
							>
								{tag}
							</button>
						))}
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
						{filteredProjects.map((project) => (
							<ProjectCard key={project.id} {...project} />
						))}
					</div>
				</div>
			</section>
		</>
	);
}
