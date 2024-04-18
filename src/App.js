import './App.css';
import { useSelector } from 'react-redux';
import TasksForm from './components/TasksForm';
import TasksList from './components/TasksList';

function App() {
  const tasksState = useSelector(state => state.tasks);

  console.log(tasksState);

  return (
    <div className="App">
      <h1>Hola Mundo!</h1>

      <TasksForm />
      <TasksList />
    </div>
  );
}

export default App;
