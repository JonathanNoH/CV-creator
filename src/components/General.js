import React, { Component } from "react";

class General extends Component {
  
  render() {
    return (
      <form className="general" action="">
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input type="tel" name="phone" id="phone" />
        </div>
        <input type="submit" value="Update" />
      </form>
    );
  }
}

export default General;