import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../JS/actions/listTask'

const Add = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const handleAdd = (e) => {
        e.preventDefault()
        if(text){
            dispatch(addTask({id: Math.random(), text, isDone: false}))
            setText("")
        } else{
            alert("Can not add an empty text!")
        }
    }
    return (
        <div>
            <form>
                <input 
                    onSubmit={handleAdd}
                    placeholder='Enter new task'
                    type= "text"
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={handleAdd}>Add</button>
            </form>
        </div>
    )
}

export default Add