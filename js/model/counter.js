export const counter = {
    currentAmount: 0,
    theme: 'light',
    incrementPerTap: 1,
    tapType: 'button',
    decrementButton: true,

    getCurrentAmount() {
        return this.currentAmount;
    },
    setCurrentAmount(currentAmount) {
        this.currentAmount = currentAmount;
    },

    getTheme() {
        return this.theme;
    },
    setTheme(theme) {
        this.theme = theme;
    },

    getIncrementPerTap() {
        return this.incrementPerTap;
    },
    setIncrementPerTap(incrementPerTap) {
        this.incrementPerTap = incrementPerTap;
    },

    getTapType() {
        return this.tapType;
    },
    setTapType(tapType) {
        this.tapType = tapType;
    },

    getDecrementButton() {
        return this.decrementButton;
    },
    setDecrementButton(decrementButtonOn) {
        this.decrementButton = decrementButtonOn;
    }
}