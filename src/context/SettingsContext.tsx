import { createContext } from "react";
import { Settings } from "../types/Settings";

const SettingsContext = createContext<Settings>({
    title: window.location.host,
    books: []

});
export default SettingsContext