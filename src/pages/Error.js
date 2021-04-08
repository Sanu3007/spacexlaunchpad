import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <p>sorry !! page not found</p>
        <button className="btn primary-btn">
          <Link to="/">back to Home</Link>
        </button>
      </div>
    </section>
  );
};

export default Error;
