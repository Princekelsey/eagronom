import { companies } from "../../assets/data";
import appActionsTypes from "./appActionstypes";

export const initialState = {
  companies: companies,
  isOpen: false,
  selectedCompany: companies[0],
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case appActionsTypes.SET_DROPDOWN_STATE:
      return {
        ...state,
        isOpen: payload,
      };

    case appActionsTypes.SET_COMPANY:
      return {
        ...state,
        isOpen: payload.isOpen,
        selectedCompany: payload.selected,
      };

    default:
      return state;
  }
};

export default appReducer;
