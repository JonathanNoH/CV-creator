import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import React from "react";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      personName : '',
      email : '',
      phone : ''
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
        {('general' in this.state) &&
        <div>
          <div>{this.state.general.personName}</div>
          <div>{this.state.general.email}</div>
          <div>{this.state.general.phone}</div>
        </div>
        }
      </div>
    );
  }
}

export default App;
