const toggleSwitches = document.querySelectorAll('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        for (const toggleSwitch of toggleSwitches) {
            toggleSwitch.checked = true;
        }
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        for (const toggleSwitch of toggleSwitches) {
            toggleSwitch.checked = true;
        }
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        for (const toggleSwitch of toggleSwitches) {
            toggleSwitch.checked = false;
        }
    }
}

for (const toggleSwitch of toggleSwitches) {
    toggleSwitch.addEventListener('change', switchTheme, false);
}
