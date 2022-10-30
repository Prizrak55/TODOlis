import axios from "axios"

const API_URL = 'http://localhost:3004'
axios.defaults.baseURL = API_URL

export const TaskServices = {
  //getting tasks
  async gelAll() {
    return await axios.get(`/tasks`)
  },

  //update tasks
  async update(task:any) {
    return await axios.put(`/tasks/${task.id}`, task, {
      headers: { 'Content-Type': 'application/json' },
    })
  },
}


