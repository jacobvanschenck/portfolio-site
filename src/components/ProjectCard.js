import { AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function ProjectCard({
  name,
  subtitle,
  imgUrl,
  route,
  githubUrl,
  siteUrl,
}) {
  return (
    <div className="flex-col">
      <Link to={`/${route}`}>
        <div className="group relative w-72 rounded-full shadow-lg duration-300 hover:scale-105">
          <div className="absolute top-1/2 z-50 w-full -translate-y-1/2 text-center transition-opacity duration-300 group-hover:opacity-0">
            <h3 className="text-3xl text-white">{name}</h3>
            <p className="font-thin text-white">{subtitle}</p>
          </div>
          <div className="rounded-full bg-black">
            <img
              className="h-72 w-full rounded-full object-cover opacity-50 transition-opacity duration-300 hover:opacity-100"
              src={imgUrl}
              alt={name}
            />
          </div>
        </div>
      </Link>
      <div className="flex justify-center space-x-4 pt-6 text-white">
        <a
          href={githubUrl}
          target="_blank"
          className="flex items-center rounded-md bg-indigo-500 px-5 py-3 transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50"
          rel="noreferrer"
        >
          <AiFillGithub className="mr-2 text-xl" />
          Github
        </a>
        <a
          href={siteUrl}
          target="_blank"
          className="rounded-md bg-teal-500 px-5 py-3 transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/50"
          rel="noreferrer"
        >
          Live Site
        </a>
      </div>
    </div>
  )
}
