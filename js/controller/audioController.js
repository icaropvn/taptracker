import { setAudioVolume, playButtonPressSound, playButtonReleaseSound, playTapSound } from '../service/audioService.js';
import { getSoundEffects } from './counterController.js';

const settingsButton = document.querySelector('.settings__button');
const countButton = document.querySelector('.counter__button');
const decrementButton = document.querySelector('.actions__decrement-button');
const resetButton = document.querySelector('.actions__reset-button');
const saveButton = document.querySelector('.actions__save-button');
const clearSaveButton = document.querySelector('.settings-dialog__clear-button');
const backButton = document.querySelector('.settings-dialog__back-button');

const buttons = [settingsButton, countButton, decrementButton, resetButton, saveButton, clearSaveButton, backButton];

const screenTapContainer = document.querySelector('.main-content__screen-tap-listener');

export function initAudioListeners() {
    buttons.forEach(button => {
        button.addEventListener('pointerdown', trigger => {
            if(!getSoundEffects())
                return;

            playButtonPressSound();
            const cursorId = trigger.pointerId;

            const releaseHandler = evt => {
                if(evt.pointerId === cursorId) {
                    playButtonReleaseSound();

                    document.removeEventListener('pointerup', releaseHandler);
                    document.removeEventListener('pointercancel', releaseHandler);
                }
            };

            document.addEventListener('pointerup', releaseHandler);
            document.addEventListener('pointercancel', releaseHandler);
        });
    });


    screenTapContainer.addEventListener('pointerdown', () => {
        if(!getSoundEffects())
                return;
        playTapSound();
    });
}
