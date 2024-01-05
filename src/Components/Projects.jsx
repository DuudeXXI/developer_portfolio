import { useState } from "react";
import "../Style/Projects.scss";
// import image_one from "../Images/testing_image_one.JPG";
import Cards from './Projects_cards'
const Projects = () => {

  const [visible, setVisible] = useState(true)

  return (
    <>
      <div className="projects-container">
        <h1 id="projects-section">Projects</h1>
        <div className='cards-container' data-hidden={false}>
        <Cards/>
        </div>
      </div>
    </>
  );
};

export default Projects;
