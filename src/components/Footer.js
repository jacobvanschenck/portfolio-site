import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineSend,
} from 'react-icons/ai'

export default function Footer() {
  return (
    <div className="flex items-center justify-between bg-green-400 px-4 text-white">
      <p className="">© 2022 Jacob Van Schenck</p>
      <div className="flex py-4">
        <a
          className="flex items-center px-2 hover:text-blue-400"
          href="https://github.com/jacobvanschenck"
        >
          <AiFillGithub className="mr-1 text-xl" />
          Github
        </a>
        <a
          className="flex items-center px-2 hover:text-blue-400"
          href="https://linkedin.com/in/jacobvanschenck"
        >
          <AiFillLinkedin className="mr-1 text-xl" />
          LinkedIn
        </a>
        <a
          className="flex items-center px-2 hover:text-blue-400"
          href="mailto:jacob.vanschenck@gmail.com"
        >
          <AiOutlineSend className="mr-1 text-xl" />
          Email
        </a>
      </div>
    </div>
  )
}
