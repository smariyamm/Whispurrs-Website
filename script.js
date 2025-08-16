const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');

        // Hide all content sections
        contents.forEach(c => c.classList.remove('active'));
        // Show content section corresponding to clicked tab
        const activeContent = document.getElementById(tab.dataset.tab);
        activeContent.classList.add('active');
    });
});
