import React, { useState } from 'react'
import Create from './Create'

const Home = () => {

    const [tasks, settasks] = useState([]);


  return (
    <div className='home'>
      <h2>Tasks</h2>
      <Create />

      {
        tasks.length === 1 ? 
        <div className='no_task'>No Tasks added</div>
        : 
        tasks.map(task => (
            <div>
                {task}
            </div>
        ))
      }
    </div>
  )
  
}

export default Home
