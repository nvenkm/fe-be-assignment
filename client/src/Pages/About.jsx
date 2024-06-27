import React from "react";
import PageWrapper from "../components/PageWrapper";
import "./About.css";

const About = () => {
  return (
    <div className="about-page-wrapper">
      <div className="page-heading-container">
        <h1 className="page-heading">About us</h1>
      </div>
      <section className="about-section">
        <div>
          <div className="section-heading">
            <h2 className="section-heading-text">
              We are an early starup that offer varous kind of services
            </h2>
          </div>
          <div className="section-body">
            <div className="about-card green">
              <img className="card-image" src="/image copy.png" alt="" />
              <h1 className="card-heading">Some heading</h1>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus delectus rerum voluptatem eum ipsam sunt magni, alias
                vitae maxime ess
              </p>
              <p>Learn More.</p>
            </div>
            <div className="about-card blue">
              <img className="card-image" src="/image copy 2.png" alt="" />
              <h1 className="card-heading">Some heading</h1>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus delectus rerum voluptatem eum ipsam sunt magni, alias
                vitae maxime ess
              </p>
              <p>Learn More.</p>
            </div>{" "}
            <div className="about-card red">
              <img className="card-image" src="/image copy 3.png" alt="" />
              <h1 className="card-heading">Some heading</h1>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus delectus rerum voluptatem eum ipsam sunt magni, alias
                vitae maxime ess
              </p>
              <p>Learn More.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
