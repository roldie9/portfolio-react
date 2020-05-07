import React from "react"
 
function Contact(props) {
  return (
    <div>
      <div className="container contact" /> 
        <div className="row">
          <h2 className="col-12 border-bottom border-dark">Contact</h2>
        </div>
        <form>  
          <label for="Name">Name</label>
          <input type="name" className="form-control" id="nameGoesHere" placeholder="John Smith" />
              
          <label for="EmailAddress">Email Address</label>
          <input type="email" className="form-control" id="emailAddressBox" placeholder="name@example.com" />
              
          <label for="Message">Message</label>
          <textarea className="form-control" id="massageBox" rows="3"></textarea>
            
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>

  )
}
 
export default Contact;