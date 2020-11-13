import appActionsTypes from "./appActionstypes";

export const setDropDownState = (state) => ({
  type: appActionsTypes.SET_DROPDOWN_STATE,
  payload: state,
});

export const setSelectedCompany = (data) => ({
  type: appActionsTypes.SET_COMPANY,
  payload: data,
});
