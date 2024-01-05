import "../Style/Hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <span>Hi, my name is</span>
          <h1>Vaidas Buslavičius</h1>
          <h1>Web Developer</h1>
          <p>
            I'm a Junior level developer. Currently, I'm focused on learning AWS
            Cloud tools. My package consists of: React.js / Node.js / Mysql.
          </p>
        </div>
        <div className="hero-image">
          <div className="personal-img-container">
            <div className="absolute-background"></div>
            <img
              src="https://images2.imgbox.com/43/2d/gbT8GF5A_o.png"
              alt="Profile for portfolio web page"
            />
          </div>
        </div>
      </div>
      <div className="hero-absolute-desktop"></div>
    </div>
  );
};

export default Hero;
