import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteTask } from "../features/tasks/taskSlice"

function TasksList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  
  return (
    <div>
      <header>
        <h1>Tasks {tasks.length}</h1>
      <Link to='/create-task'>
        Create Task
      </Link>
      </header>

      {tasks.map(task => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          <Link to={`/edit-task/${task.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  )
}

export default TasksList;
