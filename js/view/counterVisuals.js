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

function setSoundEffectsInterface(soundEffectsOn) {
    const radioInput = document.querySelector(`input[name="sound-effects-setting"][value="${soundEffectsOn === true ? 'on' : 'off'}"]`);
    const volumeSlider = document.querySelector('.settings-dialog__setting__volume-block__volume-slider');
    const volumeDescription = document.querySelector('.settings-dialog__setting__volume-block__title');
    const volumeOutput = document.querySelector('.settings-dialog__setting__volume-block__volume-output');

    if(!soundEffectsOn) {
        volumeSlider.disabled = true;
        volumeSlider.style.background = 'linear-gradient(90deg, var(--color-audio-slider-track-off) ' + volumeSlider.value + '%,' + 'var(--color-audio-slider-background-off) ' + volumeSlider.value + '%)';
    }
    else {
        volumeSlider.disabled = false;
        volumeSlider.style.background = 'linear-gradient(90deg, var(--color-audio-slider-track-on) ' + volumeSlider.value + '%,' + 'var(--color-audio-slider-background-on) ' + volumeSlider.value + '%)';
    }

    volumeSlider.classList.toggle('settings-dialog__setting__volume-block__volume-slider--off', soundEffectsOn === false);
    volumeDescription.classList.toggle('settings-dialog__setting__volume-block__title--off', soundEffectsOn === false);
    volumeOutput.classList.toggle('settings-dialog__setting__volume-block__volume-output--off', soundEffectsOn === false);
    radioInput.checked = true;
}

function setSoundEffectsVolumeInterface(soundEffectsVolume, soundEffectsOn) {
    const volumeSlider = document.querySelector('.settings-dialog__setting__volume-block__volume-slider');
    const volumeOutput = document.querySelector('.settings-dialog__setting__volume-block__volume-output');

    volumeSlider.value = soundEffectsVolume;
    volumeOutput.textContent = soundEffectsVolume + '%';

    if(!soundEffectsOn)
        volumeSlider.style.background = 'linear-gradient(90deg, var(--color-audio-slider-track-off) ' + volumeSlider.value + '%,' + 'var(--color-audio-slider-background-off) ' + volumeSlider.value + '%)';
    else
        volumeSlider.style.background = 'linear-gradient(90deg, var(--color-audio-slider-track-on) ' + volumeSlider.value + '%,' + 'var(--color-audio-slider-background-on) ' + volumeSlider.value + '%)';
}

export { setAmountInterface, setThemeInterface, setIncrementPerTapInterface, setTapTypeInterface, setDecrementButtonInterface, setSoundEffectsInterface, setSoundEffectsVolumeInterface };