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
        <button className="visibility-button" value={visible} onClick={() => setVisible((e) => !e)}>{ visible ? "Show Projects" : "Hide Projects"}</button>
        <div className='cards-container' data-hidden={visible}>
        <Cards/>
        </div>
      </div>
    </>
  );
};

export default Projects;
