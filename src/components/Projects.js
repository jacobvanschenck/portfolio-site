import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div className="p-5" id="projects">
      <h2 className="text-4xl">Projects Section</h2>
      <div className="flex flex-row space-x-10 px-32 py-10">
        <ProjectCard
          name={'Turbo Runners'}
          imgUrl={'https://via.placeholder.com/350'}
          route={'project1'}
        />
        <ProjectCard
          name={'Turbo Runners'}
          imgUrl={'https://via.placeholder.com/350'}
          route={'project1'}
        />
        <ProjectCard
          name={'Turbo Runners'}
          imgUrl={'https://via.placeholder.com/350'}
          route={'project1'}
        />
      </div>
    </div>
  )
}
