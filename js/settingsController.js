import { settingsService } from "./settingsService.js";

export function initSettings() {
    synchronizeSettings();
    addSettingsListeners();
}

function synchronizeSettings() {

}

function addSettingsListeners() {
    const settingsDialog = document.querySelector('.settings-dialog');
    const themeRadios = settingsDialog.querySelectorAll('input[name="theme-setting"]');
    const incrementPerTapInput = settingsDialog.querySelector('input[type="number"]');
    const tapTypeRadios = settingsDialog.querySelectorAll('input[name="tap-type-setting"]');
    const decrementButtonRadios = settingsDialog.querySelectorAll('input[name="decrement-button-setting"]');

    themeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            applyTheme(radio.value);
        });
    });

    // adicionar outros listeners
}

function applyTheme(theme) {
    document.body.classList.toggle('darkmode', theme === 'dark');
}