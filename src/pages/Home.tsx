import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import AchievementsSection from '../components/AchievementsSection'
import CTASection from '../components/CTASection'

function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <CTASection />
    </div>
  )
}

export default Home