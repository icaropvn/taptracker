export function initVerificationListeners(numericInput) {
    numericInput.addEventListener('keydown', (input) => {
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];

        if(allowedKeys.includes(input.key))
            return;

        if(!/^[0-9]$/.test(input.key)) {
            input.preventDefault();
        }
    });
}

export function isNewIncrementValid(newIncrement) {
    console.log('dado: ' + newIncrement + ' tipo: ' + typeof newIncrement);

    if(newIncrement.includes('e' || newIncrement.includes('.')))
        return false;

    return true;
}