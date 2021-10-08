import React from 'react'

export default function Task ({ title, description, dateCreated, dateCompleted, complete}) {
    let output = document.querySelector('h7');
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date =  today.getDate();
    let hours = addZero(today.getHours());
    let minutes = addZero(today.getMinutes());
    let seconds = addZero(today.getSeconds());
    let current_date_time = `${month}/${date}/${year} ${hours}:${minutes}:${seconds}`

    function addZero(num){
        return num < 10 ? `0${num}`:num;
    }
    //if (current_date_time != null) { output.innerHTML = current_date_time;}
    return (
         <div>
            <h3>{title}</h3>
            <div>{description}</div>  
            <div><h7>Date Created: {dateCreated}</h7></div>
            <div><h7>Date Completed: {dateCompleted}</h7></div>
            <h4>
                <div>
                    <label> <input type="checkbox" value="false" onclick={e=> {}}></input>Complete</label>
                </div>
            </h4>         
        </div>
    )
}