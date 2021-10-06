import React from 'react'

export default function Task ({ title, description, dateCreated, dateCompleted, complete}) {
    function displayDate() {
        document.getElementById("showDate").innerHTML=Date();
    }
    return (
         <div>
            <h3>{title}</h3>
            <div>{description}</div>  
            <h4>
                <button type="button" onclick="displayDate()">Show Date Created</button>
                <p id="showDate"></p>
            </h4>
            <h4>{dateCompleted}</h4>
            <h4>
                <div>
                    <label> <input type="checkbox" value="false" onclick={e=> {}}></input>Complete</label>
                </div>
            </h4>         
        </div>
    )
}