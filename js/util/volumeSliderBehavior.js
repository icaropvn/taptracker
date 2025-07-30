const volumeSlider = document.querySelector('.settings-dialog__setting__volume-block__volume-slider');
const volumeOutput = document.querySelector('.settings-dialog__setting__volume-block__volume-output');

export function initVolumeListener() {
    volumeSlider.addEventListener('input', () => {
        volumeOutput.textContent = volumeSlider.value + '%';

        volumeSlider.style.background = 'linear-gradient(90deg, var(--color-audio-slider-track-on) ' + volumeSlider.value + '%,' + 'var(--color-audio-slider-background-on) ' + volumeSlider.value + '%)';
    });
}