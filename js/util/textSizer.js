export const textSizer = {
    maxFontSize: '140px',

    setMaxFontSize(maxFontSize) {
        this.maxFontSize = maxFontSize;
    },

    fitTextIncrement() {
        const counterContainer = document.querySelector('.counter');
        const counter = document.querySelector('.counter__amount');
        let counterFontSize = Number.parseFloat(getComputedStyle(counter).fontSize);

        console.log(counterFontSize);

        console.log('while')
        while(counter.clientWidth > counterContainer.clientWidth) {
            console.log('fonte: ' + counterFontSize);
            console.log('tamanho do container: ' + counter.clientWidth);

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
        counter.style.fontSize = this.maxFontSize;
    }
}