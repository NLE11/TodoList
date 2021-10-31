import React, { useContext, useEffect } from "react";
import { useResource } from "react-request-hook";
import { ThemeContext, StateContext } from "./Contexts";

import { Link } from "react-navi";

function Task({
  id,
  title,
  description,
  dateCreated,
  dateCompleted,
  complete,
  short = false,
  //dispatch, //No need this because we already pass the dispatch from StateContext
}) {
  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = today.getDate();
  let hours = addZero(today.getHours());
  let minutes = addZero(today.getMinutes());
  let seconds = addZero(today.getSeconds());
  let complete_date_and_time = `${month}/${date}/${year} ${hours}:${minutes}:${seconds}`;

  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  const { secondaryColor } = useContext(ThemeContext); // Take out the secondary color from the ThemeContext and use it for title
  const { dispatch } = useContext(StateContext);

  let processedDescription = description;
  if (short) {
    if (description.length > 30) {
      processedDescription = description.substring(0, 30) + "...";
    }
  }

  const [task, deleteTask] = useResource(() => ({
    url: `/tasks/${id}`,
    method: "delete",
  }));

  const [statusTask, toggleTask] = useResource(
    ({ complete, dateCompleted }) => ({
      // Pass the arguments that need to change
      url: `/tasks/${id}`,
      method: "patch",
      data: { complete, dateCompleted },
    })
  );

  useEffect(() => {
    if (task && task.isLoading === false && task.data !== undefined) {
      // Check if the task exists on server
      dispatch({ type: "DELETE_TASK", id });
    }
  }, [task]);

  useEffect(() => {
    if (statusTask && statusTask.isLoading === false && statusTask.data) {
      dispatch({
        // This to decide which fields I want to update
        type: "TOGGLE_TASK",
        id: statusTask.data.id,
        complete: statusTask.data.complete,
        dateCompleted: statusTask.data.dateCompleted,
        dateCreated: statusTask.data.dateCreated,
        description: statusTask.data.description,
        title: statusTask.data.title,
      });
    }
  }, [statusTask]);

  const handleDelete = () => {
    deleteTask();
  };

  const handleComplete = (evt) => {
    let completeDate = null;
    if (evt.target.checked) {
      completeDate = complete_date_and_time;
    } else {
      completeDate = null;
    }
    toggleTask({ complete: evt.target.checked, dateCompleted: completeDate });
  };

  return (
    <div>
      <Link href={`/task/${id}`}>
        <h3 style={{ color: secondaryColor }}>{title}</h3>
      </Link>
      <div>{processedDescription}</div>
      <div>
        <h5>Date Created: {dateCreated}</h5>
      </div>
      <div>
        <h5>Date Completed: {dateCompleted}</h5>
      </div>
      <h4>
        <div>
          <label>
            {" "}
            <input
              type="checkbox"
              checked={complete} // Pay attention on the checkbox
              onChange={handleComplete}
            ></input>
            Complete
          </label>
        </div>
      </h4>
      <h4>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </h4>
      {short && (
        <div>
          <br />
          <Link href={`/task/${id}`}>View full post</Link>
        </div>
      )}
    </div>
  );
}

export default React.memo(Task);
