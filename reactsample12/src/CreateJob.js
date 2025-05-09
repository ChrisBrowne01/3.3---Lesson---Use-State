import React from 'react'
import { useState } from 'react'

const CreateJob = () => {
  // This is a state variable that will hold the number of jobs
  const [jobCounter, setJobCounter] = useState(0);

  // This function will be called when the button is clicked
  const handleClickEvent = () => {
    // setJobCount is a function that increments up the state variable jobCount
    setJobCounter(jobCounter + 1);
    console.log('Run job', jobCounter + 1); // Log the new job count to the console
  };

  // This function will be called when the button is clicked
  const handleSubEvent = () => {
    // setJobCount is a function that decrements down the state variable jobCount
    setJobCounter(jobCounter - 1);
    console.log('Remove job', jobCounter - 1); // Log the new job count to the console
  };

  const handleResetEvent = () => {
    // setJobCount is a function that resets the state variable jobCount
    setJobCounter(0);
    console.log('Reset job', 0); // Log the new job count to the console
  }

  return (
    <div>
      <h1>Job Counter</h1>
      <p>Number of jobs : {jobCounter}</p>
      <button onClick={handleClickEvent}>Run a job</button><br />
      <button onClick={handleSubEvent}>Remove a job</button><br />
      <button onClick={handleResetEvent}>Reset</button>
    </div>
  )
}

export default CreateJob
