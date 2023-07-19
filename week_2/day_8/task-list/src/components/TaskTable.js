import React from 'react';

export default function TaskTable(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Complete</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>
                  {/* non arrow function used we want the event as the parameter */}
                  {/* <div onClick={props.onCompleteTaskToggle}></div> */}
                  {/* arrow function used because we want access to variables inside the component */}
                  <div onClick={() => props.onTaskCompleteToggle(task.id)}>
                    <i
                      className={
                        task.complete ? 'bi bi-circle-fill' : 'bi bi-circle'
                      }
                    ></i>
                  </div>
                </td>
                <td>
                  <div onClick={() => props.onTaskRemove(task.id)}>
                    <i className="bi bi-trash"> </i>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
