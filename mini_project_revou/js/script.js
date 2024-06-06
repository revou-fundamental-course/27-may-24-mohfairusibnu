// Slider
const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll("img");
let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide, index) => {
    if (index === n) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Ganti gambar setiap 3 detik

// Form Validasi
const form = document.getElementById("contact-form");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const tanggalLahir = document.getElementById("tanggal-lahir").value;
  const jenisKelamin = document.querySelector(
    'input[name="jenis-kelamin"]:checked'
  )?.value;
  const pesan = document.getElementById("pesan").value.trim();

  if (!nama || !tanggalLahir || !jenisKelamin || !pesan) {
    alert("Harap isi semua field terlebih dahulu!");
    return;
  }

  const formData = `
    Nama: ${nama}
    Tanggal Lahir: ${tanggalLahir}
    Jenis Kelamin: ${jenisKelamin}
    Pesan: ${pesan}
  `;

  output.textContent = formData;
  form.reset();
});
