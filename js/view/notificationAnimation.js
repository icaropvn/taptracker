export function showNotification(text, duration) {
    if(isThereNotification())
        return;

    const notification = document.createElement('div');
    const notificationText = document.createElement('span');
    notification.className = 'notification';
    notificationText.className = 'notification__text';
    notificationText.textContent = text;
    notification.appendChild(notificationText);

    document.body.appendChild(notification);

    requestAnimationFrame(() => {
        notification.classList.add('notification--show');
    });

    setTimeout(() => hideNotification(notification), duration);
}

function isThereNotification() {
    // verificar se existe um elemento com a classe notification no documento e retornar true ou false
    return document.querySelector('.notification');
}

function hideNotification(notification) {
    notification.classList.remove('notification--show');

    notification.addEventListener('transitionend', () => {
        notification.remove();
    }, { once: true });
}