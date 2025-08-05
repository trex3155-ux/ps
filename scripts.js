document.addEventListener("DOMContentLoaded", function () {
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove "active" class from all sidebar items
            sidebarItems.forEach(i => i.classList.remove('active'));
            
            // Add "active" class to the clicked item
            item.classList.add('active');
        });
    });
});
