import { initCounterListeners } from "./controller/counterController.js";
import { initSettingsDialog } from "./controller/dialogController.js";
import { initSettings } from "./controller/settingsController.js";
import { initScreenTapAnimationListener } from "./view/screenTapAnimation.js";
import { initAudioListeners } from './controller/audioController.js'

document.addEventListener('DOMContentLoaded', () => {
    initAudioListeners();
    initCounterListeners();
    initSettingsDialog();
    initSettings();
    initScreenTapAnimationListener();
});