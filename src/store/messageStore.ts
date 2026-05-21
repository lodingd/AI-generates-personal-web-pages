import { create } from 'zustand'

export interface Message {
  id: number
  name: string
  email: string
  subject: string
  message: string
  createdAt: string
}

interface MessageState {
  messages: Message[]
  isSubmitting: boolean
  submitError: string | null
  submitSuccess: boolean
  submitMessage: (data: Omit<Message, 'id' | 'createdAt'>) => Promise<void>
  loadMessages: () => Promise<void>
  resetSubmitState: () => void
}

const API_BASE = 'http://localhost:5000/api'

export const useMessageStore = create<MessageState>((set) => ({
  messages: [],
  isSubmitting: false,
  submitError: null,
  submitSuccess: false,

  submitMessage: async (data) => {
    set({ isSubmitting: true, submitError: null, submitSuccess: false })
    try {
      const response = await fetch(`${API_BASE}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (result.success) {
        set({ submitSuccess: true })
      } else {
        set({ submitError: result.message || '发送失败' })
      }
    } catch (error) {
      set({ submitError: '发送失败，请稍后重试' })
    } finally {
      set({ isSubmitting: false })
    }
  },

  loadMessages: async () => {
    try {
      const response = await fetch(`${API_BASE}/messages`)
      const data = await response.json()
      set({ messages: data })
    } catch (error) {
      console.error('Failed to load messages:', error)
    }
  },

  resetSubmitState: () => {
    set({ submitSuccess: false, submitError: null })
  },
}))