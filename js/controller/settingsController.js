import { settingsService } from "../service/settingsService.js";
import { setAmount, setTheme, setIncrementPerTap, setTapType, setDecrementButton, setSoundEffects, setSoundEffectsVolume } from "../controller/counterController.js";
import { initVerificationListeners } from "../util/numericInputVerification.js";
import { initVolumeListener } from "../util/volumeSliderBehavior.js";
import { showNotification } from "../view/notificationAnimation.js";

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
    setDecrementButton(settingsService.getDecrementButton());
    setSoundEffects(settingsService.getSoundEffects());
    setSoundEffectsVolume(settingsService.getSoundEffectsVolume());
}

function addSettingsListeners() {
    const settingsDialog = document.querySelector('.settings-dialog');
    const themeRadios = settingsDialog.querySelectorAll('input[name="theme-setting"]');
    const incrementPerTapInput = settingsDialog.querySelector('.settings-dialog__setting__number-input');
    const tapTypeRadios = settingsDialog.querySelectorAll('input[name="tap-type-setting"]');
    const decrementButtonRadios = settingsDialog.querySelectorAll('input[name="decrement-button-setting"]');
    const soundEffectsRadios = settingsDialog.querySelectorAll('input[name="sound-effects-setting"]');
    const soundEffectsVolumeSlider = settingsDialog.querySelector('.settings-dialog__setting__volume-block__volume-slider');
    const clearSaveButton = settingsDialog.querySelector('.settings-dialog__clear-button');

    initVolumeListener();
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

    soundEffectsRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            setSoundEffects(radio.value === 'on' ? true : false);
        });
    });

    soundEffectsVolumeSlider.addEventListener('input', () => {
        setSoundEffectsVolume(soundEffectsVolumeSlider.value);
    });

    clearSaveButton.addEventListener('click', () => {
        settingsService.clearAll();
        showNotification('Browser save cleared. Ready to a fresh start.', 6000);
    });
}