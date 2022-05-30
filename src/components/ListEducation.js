import React from "react";
import Education from "./Education";

class ListEducation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isBeingEdited: false};

    this.handleEdit = this.handleEdit.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
  }

  handleEdit(education) {
    this.setState({isBeingEdited : false});
    this.props.onEditClicked(education, this.props.index);
  }

  startEdit() {
    this.setState({isBeingEdited : true});
  }

  removeEducation() {
    this.props.onRemove(this.props.index);
  }
  
  render() { 
    const isBeingEdited = this.state.isBeingEdited;
    let el;
    if (!isBeingEdited) {
      el = (<div>
              <div>{this.props.value.school}</div>
              <div>{this.props.value.degree}</div>
              <div className="date">
                <span>{this.props.value.startDate} - </span>
                <span>{this.props.value.endDate}</span>
              </div>
              <div className="buttonHolder">
                <button onClick={this.startEdit}>Edit</button>
                <button onClick={this.removeEducation}>Remove</button>
              </div>
            </div>)
    } else {
      el = (
        <div>
          <Education 
            handleForm={this.handleEdit}
            currentSchool={this.props.value.school}
            currentDegree={this.props.value.degree}
            currentStartDate={this.props.value.startDate}
            currentEndDate={this.props.value.endDate}
          />
        </div>
      )
    }
    return (
      <li>
        {el}
      </li>
    )
  }
}

export default ListEducation;