import { initCounterListeners } from "./controller/counterController.js";
import { initSettingsDialog } from "./controller/dialogController.js";
import { initSettings } from "./controller/settingsController.js";

document.addEventListener('DOMContentLoaded', () => {
    initCounterListeners();
    initSettingsDialog();
    initSettings();
});