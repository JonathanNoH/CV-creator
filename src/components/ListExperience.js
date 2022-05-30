import React from "react";
import Experience from "./Experience";

class ListExperience extends React.Component {
  constructor(props) {
    super(props)

    this.state={isBeingEdited:false}
    this.handleEdit = this.handleEdit.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.removeExperience = this.removeExperience.bind(this);
  }

  handleEdit(experience) {
    this.setState({isBeingEdited : false});
    this.props.onEditClicked(experience, this.props.index);
  }

  startEdit() {
    this.setState({isBeingEdited : true});
  }

  removeExperience() {
    this.props.onRemove(this.props.index);
  }

  render() {
    const isBeingEdited = this.state.isBeingEdited;
    let el;
    if(!isBeingEdited) {
      el = (<div>
        <div>{this.props.value.company}</div>
        <div>{this.props.value.position}</div>
        <div>{this.props.value.startDate}</div>
        <div>{this.props.value.endDate}</div>
        <div>{this.props.value.jobDescription}</div>
        <div className="buttonHolder">
          <button onClick={this.startEdit}>Edit</button>
          <button onClick={this.removeExperience}>Remove</button>
        </div>
      </div>)
    } else {
      el = (
        <div>
          <Experience 
            handleForm={this.handleEdit}
            currentCompany={this.props.value.company}
            currentPosition={this.props.value.position}
            currentJobDescription={this.props.value.jobDescription}
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

export default ListExperience;