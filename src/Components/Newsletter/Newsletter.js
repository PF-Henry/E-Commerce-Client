import React from "react";
import "./Newsletter.css";

export const Newsletter = () => {
  return (
    <div className="text-start text-uppercase">
      <label htmlFor="newsletterInput fs-5" className="form-label">
        Subscribe to our newsletter!
      </label>
      <form className="input-group">
        <input
          className="form-control"
          type="email"
          placeholder="Your mail..."
          id="newsletterInput"
        />
        <button className="btn btn-aqua nav-li-font" type="submit">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};
