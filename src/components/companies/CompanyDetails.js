import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setSelectedCompany } from "../../redux/app/appActions";
import { selectSelectedCompany } from "../../redux/app/appSelectors";

const CompanyDetails = ({ name, id, info, lastItem, index }) => {
  const { selectedCompany } = useSelector(
    createStructuredSelector({
      selectedCompany: selectSelectedCompany,
    })
  );

  const dispatch = useDispatch();

  const setCompany = (data) => dispatch(setSelectedCompany(data));

  const handleSelection = (data) => {
    const {
      selected: { id },
    } = data;
    if (selectedCompany.id === id) return;

    setCompany(data);
  };

  return (
    <div
      className={
        selectedCompany.id === id
          ? "companies-contanier is-active"
          : "companies-contanier"
      }
      onClick={() =>
        handleSelection({ isOpen: false, selected: { id, name, info } })
      }
    >
      <div
        className={
          lastItem === index ? "companies-content is-last" : "companies-content"
        }
      >
        <div className="text-container">
          <span className="heading-text">
            <span>{name}</span>
            {selectedCompany.id === id && (
              <span className="material-icons">check</span>
            )}
          </span>
          {info && <span className="sub-text">{info}</span>}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
