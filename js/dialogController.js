const settingsButton = document.querySelector('.settings__button');
const settingsDialog = document.querySelector('.settings-dialog');
const settingsDialogBackdrop = document.querySelector('.settings-dialog-backdrop');
const closeDialogButton = document.querySelector('.settings-dialog__back-button');

export function initSettingsDialog() {
    settingsButton.addEventListener('click', () => {
        settingsDialog.show();
        settingsDialogBackdrop.style.display = 'block';
    });

    closeDialogButton.addEventListener('click', () => {
        settingsDialog.close();
        settingsDialogBackdrop.style.display = 'none';
    });
}