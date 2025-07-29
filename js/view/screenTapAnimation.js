const screenTapListener = document.querySelector('.main-content__screen-tap-listener');

export function initScreenTapAnimationListener() {
    screenTapListener.addEventListener('click', (e) => {
        const rect = screenTapListener.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.classList.add('main-content__screen-tap-listener__click-ripple');
        ripple.style.left = x + 'px';
        ripple.style.top  = y + 'px';

        screenTapListener.appendChild(ripple);
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
}