import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Header from "./components/Header";
import React from "react";
import './styles/reset.css';
import './styles/app.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      general: {},
      educationList: [],
      experienceList: [],
    }
  }

  handleGeneralForm = (general) => {
    this.setState({
      general
    })
  }

  handleEducationForm = (newEducation) => {
    const oldEducationList = this.state.educationList;
    this.setState({
      educationList : [...oldEducationList, newEducation],
    })
  }

  handleEducationEdit = (education, index) => {
    const oldEducationList = this.state.educationList;
    oldEducationList[index] = education;
    this.setState({
      educationList : oldEducationList
    })
  }

  handleEducationRemove = (index) => {
    const oldEducationList = this.state.educationList;
    oldEducationList.splice(index, 1);
    this.setState({
      educationList : oldEducationList
    })
  }
  
  handleExperienceForm = (newExperience) => {
    const oldExperienceList = this.state.experienceList;
    this.setState({
      experienceList : [...oldExperienceList, newExperience],
    })
  }

  handleExperienceEdit = (experience, index) => {
    const oldExperienceList = this.state.experienceList;
    oldExperienceList[index] = experience;
    this.setState({
      experienceList : oldExperienceList
    })
  }

  handleExperienceRemove = (index) => {
    const oldExperienceList = this.state.experienceList;
    oldExperienceList.splice(index, 1);
    this.setState({
      experienceList : oldExperienceList
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="inputForm">
          <General handleForm={this.handleGeneralForm}/>
          <Education 
            handleForm={this.handleEducationForm}
            currentSchool=''
            currentDegree=''
            currentStartDate=''
            currentEndDate=''
          />
          <Experience 
            handleForm={this.handleExperienceForm}
            currentCompany=''
            currentPosition=''
            currentJobDescription=''
            currentStartDate=''
            currentEndDate=''
          />
        </div>
        {(this.state.educationList.length > 0 ||
          this.state.experienceList.length > 0 || 
          Object.keys(this.state.general).length > 0) && 
          <Resume 
          general={this.state.general} 
          educationList={this.state.educationList}
          onEducationItemEditClicked={this.handleEducationEdit}
          onEducationRemove={this.handleEducationRemove}
          experienceList={this.state.experienceList}
          onExperienceItemEditClicked={this.handleExperienceEdit}
          onExperienceRemove={this.handleExperienceRemove}
        />}
      </div>
    );
  }
}

export default App;
