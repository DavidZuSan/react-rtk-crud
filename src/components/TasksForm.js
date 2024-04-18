import { useState } from "react"

function TasksForm() {

  const [tasks, setTasks] = useState({
    title: '',
    description: ''
  })

  const handleChange = (e) => {
    setTasks({
      ...tasks,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tasks)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" type="text" placeholder="title" onChange={handleChange}/>

      <textarea name="description" placeholder="description" onChange={handleChange}></textarea>

      <button type="submit">Add task</button>
    </form>
  )
}

export default TasksForm