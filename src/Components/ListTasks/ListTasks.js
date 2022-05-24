import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Task from '../Task/Task'

const ListTasks = () => {
    const [status, setStatus] = useState("All")
    const list = useSelector(state => state.listReducer.listTasks)
    return (
        <div>
            {/* {list.map(el => (<Task task={el} key={el.id}/>))} */}
            <Button variant="outline-primary" onClick={() => setStatus("All")}>All</Button>
            <Button variant="outline-primary" onClick={() => setStatus("Done")}>Done</Button>
            <Button variant="outline-primary" onClick={() => setStatus("unDone")}>unDone</Button>
            { status === "Done"
                ? list
                    .filter((el) => el.isDone === true)
                    .map((el) => <Task task={el} key={el.id}/>)
                : status === "unDone"
                ? list
                    .filter((el) => el.isDone === false)
                    .map((el) => <Task task={el} key={el.id}/>)
                :
                    list.map((el) => <Task task={el} key={el.id}/>)
            }
        </div>
    )
}

export default ListTasks