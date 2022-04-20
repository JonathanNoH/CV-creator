import React from "react";

class Experience extends React.Component {
  
  render() {
    return (
      <form action="" className="experience">
        <div>
          <label htmlFor="company">Company: </label>
          <input type="text" name="company" id="company" />
        </div>
        <div>
          <label htmlFor="position">Position: </label>
          <input type="text" name="position" id="position" />
        </div>
        <div>
          <label htmlFor="job-description">Job Description / Responsibilites: </label>
          <textarea name="job-description" id="job-description" cols="40" rows="5"></textarea>
        </div>
        <div>
          <label htmlFor="job-start-date">Start Date: </label
          ><input type="date" name="job-start-date" id="job-start-date" />
        </div>
        <div>
          <label htmlFor="job-end-date">End Date: </label>
          <input type="date" name="job-end-date" id="job-end-date" />
        </div>
        <input type="submit" value="Add" />
        <button>Edit</button>
      </form>
    );
  }
}

export default Experience;