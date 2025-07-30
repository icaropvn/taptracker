export const settingsService = {
    getAmount() {
        return localStorage.getItem('Taptracker:amount') || '0'
    },
    setAmount(amount) {
        localStorage.setItem('Taptracker:amount', amount);
    },

    getTheme() {
        return localStorage.getItem('Taptracker:theme') || 'light';
    },
    setTheme(theme) {
        localStorage.setItem('Taptracker:theme', theme);
    },

    getIncrementPerTap() {
        return localStorage.getItem('Taptracker:incrementPerTap') || '1';
    },
    setIncrementPerTap(incrementPerTap) {
        localStorage.setItem('Taptracker:incrementPerTap', incrementPerTap);
    },

    getTapType() {
        return localStorage.getItem('Taptracker:tapType') || 'button';
    },
    setTapType(tapType) {
        localStorage.setItem('Taptracker:tapType', tapType);
    },

    getDecrementButton() {
        return localStorage.getItem('Taptracker:decrementButton') || 'true';
    },
    setDecrementButton(decrementButton) {
        localStorage.setItem('Taptracker:decrementButton', decrementButton);
    },

    getSoundEffects() {
        return localStorage.getItem('Taptracker:soundEffects') || 'true';
    },
    setSoundEffects(soundEffects) {
        localStorage.setItem('Taptracker:soundEffects', soundEffects);
    },

    getSoundEffectsVolume() {
        return localStorage.getItem('Taptracker:soundEffectsVolume') || '50';
    },
    setSoundEffectsVolume(soundEffectsVolume) {
        localStorage.setItem('Taptracker:soundEffectsVolume', soundEffectsVolume);
    },

    saveAll(amount, theme, incrementPerTap, tapType, decrementButton, soundEffects, soundEffectsVolume) {
        this.setAmount(amount);
        this.setTheme(theme);
        this.setIncrementPerTap(incrementPerTap);
        this.setTapType(tapType);
        this.setDecrementButton(decrementButton);
        this.setSoundEffects(soundEffects);
        this.setSoundEffectsVolume(soundEffectsVolume);
    },
    clearAll() {
        localStorage.removeItem('Taptracker:amount');
        localStorage.removeItem('Taptracker:theme');
        localStorage.removeItem('Taptracker:incrementPerTap');
        localStorage.removeItem('Taptracker:tapType');
        localStorage.removeItem('Taptracker:decrementButton');
        localStorage.removeItem('Taptracker:soundEffects');
        localStorage.removeItem('Taptracker:soundEffectsVolume');
    },
    isThereSave() {
        return (localStorage.getItem('Taptracker:amount') !== null && localStorage.getItem('Taptracker:theme') !== null && localStorage.getItem('Taptracker:incrementPerTap') !== null && localStorage.getItem('Taptracker:tapType') !== null && localStorage.getItem('Taptracker:decrementButton') !== null && localStorage.getItem('Taptracker:soundEffects') !== null && localStorage.getItem('Taptracker:soundEffectsVolume') !== null);
    }
}