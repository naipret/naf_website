function showSection(sectionId, button) {
    // Ẩn tất cả các phần nội dung
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Hiển thị phần nội dung được chọn
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';

    // Xóa lớp 'active' từ tất cả các nút
    const buttons = document.querySelectorAll('.naf-button');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Thêm lớp 'active' vào nút được chọn
    button.classList.add('active');
}
