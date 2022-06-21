import { AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function ProjectCard({ name, imgUrl, gitUrl, siteUrl, route }) {
  return (
    <Link className="flex-col" to={`/${route}`}>
      <div className="group relative rounded-full shadow-lg duration-300 hover:scale-105">
        <h3 className="absolute top-1/2 w-full -translate-y-1/2 text-center text-2xl transition-opacity duration-200 group-hover:opacity-0">
          {name}
        </h3>
        <div className="w-full self-center">
          <img
            className="rounded-full object-contain"
            src={imgUrl}
            alt="Project name"
          />
        </div>
      </div>
      <div className="flex justify-center space-x-4 pt-6 text-white">
        <button className="flex items-center rounded-md bg-indigo-500 px-5 py-3 transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50">
          <AiFillGithub className="mr-2 text-xl" />
          Github
        </button>
        <button className="rounded-md bg-teal-500 px-5 py-3 transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/50">
          Live Site
        </button>
      </div>
    </Link>
  )
}
