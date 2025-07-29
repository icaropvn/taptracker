import { settingsService } from "../service/settingsService.js";
import { setAmount, setTheme, setIncrementPerTap, setTapType, setDecrementButton, printCounter } from "../controller/counterController.js";
import { initVerificationListeners } from "../util/numericInputVerification.js";

export function initSettings() {
    synchronizeSettings();
    addSettingsListeners();
}

function synchronizeSettings() {
    if(!settingsService.isThereSave())
        return;

    setAmount(settingsService.getAmount());
    setTheme(settingsService.getTheme());
    setIncrementPerTap(settingsService.getIncrementPerTap());
    setTapType(settingsService.getTapType());
    setDecrementButton(settingsService.getDecrementButton() === 'true');
}

function addSettingsListeners() {
    const settingsDialog = document.querySelector('.settings-dialog');
    const themeRadios = settingsDialog.querySelectorAll('input[name="theme-setting"]');
    const incrementPerTapInput = settingsDialog.querySelector('.settings-dialog__setting__number-input');
    const tapTypeRadios = settingsDialog.querySelectorAll('input[name="tap-type-setting"]');
    const decrementButtonRadios = settingsDialog.querySelectorAll('input[name="decrement-button-setting"]');
    const clearSaveButton = settingsDialog.querySelector('.settings-dialog__clear-button');

    initVerificationListeners(incrementPerTapInput);

    themeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            setTheme(radio.value);
        });
    });

    incrementPerTapInput.addEventListener('change', () => {
        let newIncrement = Number.parseInt(incrementPerTapInput.value);
        if(isNaN(newIncrement))
            newIncrement = 1;
        setIncrementPerTap(newIncrement);
    });

    tapTypeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            setTapType(radio.value);
        });
    });

    decrementButtonRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            setDecrementButton(radio.value === 'on' ? true : false);
        });
    });

    clearSaveButton.addEventListener('click', () => {
        settingsService.clearAll();
    });
}