document.addEventListener('DOMContentLoaded', function() {
    const collapsibles = document.querySelectorAll('.collapsible');

    function toggleCollapse() {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'none' ? 'flex' : 'none';
        this.classList.toggle('active');
    }

    collapsibles.forEach(function(collapsible) {
        const heading = collapsible.querySelector('h3');
        const content = collapsible.querySelector('.content');
        content.style.display = 'none';
        heading.addEventListener('click', toggleCollapse);
    });
});