import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import React from "react";

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <General />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
