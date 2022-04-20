import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personName: '',
      email: '',
      phone: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name; 

    this.setState({
      [name] : value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleForm(this.state);
  }
  
  render() {
    return (
      <form className="general" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="personName">Name: </label>
          <input 
          type="text" 
          name="personName" 
          id="personName"
          value={this.state.personName}
          onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input 
          type="email" 
          name="email" 
          id="email"
          value={this.state.email}
          onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input 
          type="tel" 
          name="phone" 
          id="phone"
          value={this.state.phone}
          onChange={this.handleInputChange} />
        </div>
        <input type="submit" value="Update" />
      </form>
    );
  }
}

export default General;