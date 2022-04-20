import React from "react";

class Education extends React.Component {

  render() {
    return (
      <form action="" className="education">
        <div>
          <label htmlFor="school">School: </label>
          <input type="text" name="school" id="school" />
        </div>
        <div>
          <label htmlFor="degree">Degree/Title: </label>
          <input type="text" name="degree" id="degree" />
        </div>
        <div>
          <label htmlFor="start-date">Start Date: </label>
          <input type="date" name="start-date" id="start-date" />
        </div>
        <div>
          <label htmlFor="end-date">End Date: </label>
          <input type="date" name="end-date" id="end-date" />
        </div>
        <input type="submit" value="Add" />
        <button>Edit</button>
      </form>
    );
  }
}

export default Education;