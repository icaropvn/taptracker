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

// export function initAudioListeners() {
//     buttons.forEach(button => {
//         button.addEventListener('pointerdown', trigger => {
//             if(!getSoundEffects())
//                 return;

//             playButtonPressSound();
//             const cursorId = trigger.pointerId;

//             const releaseHandler = evt => {
//                 if(evt.pointerId === cursorId) {
//                     playButtonReleaseSound();

//                     document.removeEventListener('pointerup', releaseHandler);
//                     document.removeEventListener('pointercancel', releaseHandler);
//                 }
//             };

//             document.addEventListener('pointerup', releaseHandler);
//             document.addEventListener('pointercancel', releaseHandler);
//         });
//     });

//     buttons.forEach(button => {
//         button.addEventListener('touchstart', trigger => {
//             if(!getSoundEffects())
//                 return;

//             playButtonPressSound();
//             const touchId = trigger.pointerId;

//             const releaseHandler = evt => {
//                 if(evt.pointerId === touchId) {
//                     playButtonReleaseSound();

//                     document.removeEventListener('touchend', releaseHandler);
//                 }
//             };

//             document.addEventListener('touchend', releaseHandler);
//         });
//     });

//     screenTapContainer.addEventListener('pointerdown', () => {
//         if(!getSoundEffects())
//                 return;
//         playTapSound();
//     });

//     screenTapContainer.addEventListener('touchstart', () => {
//         if(!getSoundEffects())
//                 return;
//         playTapSound();
//     });
// }

export function initAudioListeners() {
  if (window.PointerEvent) {
    initPointerAudio();
  } else {
    initTouchAudio();
    initMouseAudio();
  }

  initScreenTap();
}

function initPointerAudio() {
  buttons.forEach(button => {
    button.addEventListener('pointerdown', e => {
      if (!getSoundEffects()) return;
      playButtonPressSound();
      const id = e.pointerId;

      const onRelease = ev => {
        if (ev.pointerId !== id) return;
        playButtonReleaseSound();
        document.removeEventListener('pointerup',   onRelease);
        document.removeEventListener('pointercancel', onRelease);
      };

      document.addEventListener('pointerup',   onRelease);
      document.addEventListener('pointercancel', onRelease);
    });
  });
}

function initTouchAudio() {
  buttons.forEach(button => {
    button.addEventListener('touchstart', e => {
      if (!getSoundEffects()) return;
      playButtonPressSound();

      const touchId = e.changedTouches[0].identifier;

      const onTouchEnd = ev => {
        for (let t of ev.changedTouches) {
          if (t.identifier === touchId) {
            playButtonReleaseSound();
            document.removeEventListener('touchend',   onTouchEnd);
            document.removeEventListener('touchcancel', onTouchEnd);
            break;
          }
        }
      };

      document.addEventListener('touchend',   onTouchEnd);
      document.addEventListener('touchcancel', onTouchEnd);
    }, { passive: true });
  });
}

function initMouseAudio() {
  buttons.forEach(button => {
    button.addEventListener('mousedown', e => {
      if (!getSoundEffects()) return;
      playButtonPressSound();

      const onMouseUp = () => {
        playButtonReleaseSound();
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mouseup', onMouseUp);
    });
  });
}

function initScreenTap() {
  const playTap = () => { if (getSoundEffects()) playTapSound(); };

  if (window.PointerEvent) {
    screenTapContainer.addEventListener('pointerdown', playTap);
  } else {
    screenTapContainer.addEventListener('touchstart',  playTap, { passive: true });
    screenTapContainer.addEventListener('mousedown',   playTap);
  }
}
