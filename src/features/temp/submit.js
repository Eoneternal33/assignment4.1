import { useState } from "react";
import { useDispatch } from "react-redux";
import { storeValue } from "./TempSlice";

const SubmitTask = () => {
    // Get access to the dispatch using useDispatch() from 'react-redux'.
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dispatch an action that we imported from the slice, with a payload of "newTask".
        dispatch(storeValue(newTask));
    };

    return (
        <form className="task-submit-form" onSubmit={handleSubmit}>
            <label htmlFor="task-type">Task Name</label>
            <input id="task-type" type="text" onChange={(e) => setNewTask( e.target.value )}></input>
            <button type="submit">Submit Task</button>
        </form>
    )
};
export default SubmitTask;