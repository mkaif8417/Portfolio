import React, { useState, useEffect } from "react";
import "./InfoSection.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import iitLogo from "../assets/logo-imgs/iitimg.jpg";
import webDevCert from "../assets/logo-imgs/iit-certificate.jpg";
import designCert from "../assets/logo-imgs/graphic design certificate.jpg";

const InfoSection = () => {
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="info-wrapper">
      <h2 className="info-title" data-aos="fade-down">My Certificates</h2>

      <div className="info-block" data-aos="fade-up">
        <div className="info-image">
          <img src={iitLogo} alt="IIT Workshop" />
        </div>
        <div className="info-text">
          <h3>Web Development Workshop</h3>
          <p>
             I'm a passionate web developer who actively explores new technologies. In February 2024, I had the opportunity to attend a Web Development Workshop at <strong>IIT Hyderabad</strong>, where I learned from industry experts about real-world frontend and backend practices.
          </p>
          <button className="view-button" onClick={() => setModalImg(webDevCert)}>
            View Certificate
          </button>
        </div>
      </div>

      <div className="info-block reverse" data-aos="fade-up">
        <div className="info-image">
          <img src={designCert} alt="Graphic Design" />
        </div>
        <div className="info-text">
          <h3>Graphic Design Certification</h3>
          <p>
            Successfully completed a Graphic Design course under the Kalike Jothege Kaushalya program by Ethnus Consultancy Services during 2023–2024.
          </p>
        </div>
      </div>

      {modalImg && (
        <div className="modal" onClick={() => setModalImg(null)}>
          <div className="modal-content">
            <img src={modalImg} alt="Certificate Preview" />
          </div>
        </div>
      )}
    </section>
  );
};

export default InfoSection;
