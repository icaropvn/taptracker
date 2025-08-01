export const textSizer = {
    maxFontSize: 140,

    fitTextIncrement() {
        const counterContainer = document.querySelector('.counter');
        const counter = document.querySelector('.counter__amount');
        let counterFontSize = Number.parseFloat(getComputedStyle(counter).fontSize);

        while(counter.clientWidth > counterContainer.clientWidth) {
            counterFontSize--;
            counter.style.fontSize = counterFontSize + 'px';
        }
    },

    fitTextDecrement() {
        const counterContainer = document.querySelector('.counter');
        const counter = document.querySelector('.counter__amount');
        let counterFontSize = Number.parseFloat(getComputedStyle(counter).fontSize);

        while(counter.clientWidth < counterContainer.clientWidth && counterFontSize <= this.maxFontSize) {
            counterFontSize++;
            counter.style.fontSize = counterFontSize + 'px';
        }
    },

    resetTextSize() {
        const counter = document.querySelector('.counter__amount');
        counter.style.fontSize = this.maxFontSize + 'px';
    }
}