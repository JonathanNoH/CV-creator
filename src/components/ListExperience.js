import React, { useState } from "react";
import Experience from "./Experience";

const ListExperience = (props) => {

  const [isBeingEdited, setIsBeingEdited] = useState(false);

  const handleEdit = (experience) => {
    setIsBeingEdited(false);
    props.onEditClicked(experience, props.index);
  }

  const startEdit = () => {
    setIsBeingEdited(true);
  }

  const removeExperience = () => {
    props.onRemove(props.index);
  }

  if (!isBeingEdited) {
    return (
      <li>
        <div>
          <div>{props.value.company}</div>
          <div>{props.value.position}</div>
          <div className="date">
            <span>{props.value.startDate} - </span>
            <span>{props.value.endDate}</span>
          </div>
          <div>{props.value.jobDescription}</div>
          <div className="buttonHolder">
            <button onClick={startEdit}>Edit</button>
            <button onClick={removeExperience}>Remove</button>
          </div>
        </div>
      </li>
    )
  } else {
    return (
      <li>
        <div>
          <Experience
            handleForm={handleEdit}
            currentCompany={props.value.company}
            currentPosition={props.value.position}
            currentJobDescription={props.value.jobDescription}
            currentStartDate={props.value.startDate}
            currentEndDate={props.value.endDate}
          />
        </div>
      </li>
    )
  }
}

export default ListExperience;