import React from "react";
import ListEducation from "./ListEducation";

class Resume extends React.Component {

  render() {
    const educationList = this.props.educationList;

    return (
      <div>
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
          {(this.props.educationList.length > 0) &&
            <ul>
              {educationList.map((education) => 
                <ListEducation key={education.school + education.startDate} value={education}/>
              )}
            </ul>
          }
        </div>
      </div>
    )
  }
}

export default Resume;