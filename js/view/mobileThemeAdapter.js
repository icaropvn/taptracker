export function setThemeUiElements(isDark) {
    const androidTag = document.querySelector('meta[name="theme-color"]');
    const iosTag =  document.querySelector('meta[name="mobile-web-app-status-bar-style"]');

    // androidTag.setAttribute('content', isDark ? '#222222' : '#FFFFFF');
    iosTag.setAttribute('content', isDark ? 'black-translucent' : 'default');
}