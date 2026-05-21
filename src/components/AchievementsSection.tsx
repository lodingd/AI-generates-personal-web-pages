import { usePortfolioStore } from '../store/portfolioStore'
import { useEffect } from 'react'
import { Trophy, Star, Rocket, Target } from 'lucide-react'

const iconMap: Record<string, typeof Trophy> = {
  '🏆': Trophy,
  '⭐': Star,
  '🚀': Rocket,
  '🎯': Target,
}

function AchievementsSection() {
  const { achievements, loadAchievements } = usePortfolioStore()

  useEffect(() => {
    loadAchievements()
  }, [loadAchievements])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-white/10 text-white/80 text-sm font-medium rounded-full mb-4">
            个人成就
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            我的成就
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            记录我的成长和收获
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Trophy
            return (
              <div
                key={achievement.id}
                className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">{achievement.title}</h3>
                <p className="text-white/70 text-sm">{achievement.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection