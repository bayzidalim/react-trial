/* export default function Todo(task,isDone){
    return (
        <li>Task:{task}</li>
    )
} */

// Conditional Rendering option 1
/* export default function Todo(task,isDone){
    if(isDone===true){
        return <li>Finished:{task} </li>
    }
    else{
        return <li>Work on: {task} </li>
    }
} */

// Conditional Rendering Option 2
export default function Todo(task,isDone){
    if(isDone){
        return <li>Finished: {task}</li>
    }
    return <li>Work on: {task} </li>
}