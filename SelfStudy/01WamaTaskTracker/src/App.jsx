import {useState} from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (userInput) => {

    let newTask = {
      id: Date.now(),
      text: userInput,
    }
    if(newTask.text.length > 0)setTasks([...tasks, newTask]);

  }

  const deleteTasks = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  const updateTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? {...task, text : newText} : task
    ))
    setEditingTask(null);
  }

  return (
      <div className="min-h-scree bg-gray-100 py-10 px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6" >
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">WaMa Task Tracker</h1>

          <TaskForm onAddTask = {addTask}/>
          <div className="mt-6">
            <TaskList tasks = {tasks}  onDelete = {deleteTasks} />
          </div>
        </div>
      </div>
  )
}

export default App;
