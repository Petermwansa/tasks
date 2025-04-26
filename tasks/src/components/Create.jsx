import React, { useState } from 'react';
import axios from 'axios';

// in this Component={, we will be creating a task and then storing it in the database }
const Create = () => {

  const [task, setTask] = useState();

  // we use axios to pasrse the data to the database
  const handleAdd = () => {
    axios.post('http://localhost:3001/add', {task: task})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <div className='create_form'>
      <input type='text' name='' id='' onChange={(e) => setTask(e.target.value)}/>
      <button type='submit' onClick={handleAdd}>Add Tasks</button>
    </div>
  )
}

export default Create
