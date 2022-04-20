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

  handleForm = ({personName, email, phone}) => {
    this.setState({
      personName,
      email,
      phone,
    })
  }
  
  render() {
    return (
      <div className="App">
        <div>
          <General handleForm={this.handleForm}/>
          <Education />
          <Experience />
        </div>
        <div>
          <div>{this.state.personName}</div>
          <div>{this.state.email}</div>
          <div>{this.state.phone}</div>
        </div>
      </div>
    );
  }
}

export default App;
