import React, { useState } from 'react';
import Spinner from '../common/Spinner';

export default function TaskInput(props) {
  const [task, setTask] = useState('');
  const [loading, setLoading] = useState(false);

  async function onTaskFormSubmit(e) {
    e.preventDefault();

    setLoading(true);
    await props.onTaskCreate(task);
    setLoading(false);
    setTask('');
  }

  return (
    <div>
      {/* <form onSubmit={(e) => onTaskFormSubmit(e)}> */}
      <form onSubmit={onTaskFormSubmit}>
        <div className="input-group mb-3">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="form-control"
            placeholder="Enter Task"
            type="text"
          ></input>
          <button className="btn btn-outline-secondary" type="submit">
            {loading ? <Spinner extraClass="change-size" /> : '+'}
          </button>
        </div>
      </form>
    </div>
  );
}
