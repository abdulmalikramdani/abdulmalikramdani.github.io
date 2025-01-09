const navBarNav = document.querySelector(".navbar-nav");

//document di klik
document.querySelector("#menu").onclick = () => {
    navBarNav.classList.toggle("active");
}

//klik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector('#menu');
document.addEventListener('click',function(e){
    if(!menu.contains(e.target) && !navBarNav.contains(e.target)){
        navBarNav.classList.remove("active");
         
    }
})

const navLinks = document.querySelectorAll('.navbar-nav a');

// Fungsi untuk menambahkan kelas aktif
function setActiveLink(link) {
    // Hapus kelas aktif dari semua link
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Tambahkan kelas aktif pada link yang diklik
    link.classList.add('active');
}

// Menangani klik pada navbar
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Ambil ID dari href link dan scroll ke elemen target
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Scroll ke elemen yang sesuai
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Setel link aktif
        setActiveLink(this);
    });
});

// Fungsi untuk memastikan Home aktif pada saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Pastikan Home aktif ketika halaman pertama kali dimuat
    const homeLink = document.querySelector('.navbar-nav a[href="#Home"]');
    setActiveLink(homeLink);
});