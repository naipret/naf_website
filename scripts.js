function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
}
