import { initCounterListeners } from "./controller/counterController.js";
import { initSettingsDialog } from "./controller/dialogController.js";
import { initSettings } from "./controller/settingsController.js";
import { initScreenTapAnimationListener } from "./view/screenTapAnimation.js";
import { initAudioListeners } from './controller/audioController.js'
import { initViewportAdapterListeners } from "./view/viewportSizer.js";
import { initWindowListeners } from "./controller/windowController.js";

document.addEventListener('DOMContentLoaded', () => {
    initViewportAdapterListeners();
    initAudioListeners();
    initCounterListeners();
    initSettingsDialog();
    initSettings();
    initScreenTapAnimationListener();
    initWindowListeners();
});