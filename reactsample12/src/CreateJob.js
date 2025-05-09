import React from 'react'
import { useState } from 'react'

const CreateJob = () => {
  // This is a state variable that will hold the number of jobs
  const [jobCounter, setJobCounter] = useState(0);

  // This function will be called when the button is clicked
  const handleClickEvent = () => {
    // setJobCount is a function that increments up the state variable jobCount
    setJobCounter(prevCount => prevCount + 1);
    console.log('Run job', jobCounter + 1); // Log the new job count to the console
  };

  return (
    <div>
      <h1>Job Counter</h1>
      <p>Number of jobs : {jobCounter}</p>
      <button onClick={handleClickEvent}>Run job</button>
    </div>
  )
}

export default CreateJob
