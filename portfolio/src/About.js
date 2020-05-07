import React, { Component } from "react";

 
class About extends Component {
  render() {
    return (
      <div className="About">
      <div className="container info">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <img src={require("./img/portfolio_image.jpg")} />
          </div>
          <div className="links col-lg-8 col-sm-5">
            <h4 className="nameBreak">Aroldo Reyes </h4>
            <h6 className="description">Aspiring Full Stack Web Developer</h6>
            <ul>
              <li>
                <p><a href="https://www.linkedin.com/in/aroldo-reyes-421340186/">LinkedIn Page</a></p>
              </li>
              <li>
                <p><a href="https://github.com/roldie9">GitHub Profile </a></p>
              </li>
              <li>
                <p>
                  <a href="img/My CV.pdf">Resume</a>
                </p>
              </li>
              <li>
                <p>Email: aroldoreyes9@gmail.com </p>
              </li>
              <li>
                <p>Phone: (214)364-4189</p>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
      <br />
      <div className="container paragraph">
        <div className="row">
          <h2 className="col-12 border-bottom border-dark">About Me</h2>
        </div>
          <div className="row">
            <div className="col-lg-12">
              <p> Bonjour tout le monde! My full name is Aroldo Reyes, but I go by Aro. I'm a newcomer to the city of Austin, TX by way of New York City, NY.
                Since moving to Austin I have decided to switch career paths. For the last 10 years I have worked in retail sales in various roles, but I've always had a strong interest in coding and web development. I hope to one day create and/or improve apps and websites
                linked to the world of sports and sneaker/fashion as in there land my strongest passions and interests. 
                In addition to coding languages I want to learn more spoken languages. I'm evidently an English and Spanish speaker and I know some French.
                My life goal is know a total of <b>FIVE</b> languages! First things first, I'm looking forward to making the most of this class and achieving great things that'll facilitate my career and personal goals.
              </p>
            </div>
          </div> 
        </div>
      </div>
    );
  }
}
 
export default About;