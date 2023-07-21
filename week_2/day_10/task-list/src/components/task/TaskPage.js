import React, { useState, useEffect } from 'react';

// Model imports
import { Task } from '../../models/Task';

// Component imports
import TaskInput from './TaskInput';
import TaskTable from './TaskTable';

// Service imports
import TaskService from '../../services/task-service';

export default function TaskPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!tasks.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    try {
      const tasks = await TaskService.fetchTasks();
      setTasks(tasks);
    } catch (err) {
      console.log(err);
    }
  }

  async function onTaskCreate(name) {
    const task = await TaskService.createTask(new Task(null, name, false));
    setTasks([...tasks, task]);
  }

  async function onTaskRemove(taskId) {
    await TaskService.deleteTask(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  async function onTaskCompleteToggle(taskId) {
    const taskToToggle = tasks.find((task) => task.id === taskId);
    taskToToggle.complete = !taskToToggle.complete;

    const updatedTask = await TaskService.updateTask(taskToToggle);

    setTasks(
      tasks.map((task) => {
        return task.id == taskId ? updatedTask : task;
      })
    );
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
