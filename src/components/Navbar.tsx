import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: '首页' },
    { path: '/portfolio', label: '作品集' },
    { path: '/contact', label: '联系我' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className={`font-semibold text-lg transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              郭宇航
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all hover:text-primary-600 ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : isScrolled
                    ? 'text-gray-600'
                    : 'text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
              }`}
            >
              <Github className={`w-5 h-5 ${isScrolled ? 'text-gray-600' : 'text-white'}`} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
              }`}
            >
              <Linkedin className={`w-5 h-5 ${isScrolled ? 'text-gray-600' : 'text-white'}`} />
            </a>
            <a
              href="mailto:guoyuhang@example.com"
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
              }`}
            >
              <Mail className={`w-5 h-5 ${isScrolled ? 'text-gray-600' : 'text-white'}`} />
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 px-4 pt-4 border-t border-gray-100">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <Github className="w-5 h-5 text-gray-600" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </a>
                <a
                  href="mailto:guoyuhang@example.com"
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <Mail className="w-5 h-5 text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
