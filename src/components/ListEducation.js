import React, { useState } from "react";
import Education from "./Education";

const ListEducation = (props) => {
  const [isBeingEdited, setIsBeingEdited] = useState(false);

  const handleEdit = (education) => {
    setIsBeingEdited(false);
    props.onEditClicked(education, props.index);
  }

  const startEdit = () => {
    setIsBeingEdited(true);
  }

  const removeEducation = () => {
    props.onRemove(props.index);
  }
  
  if (!isBeingEdited) {
    return (
    <li>
      <div>
        <div>{props.value.school}</div>
        <div>{props.value.degree}</div>
        <div className="date">
          <span>{props.value.startDate} - </span>
          <span>{props.value.endDate}</span>
        </div>
        <div className="buttonHolder">
          <button onClick={startEdit}>Edit</button>
          <button onClick={removeEducation}>Remove</button>
        </div>
      </div>
    </li>)
  } else {
    return (
      <li>
        <div>
          <Education
            handleForm={handleEdit}
            currentSchool={props.value.school}
            currentDegree={props.value.degree}
            currentStartDate={props.value.startDate}
            currentEndDate={props.value.endDate}
          />
        </div>
      </li>
    )
  }
}

export default ListEducation;