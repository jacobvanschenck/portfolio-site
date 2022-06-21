import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div className="p-5">
      <h2 className="text-4xl">Projects Section</h2>
      <div className="flex flex-row space-x-10 px-32 py-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}
