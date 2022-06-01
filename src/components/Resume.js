import React from "react";
import ListEducation from "./ListEducation";
import ListExperience from "./ListExperience";
import uniqid from "uniqid";
import '../styles/resume.css';

const Resume = (props) => {

  const handleEducationEdit = (education, index) => {
    props.onEducationItemEditClicked(education, index);
  }

  const passUpEducationRemove = (index) => {
    props.onEducationRemove(index);
  }

  const handleExperienceEdit = (experience, index) => {
    props.onExperienceItemEditClicked(experience, index);
  }

  const passUpExperienceRemove = (index) => {
    props.onExperienceRemove(index);
  }

  return (
    <div className="resume">
      <div className='general'>
        {('personName' in props.general) && 
        <div>{props.general.personName}</div>
        }
        {('email' in props.general) && 
        <div>{props.general.email}</div>
        }
        {('phone' in props.general) && 
        <div>{props.general.phone}</div>
        }
      </div>
      <div className="education">
        <h2>Education</h2>
        {(props.educationList.length > 0) &&
          <ul>
            {props.educationList.map((education, index) => 
              <ListEducation 
                key={uniqid()} 
                index={index} 
                value={education} 
                onEditClicked={handleEducationEdit}
                onRemove={passUpEducationRemove}
              />
            )}
          </ul>
        }
      </div>
      <div className="experience">
        <h2>Experience</h2>
        {(props.experienceList.length > 0) &&
          <ul>
            {props.experienceList.map((experience, index) => 
              <ListExperience
                key={uniqid()}
                index={index}
                value={experience}
                onEditClicked={handleExperienceEdit}
                onRemove={passUpExperienceRemove}
              />
            )}
          </ul>
        }
      </div>
    </div>
  )
}

export default Resume;