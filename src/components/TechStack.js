import TechCard from './TechCard'

export default function TechStack() {
  return (
    <div className="px-5" id="tech">
      <h2 className="text-4xl">Technologies I Use</h2>
      <div className="flex">
        <TechCard />
        <TechCard />
        <TechCard />
      </div>
    </div>
  )
}
