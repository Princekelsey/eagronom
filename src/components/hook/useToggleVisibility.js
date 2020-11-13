// eslint-disable-next-line
import React, { useState, useEffect, useRef } from "react";

const useToggleVisibility = (initialState, dispatchFunction) => {
  const [isComponentVisible, setIsComponentVisible] = useState(initialState);
  const ref = useRef(null);

  const handleHideDropdown = (event) => {
    if (event.key === "Escape" && isComponentVisible) {
      setIsComponentVisible(false);
      dispatchFunction(false);
    }
  };

  const handleClickOutside = (event) => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      isComponentVisible
    ) {
      setIsComponentVisible(false);
      dispatchFunction(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
    // eslint-disable-next-line
  }, [isComponentVisible]);

  return { ref, isComponentVisible, setIsComponentVisible };
};

export default useToggleVisibility;
