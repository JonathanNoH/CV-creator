import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Header from "./components/Header";
import React, { useState } from "react";
import './styles/reset.css';
import './styles/app.css';

const App = () => {

  const [general, setGeneral] = useState({});
  const handleGeneralForm = (newGeneral) => {
    setGeneral(newGeneral);
  }

  const [educationList, setEducationList] = useState([]);
  const addEducation = (education) => {
    setEducationList([...educationList, education]);
  }
  const handleEducationEdit = (education, index) => {
    setEducationList(educationList.map((element, i) => {
      if(i === index) {
        return education;
      }
      return element;
    }))
  }
  const handleEducationRemove = (index) => {
    setEducationList(educationList.filter((education, i) => i !== index));
  }
  
  const [experienceList, setExperienceList] = useState([]);
  const addExperience = (experience) => {
    setExperienceList([...experienceList, experience])
  }
  const handleExperienceEdit = (experience, index) => {
    setExperienceList(experienceList.map((element, i) => {
      if (i === index) {
        return experience;
      }
      return element;
    }))
  }
  const handleExperienceRemove = (index) => {
    setExperienceList(experienceList.filter((experience, i) => i !== index));
  }

  return (
    <div className="App">
      <Header />
      <div className="inputForm">
        <General handleForm={handleGeneralForm}/>
        <Education 
          handleForm={addEducation}
          currentSchool=''
          currentDegree=''
          currentStartDate=''
          currentEndDate=''
        />
        <Experience 
          handleForm={addExperience}
          currentCompany=''
          currentPosition=''
          currentJobDescription=''
          currentStartDate=''
          currentEndDate=''
        />
      </div>
      {(educationList.length > 0 ||
        experienceList.length > 0 || 
        Object.keys(general).length > 0) && 
        <Resume 
        general={general} 
        educationList={educationList}
        onEducationItemEditClicked={handleEducationEdit}
        onEducationRemove={handleEducationRemove}
        experienceList={experienceList}
        onExperienceItemEditClicked={handleExperienceEdit}
        onExperienceRemove={handleExperienceRemove}
      />}
    </div>
  );
}

export default App;
