import React from "react";

class Experience extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      company: this.props.currentCompany,
      position: this.props.currentPosition,
      jobDescription: this.props.currentJobDescription,
      startDate: this.props.currentStartDate,
      endDate: this.props.currentEndDate
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
    const newWork = this.state;
    this.setState({
      company: '',
      position: '',
      jobDescription: '',
      startDate: '',
      endDate: '',
    }, () => {
      this.props.handleForm(newWork);
    })
  }

  render() {
    return (
      <form action="" className="experienceInput" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="company">Company: </label>
          <input 
            type="text" 
            name="company" 
            id="company"
            value={this.state.company}
            onChange={this.handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="position">Position: </label>
          <input 
            type="text" 
            name="position" 
            id="position" 
            value={this.state.position}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="job-description">Job Description / Responsibilites: </label>
          <textarea 
            name="jobDescription" 
            id="job-description" 
            cols="40" 
            rows="5"
            value={this.state.jobDescription}
            onChange={this.handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="job-start-date">Start Date: </label>
          <input 
            type="date" 
            name="startDate" 
            id="job-start-date"
            value={this.state.startDate}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="job-end-date">End Date: </label>
          <input 
            type="date" 
            name="endDate" 
            id="job-end-date"
            value={this.state.endDate}
            onChange={this.handleInputChange}
          />
        </div>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default Experience;