import React from "react";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <PageWrapper>
      <div className="homepage">
        <div>
          <h1 className="main-heading">
            Welcome to{" "}
            <span
              style={{
                color: "#BB33FF",
              }}
            >
              Naveen
            </span>{" "}
            x{" "}
            <span
              style={{
                color: "#473bf0",
              }}
            >
              Comcare Enterprises
            </span>
          </h1>
        </div>
        <div>
          <Link to="/about" className="cta-button">
            Read About Us
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
