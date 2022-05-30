import React from "react";
import ListEducation from "./ListEducation";
import ListExperience from "./ListExperience";
import uniqid from "uniqid";
import '../styles/resume.css';

class Resume extends React.Component {
  constructor(props) {
    super(props)

    this.handleEducationEdit = this.handleEducationEdit.bind(this);
    this.passUpEducationRemove = this.passUpEducationRemove.bind(this);
    this.handleExperienceEdit = this.handleExperienceEdit.bind(this);
    this.passUpExperienceRemove = this.passUpExperienceRemove.bind(this);
  }

  handleEducationEdit(education, index) {
    this.props.onEducationItemEditClicked(education, index);
  }

  passUpEducationRemove(index) {
    this.props.onEducationRemove(index);
  }

  handleExperienceEdit(experience, index) {
    this.props.onExperienceItemEditClicked(experience, index);
  }

  passUpExperienceRemove(index) {
    this.props.onExperienceRemove(index);
  }

  render() {
    const educationList = this.props.educationList;
    const experienceList = this.props.experienceList;

    return (
      <div className="resume">
        <div className='general'>
          {('personName' in this.props.general) && 
          <div>{this.props.general.personName}</div>
          }
          {('email' in this.props.general) && 
          <div>{this.props.general.email}</div>
          }
          {('phone' in this.props.general) && 
          <div>{this.props.general.phone}</div>
          }
        </div>
        <div className="education">
          <h2>Education</h2>
          {(this.props.educationList.length > 0) &&
            <ul>
              {educationList.map((education, index) => 
                <ListEducation 
                  key={uniqid()} 
                  index={index} 
                  value={education} 
                  onEditClicked={this.handleEducationEdit}
                  onRemove={this.passUpEducationRemove}
                />
              )}
            </ul>
          }
        </div>
        <div className="experience">
          <h2>Experience</h2>
          {(this.props.experienceList.length > 0) &&
            <ul>
              {experienceList.map((experience, index) => 
                <ListExperience
                  key={uniqid()}
                  index={index}
                  value={experience}
                  onEditClicked={this.handleExperienceEdit}
                  onRemove={this.passUpExperienceRemove}
                />
              )}
            </ul>
          }
        </div>
      </div>
    )
  }
}

export default Resume;