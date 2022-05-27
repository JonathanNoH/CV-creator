import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import React from "react";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      general: {},
      educationList: [],
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
  
  render() {
    return (
      <div className="App">
        <div>
          <General handleForm={this.handleGeneralForm}/>
          <Education 
            handleForm={this.handleEducationForm}
            currentSchool=''
            currentDegree=''
            currentStartDate=''
            currentEndDate=''
          />
          <Experience />
        </div>
        <Resume 
          general={this.state.general} 
          educationList={this.state.educationList}
          onItemEditClicked={this.handleEducationEdit}
        />
      </div>
    );
  }
}

export default App;
