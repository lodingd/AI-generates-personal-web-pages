import { create } from 'zustand'

export interface Project {
  id: number
  title: string
  category: string
  description: string
  techStack: string[]
  imageUrl: string
  demoUrl: string
  githubUrl: string
}

export interface Achievement {
  id: number
  title: string
  description: string
  icon: string
}

export interface Skill {
  name: string
  level: number
}

interface PortfolioState {
  projects: Project[]
  achievements: Achievement[]
  skills: Skill[]
  isLoading: boolean
  error: string | null
  loadProjects: () => Promise<void>
  loadAchievements: () => Promise<void>
  loadSkills: () => Promise<void>
}

const API_BASE = 'http://localhost:5000/api'

export const usePortfolioStore = create<PortfolioState>((set) => ({
  projects: [],
  achievements: [],
  skills: [],
  isLoading: false,
  error: null,

  loadProjects: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await fetch(`${API_BASE}/portfolio/projects`)
      const data = await response.json()
      set({ projects: data.map((p: any) => ({
        id: p.id,
        title: p.title,
        category: p.category,
        description: p.description,
        techStack: p.tech_stack?.split(',') || [],
        imageUrl: p.image_url,
        demoUrl: p.demo_url,
        githubUrl: p.github_url,
      })) })
    } catch (error) {
      set({ error: '加载项目失败' })
      set({ projects: [
        { id: 1, title: '电商平台', category: '电商', description: '一个全面的电商解决方案', techStack: ['React', 'Node.js'], imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', demoUrl: '#', githubUrl: '#' },
        { id: 2, title: '分析仪表板', category: '数据可视化', description: '实时数据分析平台', techStack: ['Vue.js', 'Python'], imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80', demoUrl: '#', githubUrl: '#' },
        { id: 3, title: '移动学习应用', category: '移动端', description: '跨平台教育应用', techStack: ['React Native', 'Firebase'], imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80', demoUrl: '#', githubUrl: '#' },
        { id: 4, title: 'AI聊天机器人', category: '人工智能', description: '智能客服系统', techStack: ['Python', 'API'], imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80', demoUrl: '#', githubUrl: '#' },
        { id: 5, title: '企业OA系统', category: '企业级', description: '办公自动化平台', techStack: ['React', 'Node.js'], imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', demoUrl: '#', githubUrl: '#' },
        { id: 6, title: '作品集平台', category: '网站', description: '个人作品集展示', techStack: ['Next.js', 'GraphQL'], imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', demoUrl: '#', githubUrl: '#' },
      ] })
    } finally {
      set({ isLoading: false })
    }
  },

  loadAchievements: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await fetch(`${API_BASE}/portfolio/achievements`)
      const data = await response.json()
      set({ achievements: data.map((a: any) => ({
        id: a.id,
        title: a.title,
        description: a.description,
        icon: a.icon,
      })) })
    } catch (error) {
      set({ error: '加载成就失败' })
      set({ achievements: [
        { id: 1, title: '顶尖开发者', description: '连续三年获得公司优秀员工称号', icon: '🏆' },
        { id: 2, title: '开源贡献者', description: 'GitHub贡献超过5000次', icon: '⭐' },
        { id: 3, title: '技术演讲者', description: '多次在技术大会分享经验', icon: '🚀' },
        { id: 4, title: '技术负责人', description: '带领团队完成多个千万级项目', icon: '🎯' },
      ] })
    } finally {
      set({ isLoading: false })
    }
  },

  loadSkills: async () => {
    set({ isLoading: true, error: null })
    try {
      const response = await fetch(`${API_BASE}/portfolio/skills`)
      const data = await response.json()
      set({ skills: data })
    } catch (error) {
      set({ error: '加载技能失败' })
      set({ skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'React', level: 88 },
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'SQL', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
      ] })
    } finally {
      set({ isLoading: false })
    }
  },
}))