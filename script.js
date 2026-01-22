const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// เปิด-ปิดเมนู
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ปิดเมนูเมื่อคลิกลิงก์ (ไปหน้าอื่นหรือส่วนอื่น)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});