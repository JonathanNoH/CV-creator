import React from "react";
import ListEducation from "./ListEducation";

class Resume extends React.Component {
  constructor(props) {
    super(props)

    this.handleItemEdit = this.handleItemEdit.bind(this);
    this.passUpRemove = this.passUpRemove.bind(this);
  }

  handleItemEdit(education, index) {
    this.props.onItemEditClicked(education, index);
  }

  passUpRemove(index) {
    this.props.onEducationRemove(index);
  }

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
              {educationList.map((education, index) => 
                <ListEducation 
                  key={education.school + education.startDate} 
                  index={index} 
                  value={education} 
                  onEditClicked={this.handleItemEdit}
                  onRemove={this.passUpRemove}
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