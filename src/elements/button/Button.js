import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./button.styles.css";

const propTypes = {
  tag: PropTypes.elementType,
  color: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
};

const defaultProps = {
  tag: "button",
  color: "",
  size: "",
  disabled: false,
};

const Button = ({ className, tag, color, size, disabled, ...props }) => {
  const classes = classNames(
    "button",
    color && `button-${color}`,
    size && `button-${size}`
  );

  const Component = tag;
  return <Component {...props} className={classes} disabled={disabled} />;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
