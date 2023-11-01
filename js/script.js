document.addEventListener("DOMContentLoaded", function () {
    // Initialize Swiper
    var homeSlider = new Swiper(".homeslider", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var reviewsSlider = new Swiper(".reviews-slider", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    lightGallery(document.querySelector(".gallery .gallery-container"));

    // Particle.js initialization
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 160,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#ffffff",
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000",
                },
                polygon: {
                    nb_sides: 5,
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                },
            },
            opacity: {
                value: 1,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0,
                    sync: false,
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 4,
                    size_min: 0.3,
                    sync: false,
                },
            },
            line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    });
});
/* From beli*/
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Dapatkan nilai dari input dalam form
        const nama = document.getElementById('nama').value;
        const alamat = document.getElementById('alamat').value;
        const jumlah = document.getElementById('jumlah').value;
        const gambar = document.getElementById('gambar').files[0];
        const jenisKue = document.getElementById('jenis-kue').value;

        // Validasi bahwa semua input telah diisi
        if (!nama || !alamat || !jumlah || !gambar || !jenisKue) {
            alert('Harap isi semua field pada formulir.');
            return;
        }

        // Validasi jenis kue dan gambar
        if ((jenisKue === 'chocolate lava' && isChocolateLava(gambar)) ||
            (jenisKue === 'chocolate cream' && isChocolateCream(gambar))||
            (jenisKue === 'real strawberry cake' && isRealStrawberryCake(gambar))||
            (jenisKue === 'sacher torte cake' && isSacherTorteCake(gambar))) {
            // Jika berhasil, arahkan ke halaman proses_pembelian.html
            window.location.href = 'proses_pembelian.html';
        } else {
            // Jika gagal, arahkan kembali ke halaman form_beli.html
            window.location.href = 'form_beli.html';
        }
    });

    function isChocolateLava(gambar) {
        // Tambahkan logika untuk memeriksa apakah gambar sesuai dengan Chocolate Lava
        // Misalnya, Anda dapat memeriksa nama gambar atau karakteristik tertentu
        return (gambar.name === 'cake1.png');
    }

    function isChocolateCream(gambar) {
        // Tambahkan logika untuk memeriksa apakah gambar sesuai dengan Chocolate Cream
        // Misalnya, Anda dapat memeriksa nama gambar atau karakteristik tertentu
        return (gambar.name === 'cake2.png');
    }

    function isRealStrawberryCake(gambar) {
        // Tambahkan logika untuk memeriksa apakah gambar sesuai dengan Chocolate Lava
        // Misalnya, Anda dapat memeriksa nama gambar atau karakteristik tertentu
        return (gambar.name === '10.png');
    }

    function isSacherTorteCake(gambar) {
        // Tambahkan logika untuk memeriksa apakah gambar sesuai dengan Chocolate Cream
        // Misalnya, Anda dapat memeriksa nama gambar atau karakteristik tertentu
        return (gambar.name === '17.jpg');
    }
});

/* From Login*/
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah pengiriman form standar

        var username = "vicky";
        var password = "kiki230403";

        var inputUsername = document.querySelector("#username").value;
        var inputPassword = document.querySelector("#password").value;

        if (inputUsername === username && inputPassword === password) {
            window.location.href = "index.html"; // Arahkan ke halaman index.html
        } else {
            alert("Login gagal. Periksa kembali username dan password Anda.");
        }
    });
});