import "./intro.css";
import Me from "../../img/girl.png";

const Intro = () => {
  return (
    <div>
      <div className="i">
        <div className="i-left">
          <div className="i-left-warrper">
            <h2 className="i-intro">Hello My name is</h2>
            <h1 className="i-name">Laiba Afzal</h1>
            <div className="i-title">
              <div className="i-title-warrper">
                <div className="i-item">Web Developer</div>
                <div className="i-item">Photographer</div>
                <div className="i-item">Writer</div>
                <div className="i-item">Content creater</div>
                <div className="i-item">UX/UI Designer</div>
                <div className="i-item">SEO Specialist</div>
              </div>
            </div>
            <p className="i-desc">
              Dedicated and innovative front-end developer passionate about
              creating seamless, user-centric web experiences. Proficient in
              HTML, CSS, JavaScript, React, NodeJs, and BootStrap with expertise
              in responsive design and cross-browser compatibility. Passionate
              about creating engaging digital solutions. They are committed to
              staying abreast of emerging technologies and trends.
            </p>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-computer-mouse-12-667864.png"
              alt="mouse"
              className="i-scroll"
            />
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
