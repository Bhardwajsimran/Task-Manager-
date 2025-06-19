import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import TaskItem from '../components/TaskItem';

function Dashboard() {
  const { token, logout } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: '', description: '' });

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/api/tasks', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setTasks(res.data);
  };

  const addTask = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/tasks', form, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setForm({ title: '', description: '' });
    fetchTasks();
  };

  const updateTask = async (id, updates) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, updates, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>
      <form onSubmit={addTask}>
        <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Title" required />
        <input value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Description" />
        <button type="submit">Add Task</button>
      </form>
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} onUpdate={updateTask} onDelete={deleteTask} />
      ))}
    </div>
  );
}

export default Dashboard;
