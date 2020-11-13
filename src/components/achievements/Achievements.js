import React from "react";
import { useDispatch } from "react-redux";
import { setDropDownState } from "../../redux/app/appActions";
import "./achievements.styles.css";

const Achievements = () => {
  const dispatch = useDispatch();

  const closeDropDown = (state) => dispatch(setDropDownState(state));

  return (
    <div className="achievements" onClick={() => closeDropDown(false)}>
      <div className="achievements-container">
        <div className="content-container">
          <div className="content">
            <span className="material-icons item">school</span>
            <div className="ml-8 action-group">
              <span className="heading-text">Achievements</span>
              <span className="sub-text">3/11 done · 27%</span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-range"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
