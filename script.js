// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Get the elements for both sidebars
    const projectsToggleBtn = document.getElementById('projects-toggle-btn');
    const projectsCloseBtn = document.getElementById('projects-close-btn');
    const projectsSidebar = document.getElementById('projects-sidebar');

    const aboutToggleBtn = document.getElementById('about-toggle-btn');
    const aboutCloseBtn = document.getElementById('about-close-btn');
    const aboutSidebar = document.getElementById('about-sidebar');

    // --- UPDATED LOGIC FOR DYNAMIC Z-INDEX ---

    // Event listener for the "Projects" toggle button
    if (projectsToggleBtn) {
        projectsToggleBtn.addEventListener('click', function(event) {
            event.stopPropagation();
            
            // Bring the "Projects" sidebar to the top layer
            projectsSidebar.style.zIndex = 101;
            // Send the "About" sidebar to a lower layer
            aboutSidebar.style.zIndex = 100;

            // Toggle the sidebar's visibility
            projectsSidebar.classList.toggle('open');
            aboutSidebar.classList.remove('open'); 
        });
    }

    // Event listener for the "About" toggle button
    if (aboutToggleBtn) {
        aboutToggleBtn.addEventListener('click', function(event) {
            event.stopPropagation();
            
            // Bring the "About" sidebar to the top layer
            aboutSidebar.style.zIndex = 101;
            // Send the "Projects" sidebar to a lower layer
            projectsSidebar.style.zIndex = 100;

            // Toggle the sidebar's visibility
            aboutSidebar.classList.toggle('open');
            projectsSidebar.classList.remove('open');
        });
    }

    // --- NO CHANGES NEEDED BELOW THIS LINE ---

    // Event listeners for the 'x' close buttons
    if (projectsCloseBtn) {
        projectsCloseBtn.addEventListener('click', function(event) {
            event.stopPropagation();
            projectsSidebar.classList.remove('open');
        });
    }

    if (aboutCloseBtn) {
        aboutCloseBtn.addEventListener('click', function(event) {
            event.stopPropagation();
            aboutSidebar.classList.remove('open');
        });
    }

    // Close the sidebars if a click occurs outside of them
    window.addEventListener('click', function(event) {
        if (projectsSidebar.classList.contains('open') && !projectsSidebar.contains(event.target) && !projectsToggleBtn.contains(event.target)) {
            projectsSidebar.classList.remove('open');
        }
        if (aboutSidebar.classList.contains('open') && !aboutSidebar.contains(event.target) && !aboutToggleBtn.contains(event.target)) {
            aboutSidebar.classList.remove('open');
        }
    });
});
