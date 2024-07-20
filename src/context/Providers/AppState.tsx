// Imports
import React, { useContext, useReducer, Dispatch } from "react";
import { ACTIONS } from "../../utils/constants";

// Global State Types
type BadgeDataGlobalState = [
  appState: InitialState,
  dispatchAppState: Dispatch<Action>
];
interface InitialState {
  activeTabIndex?: number;
  showLoadingOverlay: boolean;
}
interface Action {
  type: string;
  payload: {
    clearState?: boolean;
    activeTabIndex?: number;
    showLoadingOverlay?: boolean;
  };
}

// Initial state values for app state
const initialState = {
  activeTabIndex: 4,
  showLoadingOverlay: false,
};

// Create app state context
const AppStateContext = React.createContext<BadgeDataGlobalState>([
  initialState,
  () => null,
]);

// Reducer to update app state context values
const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_ACTIVE_TAB_INDEX:
      return { ...state, ...action.payload };
    case ACTIONS.UPDATE_SHOW_LOADING_OVERLAY:
      return { ...state, ...action.payload };
    case ACTIONS.CLEAR_APP_STATE:
      if (!action.payload.clearState) {
        throw new Error("Need to pass clearState property as true");
      }
      return initialState;
    default:
      return state;
  }
};

/**
 * Provides app state to app
 */
export const AppStateProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [appState, dispatchAppState] = useReducer(reducer, initialState);

  return (
    <AppStateContext.Provider value={[appState, dispatchAppState]}>
      {children}
    </AppStateContext.Provider>
  );
};

/**
 * Hook that returns the Provider's value in a functional component.
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useAppState = () => useContext(AppStateContext);
