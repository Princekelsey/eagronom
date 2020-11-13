import React from "react";
import { useDispatch } from "react-redux";
import { setDropDownState } from "../../redux/app/appActions";
import "./quickactions.styles.css";

const QuickActions = () => {
  const dispatch = useDispatch();

  const closeDropDown = (state) => dispatch(setDropDownState(state));

  return (
    <section className="quickactions">
      <div className="quickactions-container">
        <div className="content mb-12" onClick={() => closeDropDown(false)}>
          <span className="material-icons">phone_iphone</span>
          <span className="ml-8">Get the mobile app</span>
        </div>
        <div className="content mb-12" onClick={() => closeDropDown(false)}>
          <span className="material-icons">people_outline</span>
          <span className="ml-8">Community</span>
        </div>
        <div className="content" onClick={() => closeDropDown(false)}>
          <span className="material-icons">book</span>
          <span className="ml-8">Knowledge base</span>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
