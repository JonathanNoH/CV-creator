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
  
  render() {
    return (
      <div className="App">
        <div>
          <General handleForm={this.handleGeneralForm}/>
          <Education handleForm={this.handleEducationForm}/>
          <Experience />
        </div>
        <Resume 
          general={this.state.general} 
          educationList={this.state.educationList}
          onItemEditClicked={this.handleEducationForm}
        />
      </div>
    );
  }
}

export default App;
