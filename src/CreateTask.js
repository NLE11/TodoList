import React, { useState } from "react";

export default function CreateTask({ user, dispatch }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleTitle(evt) {
    setTitle(evt.target.value);
  }
  function handleDescription(evt) {
    setDescription(evt.target.value);
  }

  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = today.getDate();
  let hours = addZero(today.getHours());
  let minutes = addZero(today.getMinutes());
  let seconds = addZero(today.getSeconds());
  let current_date_time = `${month}/${date}/${year} ${hours}:${minutes}:${seconds}`;

  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  console.log(current_date_time);

  // function handleCreate () {
  //     const newTask = { title, description, author: user } // Build a task object
  //     setTasks([ newTask, ...tasks ]) // Create a new array starting with newTask
  // }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: "CREATE_TASK",
          title,
          description,
          dateCreated: current_date_time,
          dateCompleted: null,
          complete: false,
        });
      }}
    >
      <div>
        User: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label> <br />
        <input
          type="text"
          value={title}
          onChange={handleTitle}
          name="create-title"
          id="create-title"
        />
      </div>
      <div>
        <label htmlFor="create-description">Description:</label> <br />
        <textarea value={description} onChange={handleDescription} />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}
