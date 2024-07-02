import type { Task } from '@/interfaces/task.interface'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    loading: false
  }),
  getters: {
    favs(): Task[] {
      return this.tasks.filter((t: Task) => t.isFav)
    },
    favCount(): number {
      return this.tasks.reduce((p, c: Task) => {
        return c.isFav ? p + 1 : p
      }, 0)
    },
    totalCount: (state) => {
      return state.tasks.length
    }
  },
  actions: {
    async getTasks() {
      this.loading = true

      // get data from json file using json server
      const res = await fetch('http://localhost:3000/tasks')
      const data = await res.json()

      this.tasks = data
      this.loading = false
    },
    addTask(task: Task) {
      this.tasks.push(task)
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter(t => {
        return t.id !== id
      })
    },
    toggleFav(id: number) {
      const task = this.tasks.find((t: Task) => t.id === id)
      if (task) {
        task.isFav = !task.isFav
      }
    }
  }
})