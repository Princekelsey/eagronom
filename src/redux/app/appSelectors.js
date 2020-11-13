import { createSelector } from "reselect";

const appStateSelector = (state) => state.appState;

export const selectSelectedCompany = createSelector(
  [appStateSelector],
  (appState) => appState.selectedCompany
);

export const selectDropDownState = createSelector(
  [appStateSelector],
  (appState) => appState.isOpen
);

export const selectCompanies = createSelector(
  [appStateSelector],
  (appState) => appState.companies
);
