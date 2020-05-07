import React, { Component } from "react"
import './App.css'
 
class Projects extends Component {
  render() {
    return (
        <div className="container portfolio">
            <div className="row">
              <h2 className="col-12 border-bottom border-dark">Portfolio</h2>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-6" style={{width: '18rem;'}}>
                  <img className="img-fluid" alt="SmorgasChord" src={require("./img/smorgaschord.png")} className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text"><a href="https://kkwoka.github.io/Smorgas-Chord/">Group Project:Smorgas-Chord</a></p>
                    <p className="card-text"><a href="https://github.com/verypaleale/Smorgas-Chord">GitHub Link</a></p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6" style={{width: '18rem;'}}>
                  <img className="img-fluid" alt="workdaySched" src={require("./img/workdayscheduler.png")} className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text"><a href="https://roldie9.github.io/work-day-scheduler-HW5/">Workday Scheduler</a></p>
                    <p className="card-text"><a href="https://github.com/roldie9/work-day-scheduler-HW5">GitHub Link</a></p>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-6" style={{width: '18rem;'}}>
                  <img className="img-fluid" alt="passwrodGen" src={require("./img/passwordgen.png")} className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text"><a href="https://roldie9.github.io/password-generator-hw3/">Password Generator</a></p>
                    <p className="card-text"><a href="https://github.com/roldie9/password-generator-hw3">GitHub Link</a></p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6" style={{width: '18rem;'}}>
                  <img className="img-fluid" alt="quizGen" src={require("./img/quiz.png")} className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text"><a href="https://roldie9.github.io/code-quiz-hw4/">Pop Quiz!</a></p>
                    <p className="card-text"><a href="https://github.com/roldie9/code-quiz-hw4">GitHub Link</a></p>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-6" style={{width: '18rem;'}}>
                  <img className="img-fluid" alt="emptyProject" src={require("./img/4.jpg")} className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text">Project no.5</p>
                  </div>
                </div>
            </div>
        </div>
    )
  }
}
 
export default Projects;