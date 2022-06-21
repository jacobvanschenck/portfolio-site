import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="fixed z-50 flex w-full justify-around bg-green-500 shadow-lg">
      <ul className="flex justify-evenly">
        <li className="h-full w-full border-b-4 border-red-400 bg-red-400 py-3 px-6 transition duration-200 hover:border-solid hover:border-blue-400 hover:text-blue-400 ">
          <a href="/">Home</a>
        </li>
        <li className="h-full w-full border-b-4 border-red-400 bg-red-400 py-3 px-6 transition duration-200 hover:border-solid hover:border-blue-400 hover:text-blue-400">
          <a
            className=" focus:border-blue-400 focus:text-blue-400"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li className="h-full w-full border-b-4 border-red-400 bg-red-400 py-3 px-6 transition duration-200 hover:border-solid hover:border-blue-400 hover:text-blue-400">
          <a
            className=" focus:border-blue-400 focus:text-blue-400"
            href="#about"
          >
            About
          </a>
        </li>
        <li className="h-full w-full border-b-4 border-red-400 bg-red-400 py-3 px-6 transition duration-200 hover:border-solid hover:border-blue-400 hover:text-blue-400">
          <a
            className=" focus:border-blue-400 focus:text-blue-400"
            href="#contact"
          >
            Contact
          </a>
        </li>
        <li className="h-full w-full border-b-4 border-red-400 bg-red-400 py-3 px-6 transition duration-200 hover:border-solid hover:border-blue-400 hover:text-blue-400 ">
          <Link
            className=" focus:border-blue-400 focus:text-blue-400"
            to="/resume"
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  )
}
