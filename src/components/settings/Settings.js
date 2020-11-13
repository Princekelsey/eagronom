import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import Button from "../../elements/button/Button";
import { setDropDownState } from "../../redux/app/appActions";
import {
  selectDropDownState,
  selectSelectedCompany,
} from "../../redux/app/appSelectors";
import DropDownContainer from "../dropdown/DropDownContainer";
import useToggleVisibility from "../hook/useToggleVisibility";

const Settings = () => {
  const { isOpen, selectedCompany } = useSelector(
    createStructuredSelector({
      isOpen: selectDropDownState,
      selectedCompany: selectSelectedCompany,
    })
  );

  const dispatch = useDispatch();

  const toggle = (state) => dispatch(setDropDownState(state));

  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useToggleVisibility(isOpen, toggle);

  return (
    <main className="settings" ref={ref} data-testid="main">
      <Button
        // data-testid="btn-test"
        color="primary"
        onClick={() => {
          toggle(!isOpen);
          setIsComponentVisible(!isOpen);
        }}
      >
        {selectedCompany.name}
        {isOpen ? (
          <span className="material-icons ml-4">expand_less</span>
        ) : (
          <span className="material-icons ml-4">expand_more</span>
        )}
      </Button>
      {isOpen && isComponentVisible ? <DropDownContainer /> : null}
    </main>
  );
};

export default Settings;
