export const settingsService = {
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
        return localStorage.getItem('Taptracker:decrementButton') || 'on';
    },
    setDecrementButton(decrementButton) {
        localStorage.setItem('Taptracker:decrementButton', decrementButton);
    }
}