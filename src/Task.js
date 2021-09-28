import React from 'react'

export default function Task ({ title, description, date}) {
    return (
         <div>
            <h3>{title}</h3>
            <div>{description}</div>
            <div>{date}</div> 
        </div>
    )
}