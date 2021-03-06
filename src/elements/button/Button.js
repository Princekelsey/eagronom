import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./button.styles.css";

const propTypes = {
  tag: PropTypes.elementType,
  color: PropTypes.oneOf(["primary", "secondary", "danger"]),
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
    size && `button-${size}`,
    className
  );

  const Component = tag;
  return <Component {...props} className={classes} disabled={disabled} />;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
