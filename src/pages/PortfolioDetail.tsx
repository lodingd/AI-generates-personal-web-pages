import { useEffect, useState } from 'react'
import { usePortfolioStore } from '../store/portfolioStore'
import { ExternalLink, Github, ArrowLeft, Calendar, Tag } from 'lucide-react'
import { useParams, useNavigate } from 'react-router-dom'

function PortfolioDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { projects, loadProjects } = usePortfolioStore()
  const [project, setProject] = useState<typeof projects[0] | null>(null)

  useEffect(() => {
    loadProjects()
  }, [loadProjects])

  useEffect(() => {
    if (id && projects.length > 0) {
      const found = projects.find(p => p.id === parseInt(id))
      setProject(found || null)
    }
  }, [id, projects])

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            <Tag className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">项目未找到</h2>
          <p className="text-gray-600 mb-4">抱歉，未找到该项目</p>
          <button
            onClick={() => navigate('/portfolio')}
            className="inline-flex items-center gap-2 px-6 py-2 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors"
          >
            返回作品集
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
            <p className="text-gray-600">{project.category}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="flex items-center gap-4">
              {project.githubUrl !== '#' && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              )}
              {project.demoUrl !== '#' && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white font-medium rounded-xl hover:bg-primary-600 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  在线演示
                </a>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">项目描述</h2>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">技术栈</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-primary-50 text-primary-600 text-sm font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">项目信息</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Tag className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">分类</p>
                    <p className="font-medium text-gray-900">{project.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">创建时间</p>
                    <p className="font-medium text-gray-900">2024年</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioDetail