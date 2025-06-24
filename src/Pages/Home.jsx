

import InfoSection from '../Components/Infosection';
import About from './About';
import Contact from './Contact';
import './Home.css';
import Projects from './Projects';


const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home-inner">
          <h3 className="home-name">Hi I'm</h3>
          <h3 className='name'>Mohd Kaif</h3>
          <p className="home-text">
            I’m a Full-stack developer who loves crafting clean, scalable web applications.
            My goal is to build solutions that offer both exceptional performance and a delightful user experience.
          </p>
          <a
            href="https://www.linkedin.com/in/mohd-kaif-5aba8b277/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-btn small-btn"
          >

            LinkedIn
          </a>

          <a
            href="https://github.com/mkaif8417"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-btn small-btn"
          >
            Github
          </a>
        </div>
      </section>
      <About />
    <Projects/>
    <InfoSection/>
    <Contact/>
    </>
  );
};

export default Home;
