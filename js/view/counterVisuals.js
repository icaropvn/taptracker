function setAmountInterface(amount) {
    const counterAmount = document.querySelector('.counter__amount');
    counterAmount.textContent = amount;
}

function setThemeInterface(theme) {
    let radioInput = document.querySelector(`input[name="theme-setting"][value="${theme}"]`);

    document.body.classList.toggle('darkmode', theme === 'dark');
    radioInput.checked = true;
}

function setIncrementPerTapInterface(incrementPerTap) {
    const incrementPerTapInput = document.querySelector('.settings-dialog__setting__number-input');
    incrementPerTapInput.value = incrementPerTap;
}

function setTapTypeInterface(tapType) {
    const screenTapListener = document.querySelector('.main-content__screen-tap-listener');
    const screenTapMessage = document.querySelector('.counter__screen-tap-message');
    const counterButton = document.querySelector('.counter__button');
    let radioInput = document.querySelector(`input[name="tap-type-setting"][value="${tapType}"]`);

    screenTapListener.classList.toggle('main-content__screen-tap-listener--active', tapType === 'screen');
    screenTapMessage.classList.toggle('counter__screen-tap-message--active', tapType === 'screen');
    counterButton.classList.toggle('counter__button--active', tapType === 'button');
    radioInput.checked = true;
}

function setDecrementButtonInterface(decrementButtonOn) {
    const decrementButton = document.querySelector('.actions__decrement-button');
    let radioInput = document.querySelector(`input[name="decrement-button-setting"][value="${decrementButtonOn === true ? 'on' : 'off'}"]`);

    decrementButton.classList.toggle('actions__decrement-button--active', decrementButtonOn === true);
    radioInput.checked = true;
}

export { setAmountInterface, setThemeInterface, setIncrementPerTapInterface, setTapTypeInterface, setDecrementButtonInterface };