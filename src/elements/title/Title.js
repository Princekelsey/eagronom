import React from "react";
import PropTypes from "prop-types";
import "./title.style.css";

const propTypes = {
  title: PropTypes.string.isRequired,
};

const Title = ({ title }) => {
  return <article className="title">{title}</article>;
};

Title.propTypes = propTypes;

export default Title;
