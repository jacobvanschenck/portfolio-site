import ProjectCard from './ProjectCard'
import turboRunnersImg from '../assets/TurboRunners.png'
import dexImg from '../assets/MyDex.png'
import walletImg from '../assets/MultisigWallet.png'

export default function Projects() {
  return (
    <div className="p-5" id="projects">
      <h2 className="text-4xl">Projects Section</h2>
      <div className="flex flex-row space-x-10 px-32 py-10">
        <ProjectCard
          name={'Turbo Runners'}
          imgUrl={turboRunnersImg}
          route={'project1'}
        />
        <ProjectCard name={'MyDex'} imgUrl={dexImg} route={'project1'} />
        <ProjectCard
          name={'MultisigWallet'}
          imgUrl={walletImg}
          route={'project1'}
        />
      </div>
    </div>
  )
}
