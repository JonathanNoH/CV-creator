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
          <Experience />
        </div>
        <Resume 
          general={this.state.general} 
          educationList={this.state.educationList}
          onItemEditClicked={this.handleEducationEdit}
          onEducationRemove={this.handleEducationRemove}
        />
      </div>
    );
  }
}

export default App;
