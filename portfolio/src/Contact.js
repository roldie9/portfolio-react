import React, { Component } from "react";
 
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state ={value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

    render(){
      return (
        <div className= "wrapper">
          <div className="col-xs-12 col-sm-6 offset-sm-3">
            <div className="card">
            <form className="k-form-inline" onSubmit={this.handleSubmit}>  
              <label className="k-form-field" for="Name">
                <span>Name:</span>
                <input type="text" value={this.state.value}  onChange={this.handleChange} className="k-textbox" placeholder="John Smith" />
              </label>
              <br />
              <label className="k-form-field" for="EmailAddress">
                <span>Email:</span>
                <input type="email" value={this.state.value}  onChange={this.handleChange}  className="k-textbox" placeholder="name@example.com" />
              </label>
              <br />
              <label className="k-form-field" for="Message">
              <span>Message:</span>
                <textarea value={this.state.value}  onChange={this.handleChange} id="messageBox" rows="3" />
              </label>
              <br />
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
          </div>
        </div>
        
      )
      }
}
 
export default Contact;