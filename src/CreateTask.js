import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "./Contexts";
import { useResource } from "react-request-hook";

import { useNavigation } from "react-navi";

export default function CreateTask() {
  const { state, dispatch } = useContext(StateContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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

  // Make a call using resource hook to make a POST request to our API to persist the data to db.json before calling dispatch which update the whole state
  const [task, createTask] = useResource(
    ({ title, description, dateCreated, dateCompleted, complete, author }) => ({
      url: "/task",
      method: "post",
      headers: { Authorization: `${state.user.access_token}` },
      data: {
        title,
        description,
        dateCreated,
        dateCompleted,
        complete,
        author,
      },
    })
  );

  const navigation = useNavigation();

  useEffect(() => {
    if (task && task.isLoading === false && task.data) {
      // if the isLoading is false then the response is success then we can perform the dispatch
      dispatch({
        type: "CREATE_TASK",
        id: task.data.id,
        title: task.data.title,
        description: task.data.description,
        dateCreated: task.data.dateCreated,
        dateCompleted: task.data.dateCompleted,
        complete: task.data.complete,
        author: state.user.username,
      });
      console.log(task.data);
      navigation.navigate(`/task/${task.data.id}`); // Create task at this task
    }
  }, [task]);

  function handleTitle(evt) {
    setTitle(evt.target.value);
  }
  function handleDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleCreate() {
    createTask({
      title,
      description,
      dateCreated: current_date_time,
      dateCompleted: null,
      complete: false,
      author: state.user.username,
    });
  }

  // function handleCreate () {
  //     const newTask = { title, description, author: user } // Build a task object
  //     setTasks([ newTask, ...tasks ]) // Create a new array starting with newTask
  // }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <div>
        User: <b>{state.user.username}</b>
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
