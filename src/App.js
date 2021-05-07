import React from 'react';
import { useSelector } from "react-redux"
import SubmitTask from './features/temp/submit';
import { selectValue} from './features/temp/TempSlice';

function App() {
    const taskListArr = useSelector(selectValue);
    const showTask = () => {
      let valueList = document.querySelector('.list');
      let value = document.createElement('li');
      value.innerHTML = taskListArr;
      valueList.appendChild(value)
    }
    return (
      <div>
        <ul>
          <li className="list"></li>
        </ul>
        <SubmitTask />
        <button onClick={showTask}>here we are</button>
      </div>
    );
  };


export default App;
