import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div className="p-5">
      <h2>Projects Section</h2>
      <div className="flex flex-row space-x-5">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}
