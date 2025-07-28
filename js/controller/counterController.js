import { counter } from "../model/counter.js";
import { settingsService } from "../service/settingsService.js";
import { setAmountInterface, setThemeInterface, setIncrementPerTapInterface, setTapTypeInterface, setDecrementButtonInterface } from "../view/counterVisuals.js";

const amountDisplay = document.querySelector('.counter__amount');

function initCounterListeners() {
    const counterButton = document.querySelector('.counter__button');
    const decrementButton = document.querySelector('.actions__decrement-button');
    const resetButton = document.querySelector('.actions__reset-button');
    const saveButton = document.querySelector('.actions__save-button');

    counterButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    resetButton.addEventListener('click', reset);
    saveButton.addEventListener('click', save);
}

function increment() {
    counter.setCurrentAmount(counter.getCurrentAmount() + counter.getIncrementPerTap());
    amountDisplay.textContent = counter.getCurrentAmount();
}

function decrement() {
    if(counter.getCurrentAmount() > 0)
        counter.setCurrentAmount(counter.getCurrentAmount() - 1);

    console.log(counter.getCurrentAmount());
    amountDisplay.textContent = counter.getCurrentAmount();
}

function reset() {
    counter.setCurrentAmount(0);
    amountDisplay.textContent = counter.getCurrentAmount();
}

function save() {
    settingsService.saveAll(counter.getCurrentAmount(), counter.getTheme(), counter.getIncrementPerTap(), counter.getTapType(), counter.getDecrementButton());
}

// Counter getters and setters

function getAmount() {
    return counter.getCurrentAmount();
}
function setAmount(currentAmount) {
    counter.setCurrentAmount(currentAmount);
    setAmountInterface(currentAmount);
}

function getTheme() {
    return counter.getTheme();
}
function setTheme(theme) {
    counter.setTheme(theme);
    setThemeInterface(theme);
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
    counter.setDecrementButton(decrementButtonOn);
    setDecrementButtonInterface(decrementButtonOn);
}

export { initCounterListeners, getAmount, setAmount, getTheme, setTheme, getIncrementPerTap, setIncrementPerTap, getTapType, setTapType, getDecrementButton, setDecrementButton };