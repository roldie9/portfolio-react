import React from "react"
import Thumbnail from './Thumbnail.js'; // Importing Thumbnail component
import './App.css'
 
function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="/Smorgas-Chord"
        image="http://twitter-image-url.jpg"
        title="Smorgas-Chord"
        category="Group Project"
      />
      <Thumbnail
        link="/"
        image="http://twitter-image-url.jpg"
        title="HomePage"
        category="Website"
      />
      <Thumbnail
        link="/twitter"
        image="http://twitter-image-url.jpg"
        title="Twitter"
        category="Mobile App"
      />
    </div>
  )
}
 
export default Projects;