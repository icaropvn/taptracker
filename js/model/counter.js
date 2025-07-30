export const counter = {
    currentAmount: 0,
    theme: 'light',
    incrementPerTap: 1,
    tapType: 'button',
    decrementButton: true,
    soundEffects: true,
    soundEffectsVolume: 50,

    getCurrentAmount() {
        return this.currentAmount;
    },
    setCurrentAmount(currentAmount) {
        this.currentAmount = Number.parseInt(currentAmount);
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
        this.incrementPerTap = Number.parseInt(incrementPerTap);
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
    },

    getSoundEffects() {
        return this.soundEffects;
    },
    setSoundEffects(soundEffectsOn) {
        this.soundEffects = soundEffectsOn;
    },

    getSoundEffectsVolume() {
        return this.soundEffectsVolume;
    },
    setSoundEffectsVolume(soundEffectsVolume) {
        this.soundEffectsVolume = Number.parseInt(soundEffectsVolume);
    }
}