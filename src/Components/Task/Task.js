import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, doneTask } from '../../JS/actions/listTask'
import Edit from '../Edit/Edit'
import './Task.css'

const Task = ({task}) => {
    const dispatch = useDispatch()
    return (
        <div className="task-container">
            <span className={task.isDone ? "done" : null}>{task.text}</span>
            <Edit task={task}/>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
            <button onClick={() => dispatch(doneTask(task.id))}>{task.isDone ? "Undone" : "done"}</button>
        </div>
    )
}

export default Task