import React from "react";

class Resume extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className='general'>
          {('personName' in this.props.general) && 
          <div>{this.props.general.personName}</div>
          }
          {('email' in this.props.general) && 
          <div>{this.props.general.email}</div>
          }
          {('phone' in this.props.general) && 
          <div>{this.props.general.phone}</div>
          }
        </div>
      </div>
    )
  }
}

export default Resume;