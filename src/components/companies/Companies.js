import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCompanies } from "../../redux/app/appSelectors";
import "./companies.styles.css";
import CompanyDetails from "./CompanyDetails";

const Companies = () => {
  const { companies } = useSelector(
    createStructuredSelector({
      companies: selectCompanies,
    })
  );

  const lastIndex = companies.length - 1;

  return (
    <section className="companies">
      {companies.map((company, index) => (
        <CompanyDetails
          {...company}
          key={company.id}
          index={index}
          lastItem={lastIndex}
        />
      ))}
    </section>
  );
};

export default Companies;
