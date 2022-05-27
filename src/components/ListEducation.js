import React from "react";
import Education from "./Education";

class ListEducation extends React.Component {
constructor(props) {
  super(props);
  this.state = {isBeingEdited: false};

  this.handleEdit = this.handleEdit.bind(this);
  this.startEdit = this.startEdit.bind(this);
}

  handleEdit(education) {
    this.setState({isBeingEdited : false});
    this.props.onEditClicked(education, this.props.index);
  }

  startEdit(e) {
    this.setState({isBeingEdited : true});
  }
  
  render() { 
    const isBeingEdited = this.state.isBeingEdited;
    let el;
    if (!isBeingEdited) {
      el = (<li>
              <div>{this.props.value.school}</div>
              <div>{this.props.value.degree}</div>
              <div>{this.props.value.startDate}</div>
              <div>{this.props.value.endDate}</div>
              <button onClick={this.startEdit}>Edit</button>
            </li>)
    } else {
      el = (
        <li>
          <Education 
            handleForm={this.handleEdit}
            currentSchool={this.props.value.school}
            currentDegree={this.props.value.degree}
            currentStartDate={this.props.value.startDate}
            currentEndDate={this.props.value.endDate}
          />
        </li>
      )
    }
    return (
      <div>
        {el}
      </div>
    )
  }
}

export default ListEducation;