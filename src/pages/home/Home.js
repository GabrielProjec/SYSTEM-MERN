import React from "react";
import "./Home.scss";

// ASSETS
import HomeImg from "../../assets/login.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="container hero">
        <div className="hero-text">
          <h2>Ultimate MERN Stack Authentication System</h2>
          <p>
            Learn and Master Authentication and Authorization using MERN Stack.
          </p>
          <p>
            Implement User Registration, Login, Password Reset, Social Login,
            User Permissions, Email Notifications etc.
          </p>
          <div className="hero-buttons --flex-start">
            <button className="--btn --btn-danger">Register</button>
            <button className="--btn --btn-primary">
              <Link to='/login'>Login</Link>
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={HomeImg} alt="Auth" />
        </div>
      </section>
    </div>
  );
};

export default Home;
