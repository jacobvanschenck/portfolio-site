import { BiChevronDown } from 'react-icons/bi'

export default function Hero() {
  return (
    <div className="flex h-screen w-screen px-16">
      <div className="mx-auto self-center ">
        <h1 className="mb-20 text-center text-8xl">Jacob Van Schenck</h1>
        <p className="pb-20 text-3xl">
          Hi, my name is Jacob and I am a Frontend Developer! I enjoy solving
          complex problems by writing clean, well tested code that scales.
        </p>
        <a
          href="#projects"
          className="flex w-52 items-center justify-center rounded-md bg-teal-500 px-5 py-3 text-white transition-shadow duration-200 hover:shadow-lg hover:shadow-teal-500/50"
        >
          Check out my work
          <BiChevronDown className="ml-1 text-xl" />
        </a>
      </div>
    </div>
  )
}
