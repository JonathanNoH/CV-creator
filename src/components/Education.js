import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      school: this.props.currentSchool,
      degree: this.props.currentDegree,
      startDate: this.props.currentStartDate,
      endDate: this.props.currentEndDate,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newEducation = {
      school: this.state.school,
      degree: this.state.degree,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    }
    //const oldEducationList = this.state.educationList;
    this.setState({
      //educationList : [...oldEducationList, newEducation],
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
    }, () => {
      this.props.handleForm(newEducation);
    })
  }

  render() {
    return (
      <form className="educationInput" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="school">School: </label>
          <input 
          type="text" 
          name="school" 
          id="school"
          value={this.state.school}
          onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="degree">Degree/Title: </label>
          <input 
          type="text" 
          name="degree" 
          id="degree"
          value={this.state.degree}
          onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="startDate">Start Date: </label>
          <input 
          type="date" 
          name="startDate" 
          id="startDate"
          value={this.state.startDate}
          onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="endDate">End Date: </label>
          <input 
          type="date" 
          name="endDate" 
          id="endDate"
          value={this.state.endDate}
          onChange={this.handleInputChange} />
        </div>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default Education;