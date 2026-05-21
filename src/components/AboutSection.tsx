import { usePortfolioStore } from '../store/portfolioStore'
import { useEffect } from 'react'
import { Code, Layers, Server, Award } from 'lucide-react'

function AboutSection() {
  const { skills, loadSkills } = usePortfolioStore()

  useEffect(() => {
    loadSkills()
  }, [loadSkills])

  const highlights = [
    { icon: Code, title: '代码质量', description: '注重代码规范和可维护性' },
    { icon: Layers, title: '系统设计', description: '擅长架构设计和模块化开发' },
    { icon: Server, title: '全栈开发', description: '前后端技术栈全面掌握' },
    { icon: Award, title: '项目管理', description: '具备团队协作和项目管理经验' },
  ]

  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-4">
              关于我
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              了解更多
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              了解我的背景、技能和专业优势
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">个人简介</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                我是一名充满激情的全栈工程师，拥有4年以上的软件开发经验。我热爱解决复杂问题，喜欢探索新技术，并致力于创造高质量的产品。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                在职业生涯中，我参与了多个大型项目的开发，涵盖电商、金融、教育等多个领域。我不仅关注代码质量，更注重用户体验和产品价值。
              </p>
              <p className="text-gray-600 leading-relaxed">
                除了工作之外，我喜欢分享技术知识，经常在技术社区发表文章，并参与开源项目的贡献。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">专业技能</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-4">
              核心优势
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              我能为您带来的价值
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="group p-6 bg-gray-50 rounded-2xl hover:bg-primary-50 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection