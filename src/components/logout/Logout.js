import React from "react";
import { useDispatch } from "react-redux";
import { setDropDownState } from "../../redux/app/appActions";
import "./logout.styles.css";

const Logout = () => {
  const dispatch = useDispatch();

  const closeDropDown = (state) => dispatch(setDropDownState(state));
  return (
    <section className="logout-section">
      <div className="logout-container">
        <div className="content mb-12" onClick={() => closeDropDown(false)}>
          <span className="material-icons">settings</span>
          <span className="ml-8">Settings</span>
        </div>
        <div className="content mb-12" onClick={() => closeDropDown(false)}>
          <span className="material-icons logout-btn">exit_to_app</span>
          <span className="ml-8 logout-btn">Log out</span>
        </div>
      </div>
    </section>
  );
};

export default Logout;
