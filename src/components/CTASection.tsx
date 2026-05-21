import { ArrowRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          准备好开始合作了吗？
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          如果您有项目想法或合作机会，欢迎随时联系我。让我们一起创造精彩！
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            联系我
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-gray-800 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300">
            查看作品集
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection