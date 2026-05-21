import { Briefcase, GraduationCap, Building2 } from 'lucide-react'

function ExperienceSection() {
  const experiences = [
    {
      title: '高级前端工程师',
      company: '科技创新有限公司',
      period: '2022 - 至今',
      description: '负责公司核心产品的前端架构设计和开发，带领团队完成多个大型项目。主导技术选型和架构优化，提升系统性能30%。',
      icon: Briefcase,
    },
    {
      title: '前端开发工程师',
      company: '互联网创业公司',
      period: '2020 - 2022',
      description: '参与产品从0到1的开发过程，负责前端技术选型和核心功能实现。开发了多个核心模块，用户满意度达95%。',
      icon: Briefcase,
    },
    {
      title: '技术实习生',
      company: '知名科技企业',
      period: '2019 - 2020',
      description: '参与企业级应用的开发和维护，学习了大型项目的开发流程和最佳实践。获得优秀实习生称号。',
      icon: Building2,
    },
    {
      title: '计算机科学学士',
      company: '北京某大学',
      period: '2016 - 2020',
      description: '主修计算机科学与技术，GPA 3.8/4.0，获得优秀毕业生称号。参与多个科研项目和技术竞赛。',
      icon: GraduationCap,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-4">
            工作经历
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            职业发展历程
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            从学习到工作，不断成长的技术之路
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200" />
          
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            const isLeft = index % 2 === 0
            return (
              <div key={exp.title} className={`relative flex items-center mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary-500 flex items-center justify-center z-10 shadow-lg">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className={`inline-block p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow ${isLeft ? 'md:ml-auto' : ''}`}>
                    <h4 className="font-semibold text-gray-900 mb-1 text-lg">{exp.title}</h4>
                    <p className="text-primary-600 text-sm mb-2 font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection