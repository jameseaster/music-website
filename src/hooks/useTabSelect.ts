// Imports
import { ACTIONS } from "../utils/constants";
import { useAppState } from "../context/Providers/AppState";

/**
 * Selects the tab index from drawer for app navigation
 */
export const useTabSelect = () => {
  // Global State
  const [, dispatchAppState] = useAppState();

  // Navigates to tabIndex
  const toTab = (tabIndex: number) => {
    dispatchAppState({
      type: ACTIONS.UPDATE_ACTIVE_TAB_INDEX,
      payload: { activeTabIndex: tabIndex },
    });
  };

  return { toTab };
};
