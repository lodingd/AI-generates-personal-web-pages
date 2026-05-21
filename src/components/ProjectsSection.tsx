import { usePortfolioStore } from '../store/portfolioStore'
import { useEffect } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

function ProjectsSection() {
  const { projects, loadProjects } = usePortfolioStore()

  useEffect(() => {
    loadProjects()
  }, [loadProjects])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-4">
            项目作品
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            精选项目
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            展示我参与开发的部分项目，涵盖不同技术栈和业务领域
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary-50 text-primary-600 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    查看详情
                  </Link>
                  {project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demoUrl !== '#' && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
          >
            查看全部项目
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection