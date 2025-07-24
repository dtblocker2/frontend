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
    };
};

applyTheme();
