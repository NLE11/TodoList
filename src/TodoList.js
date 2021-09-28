import React from 'react'
import Task from './Task'

export default function TodoList ({tasks = []}) {
    return (
        // This supposes to be <Task title = {t.title} author = {t.author} key = {'task-' + i} />
        <div>
            <h2> Todo List</h2>
            {tasks.map((t, i) => <Task {...t} key = {'task-' + i} />)} 
        </div>
    )
}