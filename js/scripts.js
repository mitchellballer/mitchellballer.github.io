/**
 * Toggle visibility of course content sections
 * @param {string} courseId - The ID of the course content to toggle
 */
function toggleCourse(courseId) {
    const content = document.getElementById(courseId);
    const header = content.previousElementSibling;
    const icon = header.querySelector('.toggle-icon');
    
    // Toggle the active class
    content.classList.toggle('active');
    
    // Change the icon
    if (content.classList.contains('active')) {
        icon.textContent = '−';  // Unicode minus sign
    } else {
        icon.textContent = '+';
    }
}

// Initialize: Close all sections when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const courseContents = document.querySelectorAll('.course-content');
    courseContents.forEach(content => {
        content.classList.remove('active');
    });
});