import './App.css';
import TasksForm from './components/TasksForm';
import TasksList from './components/TasksList';

function App() {

  return (
    <div className="App">
      <h1>Hola Mundo!</h1>

      <TasksForm />
      <TasksList />
    </div>
  );
}

export default App;
