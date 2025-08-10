import { textSizer } from "../util/textSizer.js";

const smallVerticalMediaObj = window.matchMedia('screen and (orientation: portrait) and (height <= 1000px)');
const hugeVerticalMediaObj = window.matchMedia('screen and (orientation: portrait) and (height > 1000px)');
const smallHorizontalMediaObj = window.matchMedia('screen and (orientation: landscape) and (width <= 2000px)');
const hugeHorizontalMediaObj = window.matchMedia('screen and (orientation: landscape) and (width > 2000px)');

export function initWindowListeners() {
    smallVerticalMediaObj.addEventListener('change', (e) => {
        if(e.matches) {
            textSizer.setMaxFontSize('140px');
        }
    })

    hugeVerticalMediaObj.addEventListener('change', (e) => {
        if(e.matches) {
            textSizer.setMaxFontSize('15vh');
        }
    })

    smallHorizontalMediaObj.addEventListener('change', (e) => {
        if(e.matches) {
            textSizer.setMaxFontSize('9vw');
        }
    })

    hugeHorizontalMediaObj.addEventListener('change', (e) => {
        if(e.matches) {
            textSizer.setMaxFontSize('9vw');
        }
    })
}