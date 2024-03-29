import "../Style/About.scss";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About me</h1>
        <div className="about-text">
          <p>
            Open minded person in need of knowledge in Web development. I see
            future there and I want to be part of it with as much knowledge as I
            possibly can.<br></br>
            <br></br>
            I've finished <strong>Javascript</strong> with{" "}
            <strong>React.js</strong> courses at BIT.lt, I was one of the best
            students and I started with just a little knowledge in programming.
            From that point I understood that IT and especially - WorldWideWeb
            system is a thing I want to be involved in deeper.<br></br> Right
            now I feel capable of deploying <strong>REST API</strong> with{" "}
            <strong>Node.js</strong> attach and configure <strong>MySQL</strong>{" "}
            database, setup a fully working <strong>React.js</strong> Front-end
            application with custom libraries and deploy everything with{" "}
            <strong>AWS Cloud Service Provider</strong>
            <br></br>
            <br></br>I'm open for work on long-term and short-term
            relationships.
          </p>
        </div>
        <div className="about-skills">
          <div className="skill-one"></div>
          <div className="skill-two"></div>
          <div className="skill-three"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
