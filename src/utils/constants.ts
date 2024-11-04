// Import version number
import packageJson from "../../package.json";
// Images
import newLife from "../assets/images/3x4-new-life.png";
import strat from "../assets/images/3x4-ochancey06.jpg";
import prs from "../assets/images/3x4-ochancey01.jpg";
import hat from "../assets/images/3x4-ochancey04.jpg";
import color from "../assets/images/3x4-ochancey03.jpg";
import jazz from "../assets/images/3x4-gsg04.jpg";

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
  BORDER: string
}
const APP_CONSTANTS: AppConstants = {
  VERSION: `v${packageJson.version}`,
  DEFAULT_THEME: "light",
  DRAWER_WIDTH: 265,
  BORDER: "1px solid rgba(255, 255, 255, 0.23)"
};

// Constants
export const PHOTOS = [
  { img: jazz, title: "jazz" },
  { img: prs, title: "prs" },
  { img: strat, title: "strat" },
  { img: newLife, title: "new-life" },
  { img: hat, title: "hat" },
  { img: color, title: "WF-color" },
];


export { ACTIONS, APP_CONSTANTS };
