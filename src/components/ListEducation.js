import React from "react";

class ListEducation extends React.Component {
  
  render() { 
    return (
    <li>
      <div>{this.props.value.school}</div>
      <div>{this.props.value.degree}</div>
      <div>{this.props.value.startDate}</div>
      <div>{this.props.value.endDate}</div>
    </li>
    )
  }
}

export default ListEducation;