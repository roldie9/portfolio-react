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
        <div class="container contact"> 
        <div class="row">
            <h2 class="col-12 border-bottom border-dark">Contact</h2>
        </div>
        <form class="form" onSubmit={this.handleSubmit}>
            <div class="form-group">
                <label for="Name">Name</label>
                <input type="name" class="form-control" id="nameGoesHere" placeholder="John Smith" value={this.state.value}  onChange={this.handleChange} />
            </div>
            <div class="form-group">
                <label for="EmailAddress">Email Address</label>
                <input type="email" class="form-control" id="emailAddressBox" placeholder="name@example.com" value={this.state.value}  onChange={this.handleChange} />
            </div>
            <div class="form-group">
                <label for="Message">Message</label>
                <textarea class="form-control" id="massageBox" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        </div>
        
      )
      }
}
 
export default Contact;