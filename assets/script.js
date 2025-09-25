// Menunggu seluruh halaman HTML dimuat sebelum menjalankan script
  document.addEventListener('DOMContentLoaded', function() {

    // --- 1. SETUP SEMUA ELEMENT ---
    // Semua elemen yang kita butuhkan kita panggil satu kali di sini.
    const navbar = document.querySelector('.navbar');
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const smoothScrollLinks = document.querySelectorAll('a.smooth-scroll');
    const backToTopBtn = document.getElementById('backToTopBtn');
    let lastScrollY = window.scrollY;

    // --- 2. FUNGSI SMOOTH SCROLL ---
    // Untuk semua link yang memiliki class .smooth-scroll
    if (smoothScrollLinks.length > 0) {
      smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          const targetId = this.getAttribute('href');
          if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              e.preventDefault();
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          }
        });
      });
    }

    // --- 3. FUNGSI NAVIGASI MOBILE ---
    // Logika untuk buka/tutup menu hamburger
    if (navbarToggle && navbarNav) {
  navbarToggle.addEventListener('click', (event) => {
    // Menghentikan event agar tidak konflik dengan fungsi lain
    event.stopPropagation(); 
    navbarNav.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Hanya hapus class jika menu sedang terbuka
      if (navbarNav.classList.contains('active')) {
        navbarNav.classList.remove('active');
      }
        });
      });
    }

    // --- 4. FUNGSI SAAT HALAMAN DI-SCROLL ---
    // Hanya ada SATU event listener untuk scroll untuk semua fungsi terkait scroll
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      // Logika untuk Tombol Back to Top
      if (backToTopBtn) {
        if (currentScrollY > 300) {
          backToTopBtn.classList.add('show');
        } else {
          backToTopBtn.classList.remove('show');
        }
      }

      // Logika untuk Auto-Hiding Navbar
      if (navbar) {
        // Memberi background pada navbar saat di-scroll
        if (currentScrollY > 50) {
          navbar.classList.add('navbar-scrolled');
        } else {
          navbar.classList.remove('navbar-scrolled');
        }
        
        // Sembunyikan/tampilkan navbar berdasarkan arah scroll
        if (currentScrollY < lastScrollY) {
          navbar.classList.remove('navbar-hidden'); // Scroll ke atas, tampilkan
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          navbar.classList.add('navbar-hidden'); // Scroll ke bawah, sembunyikan
        }
      }
      
      // Perbarui posisi scroll terakhir
      lastScrollY = currentScrollY;
    });

    // --- 5. FUNGSI KLIK TOMBOL BACK TO TOP ---
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

  });
