import { AiFillGithub } from 'react-icons/ai'

export default function ProjectCard() {
  return (
    <div className="flex flex-col rounded-md p-5 shadow-lg duration-300 hover:scale-105">
      <h3 className="text-2xl">Project Name</h3>
      <div className="w-full self-center">
        <img
          className="object-contain"
          src="https://via.placeholder.com/800"
          alt="Project name"
        />
      </div>
      <p>
        This is the description of the project that I have worked on. It uses
        all sorts of great technologies like:
      </p>
      <ul className="list-inside list-disc pl-5">
        <li>React</li>
        <li>Web3.js</li>
        <li>TailwindCSS</li>
      </ul>
      <div className="flex justify-center space-x-4 pt-5 text-white">
        <button className="flex items-center rounded-md bg-indigo-500 px-5 py-3 transition-shadow duration-200 hover:shadow-lg hover:shadow-indigo-500/50">
          <AiFillGithub className="mr-2 text-xl" />
          Github
        </button>
        <button className="rounded-md bg-teal-500 px-5 py-3 transition-shadow duration-200 hover:shadow-lg hover:shadow-teal-500/50">
          Live Site
        </button>
      </div>
    </div>
  )
}
