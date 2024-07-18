// Import version number
import packageJson from "../../package.json";

// Global State Actions
interface ActionType {
  [key: string]: string;
}
const ACTIONS: ActionType = {
  CLEAR_APP_STATE: "CLEAR_APP_STATE",
  UPDATE_ACTIVE_TAB_INDEX: "UPDATE_ACTIVE_TAB_INDEX",
  UPDATE_SHOW_LOADING_OVERLAY: "UPDATE_SHOW_LOADING_OVERLAY",
};

// App Constants
interface AppConstants {
  VERSION: string;
  DEFAULT_THEME: "dark" | "light";
  DRAWER_WIDTH: number;
}
const APP_CONSTANTS: AppConstants = {
  VERSION: `v${packageJson.version}`,
  DEFAULT_THEME: "light",
  DRAWER_WIDTH: 265,
};

export { ACTIONS, APP_CONSTANTS };
