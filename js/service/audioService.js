// Dev mode area
const devMode = false; // change this value to swap dev mode
const pathSufix = '';

if(devMode)
    pathSufix = '../../';
// ----------------------------

const buttonPressSound = new Audio(`${pathSufix}sounds/press-button-sound.mp3`);
const buttonReleaseSound = new Audio(`${pathSufix}sounds/release-button-sound.mp3`);
const tapSound = new Audio(`${pathSufix}sounds/tap-sound.mp3`);

buttonPressSound.preload = 'auto';
buttonReleaseSound.preload = 'auto';
tapSound.preload = 'auto';

function setAudioVolume(volume) {
    volume /= 100;
    buttonPressSound.volume = volume;
    buttonReleaseSound.volume = volume;
    tapSound.volume = volume;
}

function playButtonPressSound() {
    const buttonPressSoundAux = buttonPressSound.cloneNode();
    buttonPressSoundAux.volume = buttonPressSound.volume;
    buttonPressSoundAux.currentTime = 0;
    buttonPressSoundAux.play();
}

function playButtonReleaseSound() {
    const buttonReleaseSoundAux = buttonReleaseSound.cloneNode();
    buttonReleaseSoundAux.volume = buttonReleaseSound.volume;
    buttonReleaseSoundAux.currentTime = 0;
    buttonReleaseSoundAux.play();
}

function playTapSound() {
    const tapSoundAux = tapSound.cloneNode();
    tapSoundAux.volume = tapSound.volume;
    tapSoundAux.currentTime = 0;
    tapSoundAux.play();
}

export { setAudioVolume, playButtonPressSound, playButtonReleaseSound, playTapSound }