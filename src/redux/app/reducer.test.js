import { Provider } from "react-redux";
import { createStore } from "redux";
import appReducer, { initialState } from "./appReducer";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Settings from "../../components/settings/Settings";
import rootReducer from "../rootReducer";
import appActionsTypes from "./appActionstypes";

afterEach(cleanup);

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

it("renders with redux", () => {
  const { getAllByTestId } = renderWithRedux(<Settings />);
  expect(getAllByTestId("main")).toBeTruthy;
});

describe("App reducer", () => {
  it("Should return default state", () => {
    const newState = appReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("should update the selected company", () => {
    const payload = {
      isOpen: false,
      selected: { id: 2, name: "test", info: "" },
    };

    const response = {
      ...initialState,
      isOpen: payload.isOpen,
      selectedCompany: payload.selected,
    };
    const newState = appReducer(undefined, {
      type: appActionsTypes.SET_COMPANY,
      payload,
    });
    expect(newState).toEqual(response);
  });

  it("should upadate dropdown state", () => {
    const response = {
      ...initialState,
      isOpen: true,
    };

    const newState = appReducer(undefined, {
      type: appActionsTypes.SET_DROPDOWN_STATE,
      payload: true,
    });
    expect(newState).toEqual(response);
  });
});
