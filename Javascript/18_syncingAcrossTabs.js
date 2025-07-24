/* by default if we open website in 2 different tabs then changes in one tab may be stored in local storage but may not effect other tab
though we can refresh other tab to apply changes but
lets be real who wants to do that every time we make changes
*/

const btn = document.getElementById('toggleMode');

function toggleTheme() {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark-mode');
    }else {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark-mode');
    };
};

btn.addEventListener('click', () => {
    // document.body.classList.toggle('dark-mode');
    toggleTheme()
});

function applyTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }else {
        document.body.classList.remove('dark-mode'); // tweaked code here
    };
};

applyTheme();

window.addEventListener('storage', (e) => {
    // console.log(e); 
    if (e.key === 'theme') {
        applyTheme(); // with this if dark mode is enabled then it works fine but it can sync turning back to light mode so we need to tweak applytheme
    };
});
