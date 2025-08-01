export function initViewportAdapterListeners() {
    window.addEventListener('load', updateViewportVars);
    window.visualViewport.addEventListener('resize', updateViewportVars);
}

function updateViewportVars() {
    const vh = window.visualViewport.height;
    const topOffset = window.visualViewport.offsetTop;

    document.documentElement.style.setProperty('--viewport-height', `${vh}px`);
    document.documentElement.style.setProperty('--top-ui', `${topOffset}px`);
}