import './App.css';

import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// If you export default then you don't need the {} brackets
import { Task } from './models/Task';
import TaskInput from './components/TaskInput';
import TaskTable from './components/TaskTable';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!tasks.length) {
      loadTasksFromLocalStorage();
    }

    // In the case of an empty array, the function only
    // fires the first time the component initializes

    // If we put a variable in the [], anytime that variable changes
    // the function fires
  }, []);

  useEffect(() => {
    saveTasksToLocalStorage();
  }, [tasks]);

  function onTaskCreate(name) {
    // create the task
    const id = new Date().getTime();
    const task = new Task(id, name, false);

    // add thee task to the state tasks
    setTasks([...tasks, task]);
  }

  function onTaskRemove(taskId) {
    // update the tasks state with the filtered tasks
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function onTaskCompleteToggle(taskId) {
    // toggle the task complete state
    const taskToToggle = tasks.find((task) => task.id === taskId);
    taskToToggle.complete = !taskToToggle.complete;

    // update the tasks state with the new task
    setTasks(
      tasks.map((task) => {
        return task.id == taskId ? taskToToggle : task;
      })
    );
  }

  function saveTasksToLocalStorage() {
    const json = JSON.stringify(tasks);
    localStorage.setItem('tasks', json);
  }

  function loadTasksFromLocalStorage() {
    const json = localStorage.getItem('tasks');
    if (json) {
      const taskArr = JSON.parse(json);
      if (taskArr.length) {
        setTasks(taskArr.map((x) => Task.fromJson(x)));
      }
    }
  }

  return (
    <div className="container mt-5">
      <div className="card card-body text-center">
        <h1>Task List</h1>
        <hr />
        <p>Our Task List</p>

        <TaskInput onTaskCreate={onTaskCreate} />
        <TaskTable
          tasks={tasks}
          onTaskRemove={onTaskRemove}
          onTaskCompleteToggle={onTaskCompleteToggle}
        />
      </div>
    </div>
  );
}

export default App;
