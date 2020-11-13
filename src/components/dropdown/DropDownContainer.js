import React from "react";
import Title from "../../elements/title/Title";
import Achievements from "../achievements/Achievements";
import Companies from "../companies/Companies";
import Logout from "../logout/Logout";
import QuickActions from "../quickactions/QuickActions";
import "./dropdown.styles.css";

const DropDownContainer = () => {
  return (
    <section className="dropdown-container">
      <Title title="Your companies" />
      <Companies />
      <Achievements />
      <QuickActions />
      <Logout />
    </section>
  );
};

export default DropDownContainer;
