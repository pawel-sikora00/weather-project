import React, { useState } from "react";
import "./Form.css";
import PropTypes from "prop-types";

const Form = ({ submitSearch }) => {
  const [location, setLocation] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    submitSearch(location);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Search for location"
        required
        className="input"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      ></input>
      <button onClick={onSubmit} type="submit" className="button">
        SEARCH
      </button>
    </form>
  );
};

Form.propTypes = {
  submitSearch: PropTypes.func.isRequired,
};

export default Form;
