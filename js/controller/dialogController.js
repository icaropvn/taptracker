const settingsButton = document.querySelector('.settings__button');
const settingsDialog = document.querySelector('.settings-dialog');
const settingsContainer = document.querySelector('.settings-dialog__settings');
const settingsDialogBackdrop = document.querySelector('.settings-dialog-backdrop');
const closeDialogButton = document.querySelector('.settings-dialog__back-button');
const closeDialogIcon = document.querySelector('.settings-dialog__header__close-icon');

export function initSettingsDialog() {
    settingsButton.addEventListener('click', () => {
        settingsDialog.show();
        settingsDialogBackdrop.style.display = 'block';
    });

    const closeInputs = [closeDialogButton, closeDialogIcon];

    closeInputs.forEach(input => {
        input.addEventListener('click', () => {
            settingsDialog.close();
            settingsDialogBackdrop.style.display = 'none';
            settingsContainer.scrollTop = 0;
        });
    });
}