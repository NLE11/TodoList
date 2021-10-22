import React, { useContext } from "react";

import { ThemeContext, StateContext } from "./Contexts";

export default function Task({
  index,
  title,
  description,
  dateCreated,
  dateCompleted,
  complete,
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

  return (
    <div>
      <h3 style={{ color: secondaryColor }}>{title}</h3>
      <div>{description}</div>
      <div>
        <h7>Date Created: {dateCreated}</h7>
      </div>
      <div>
        <h7>Date Completed: {dateCompleted}</h7>
      </div>
      <h4>
        <div>
          <label>
            {" "}
            <input
              type="checkbox"
              checked={complete} // Pay attention on the checkbox
              onChange={(e) => {
                if (complete === true) {
                  complete_date_and_time = null;
                }
                dispatch({
                  type: "TOGGLE_TASK",
                  index,
                  title,
                  description,
                  dateCreated,
                  dateCompleted: complete_date_and_time,
                  complete: !complete,
                });
              }}
            ></input>
            Complete
          </label>
        </div>
      </h4>
      <h4>
        <div>
          <button
            onClick={(e) => {
              dispatch({
                type: "DELETE_TASK",
                index,
              });
            }}
          >
            Delete
          </button>
        </div>
      </h4>
    </div>
  );
}
