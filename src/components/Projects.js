import ProjectCard from './ProjectCard'
import turboRunnersImg from '../assets/TurboRunners.png'
import dexImg from '../assets/MyDex.png'
import walletImg from '../assets/MultisigWallet.png'

export default function Projects() {
  return (
    <div className="p-5" id="projects">
      <h2 className="text-4xl">Projects Section</h2>
      <div className="flex flex-col justify-center space-x-10 px-32 py-10 md:flex-row">
        <ProjectCard
          name={'Turbo Runners'}
          subtitle={'NFT Project'}
          imgUrl={turboRunnersImg}
          route={'project1'}
          githubUrl={'https://github.com/jacobvanschenck/nft-project-nextjs'}
          siteUrl={'https://turbo-runners.vercel.app/'}
        />
        <ProjectCard
          name={'MyDex'}
          subtitle={'Decentralized Exchange'}
          imgUrl={dexImg}
          route={'project1'}
          githubUrl={'https://github.com/jacobvanschenck/My-Dex'}
          siteUrl={'https://dex-vs.netlify.app/'}
        />
        <ProjectCard
          name={'MultisigWallet'}
          subtitle={'Multiple validater crypto wallet'}
          imgUrl={walletImg}
          route={'project1'}
          githubUrl={'https://github.com/jacobvanschenck/Multisig-Wallet'}
          siteUrl={'https://multi-sig-wallet-vs.netlify.app/'}
        />
      </div>
    </div>
  )
}
