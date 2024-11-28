document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const themeToggle = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.src = './images/moon_2.svg';
    } else {
        themeToggle.src = './images/sun.svg';
    }
});
