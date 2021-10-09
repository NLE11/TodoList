import React from 'react'

export default function Task ({ title, description, dateCreated, dateCompleted, complete}) {

    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date =  today.getDate();
    let hours = addZero(today.getHours());
    let minutes = addZero(today.getMinutes());
    let seconds = addZero(today.getSeconds());
    let complete_date_and_time = `${month}/${date}/${year} ${hours}:${minutes}:${seconds}`

    function addZero(num){
        return num < 10 ? `0${num}`:num;
    }

    console.log(current_date_time);
    return (
         <div>
            <h3>{title}</h3>
            <div>{description}</div>  
            <div><h7>Date Created: {dateCreated}</h7></div>
            <div><h7>Date Completed: {dateCompleted}</h7></div>
            <h4>
                <div>
                    <label> <input type="checkbox" value="false" onclick={e=> {dispatch({type: "TOGGLE_TASK", title, description, dateCreated, dateCompleted: complete_date_and_time, complete: true});}}></input>Complete</label>
                </div>
            </h4>         
        </div>
    )
}