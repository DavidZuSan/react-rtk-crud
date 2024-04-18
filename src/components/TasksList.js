import { useSelector } from "react-redux"

function TasksList() {
  const tasks = useSelector(state => state.tasks)
  console.log(tasks)
  
  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  )
}

export default TasksList
