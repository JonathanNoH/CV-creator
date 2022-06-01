import React, { useState } from "react";

const Experience = (props) => {

  const [company, setCompany] = useState(props.currentCompany);
  const [position, setPosition] = useState(props.currentPosition);
  const [jobDescription, setJobDescription] = useState(props.currentJobDescription);
  const [startDate, setStartDate] = useState(props.currentStartDate);
  const [endDate, setEndDate] = useState(props.currentEndDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWork = {company, position, jobDescription, startDate, endDate};
    props.handleForm(newWork);
    setCompany('');
    setPosition('');
    setJobDescription('');
    setStartDate('');
    setEndDate('');
  }

  return (
    <form action="" className="experienceInput" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="company">Company: </label>
        <input 
          type="text" 
          name="company" 
          id="company"
          value={company}
          onChange={(e) => {setCompany(e.target.value)}} 
        />
      </div>
      <div>
        <label htmlFor="position">Position: </label>
        <input 
          type="text" 
          name="position" 
          id="position" 
          value={position}
          onChange={(e) => {setPosition(e.target.value)}}
        />
      </div>
      <div>
        <label htmlFor="job-description">Job Description / Responsibilites: </label>
        <textarea 
          name="jobDescription" 
          id="job-description" 
          cols="40" 
          rows="5"
          value={jobDescription}
          onChange={(e) => {setJobDescription(e.target.value)}}
        ></textarea>
      </div>
      <div>
        <label htmlFor="job-start-date">Start Date: </label>
        <input 
          type="date" 
          name="startDate" 
          id="job-start-date"
          value={startDate}
          onChange={(e) => {setStartDate(e.target.value)}}
        />
      </div>
      <div>
        <label htmlFor="job-end-date">End Date: </label>
        <input 
          type="date" 
          name="endDate" 
          id="job-end-date"
          value={endDate}
          onChange={(e) => {setEndDate(e.target.value)}}
        />
      </div>
      <input type="submit" value="Add" />
    </form>
  );
}

export default Experience;