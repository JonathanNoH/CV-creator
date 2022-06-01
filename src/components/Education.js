import React, { useState } from "react";

const Education = (props) => {
  const [school, setSchool] = useState(props.currentSchool);
  const [degree, setDegree] = useState(props.currentDegree);
  const [startDate, setStartDate] = useState(props.currentStartDate);
  const [endDate, setEndDate] = useState(props.currentEndDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEducation = {school, degree, startDate, endDate};
    props.handleForm(newEducation);
    setSchool('');
    setDegree('');
    setStartDate('');
    setEndDate('');
  }

  return (
    <form className="educationInput" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="school">School: </label>
        <input 
        type="text" 
        name="school" 
        id="school"
        value={school}
        onChange={(e) => setSchool(e.target.value)} />
      </div>
      <div>
        <label htmlFor="degree">Degree/Title: </label>
        <input 
        type="text" 
        name="degree" 
        id="degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)} />
      </div>
      <div>
        <label htmlFor="startDate">Start Date: </label>
        <input 
        type="date" 
        name="startDate" 
        id="startDate"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)} />
      </div>
      <div>
        <label htmlFor="endDate">End Date: </label>
        <input 
        type="date" 
        name="endDate" 
        id="endDate"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <input type="submit" value="Add" />
    </form>
  );
}

export default Education;