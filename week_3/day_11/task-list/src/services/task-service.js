import {
  collection,
  addDoc,
  query,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

import { db } from '../firebase/firebase';
import { Task } from '../models/Task';

class TaskService {
  constructor() {
    this.collection = 'tasks';
  }

  async fetchTasks() {
    const collectionRef = collection(db, this.collection);
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    const tasks = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const task = new Task(doc.id, data.name, data.complete, data.userId);

      tasks.push(task);
    });

    return tasks;
  }

  async createTask(task) {
    const collectionRef = collection(db, this.collection);

    const docRef = await addDoc(collectionRef, {
      name: task.name,
      complete: task.complete,
      userId: task.userId,
    });

    task.id = docRef.id;
    return task;
  }

  async updateTask(task) {
    const docRef = doc(db, this.collection, task.id);

    await updateDoc(docRef, {
      name: task.name,
      complete: task.complete,
    });

    return task;
  }

  async deleteTask(taskId) {
    const docRef = doc(db, this.collection, taskId);

    await deleteDoc(docRef);
  }
}

const service = new TaskService();
export default service;
