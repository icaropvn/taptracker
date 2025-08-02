import { counter } from "../model/counter.js";
import { settingsService } from "../service/settingsService.js";
import { setAmountInterface, setThemeInterface, setIncrementPerTapInterface, setTapTypeInterface, setDecrementButtonInterface, setSoundEffectsInterface, setSoundEffectsVolumeInterface } from "../view/counterVisuals.js";
import { showNotification } from "../view/notificationAnimation.js";
import { setAudioVolume } from "../service/audioService.js";
import { textSizer } from "../util/textSizer.js";
import { setThemeUiElements } from "../view/mobileThemeAdapter.js";

const amountDisplay = document.querySelector('.counter__amount');

function initCounterListeners() {
    const screenTapListener = document.querySelector('.main-content__screen-tap-listener');
    const counterButton = document.querySelector('.counter__button');
    const decrementButton = document.querySelector('.actions__decrement-button');
    const resetButton = document.querySelector('.actions__reset-button');
    const saveButton = document.querySelector('.actions__save-button');

    screenTapListener.addEventListener('click', increment);
    counterButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    resetButton.addEventListener('click', reset);
    saveButton.addEventListener('click', save);
}

function increment() {
    counter.setCurrentAmount(counter.getCurrentAmount() + counter.getIncrementPerTap());
    amountDisplay.textContent = counter.getCurrentAmount();
    textSizer.fitTextIncrement();
}

function decrement() {
    if(counter.getCurrentAmount() > 0)
        counter.setCurrentAmount(counter.getCurrentAmount() - 1);
    
    amountDisplay.textContent = counter.getCurrentAmount();
    textSizer.fitTextDecrement();
}

function reset() {
    counter.setCurrentAmount(0);
    amountDisplay.textContent = counter.getCurrentAmount();
    textSizer.resetTextSize();
}

function save() {
    settingsService.saveAll(counter.getCurrentAmount(), counter.getTheme(), counter.getIncrementPerTap(), counter.getTapType(), counter.getDecrementButton(), counter.getSoundEffects(), counter.getSoundEffectsVolume());
    showNotification('Your counter has been saved. You\'ll return to where you left off.', 6000);
}

// Counter getters and setters

function getAmount() {
    return counter.getCurrentAmount();
}
function setAmount(currentAmount) {
    counter.setCurrentAmount(currentAmount);
    setAmountInterface(currentAmount);
    textSizer.fitTextIncrement();
}

function getTheme() {
    return counter.getTheme();
}
function setTheme(theme) {
    counter.setTheme(theme);
    setThemeInterface(theme);
    setThemeUiElements(theme === 'dark');
}

function getIncrementPerTap() {
    return counter.getIncrementPerTap();
}
function setIncrementPerTap(incrementPerTap) {
    counter.setIncrementPerTap(incrementPerTap);
    setIncrementPerTapInterface(incrementPerTap);
}

function getTapType() {
    return counter.getTapType();
}
function setTapType(tapType) {
    counter.setTapType(tapType);
    setTapTypeInterface(tapType);
}

function getDecrementButton() {
    return counter.getDecrementButton();
}
function setDecrementButton(decrementButtonOn) {
    if(decrementButtonOn !== true && decrementButtonOn !== false)
        decrementButtonOn = decrementButtonOn === 'true';

    counter.setDecrementButton(decrementButtonOn);
    setDecrementButtonInterface(decrementButtonOn);
}

function getSoundEffects() {
    return counter.getSoundEffects();
}
function setSoundEffects(soundEffectsOn) {
    if(soundEffectsOn !== true && soundEffectsOn !== false)
        soundEffectsOn = soundEffectsOn === 'true';

    counter.setSoundEffects(soundEffectsOn);
    setSoundEffectsInterface(soundEffectsOn);
}

function getSoundEffectsVolume() {
    return counter.getSoundEffectsVolume();
}
function setSoundEffectsVolume(soundEffectsVolume) {
    counter.setSoundEffectsVolume(soundEffectsVolume);
    setSoundEffectsVolumeInterface(soundEffectsVolume, counter.getSoundEffects());
    setAudioVolume(Number.parseInt(soundEffectsVolume));
}

export { initCounterListeners, getAmount, setAmount, getTheme, setTheme, getIncrementPerTap, setIncrementPerTap, getTapType, setTapType, getDecrementButton, setDecrementButton, getSoundEffects, setSoundEffects, getSoundEffectsVolume, setSoundEffectsVolume };