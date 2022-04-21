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

  handleEducationForm = (educationList) => {
    this.setState({
      educationList
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
        />
      </div>
    );
  }
}

export default App;
