function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        document.addEventListener('click', closeSidebarOutside);
    } else {
        document.removeEventListener('click', closeSidebarOutside);
    }
}

function closeSidebarOutside(event) {
    var sidebar = document.getElementById('sidebar');
    var menuIcon = document.querySelector('.menu-icon');

    if (!sidebar.contains(event.target) && event.target !== menuIcon) {
        sidebar.classList.remove('active');
        document.removeEventListener('click', closeSidebarOutside);
    }
}

function toggleMenu(id) {
    var submenu = document.getElementById(id);
    var arrow = submenu.previousElementSibling.querySelector('.arrow');
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    } else {
        submenu.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    }
}
