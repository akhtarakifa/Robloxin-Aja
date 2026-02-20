document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
  const prevBtn = document.querySelector(".gallery-nav-prev");
  const nextBtn = document.querySelector(".gallery-nav-next");

  if (galleryItems.length !== 6 || !prevBtn || !nextBtn) {
    return;
  }

  const gallerySets = [
    [
      {
        image: "assets/galeri/galeri_1/galeri_1.1.webp",
        title: "Petualangan Sunset",
        description: "Momen indah di pantai Roblox",
        alt: "Galeri set 1 gambar 1",
      },
      {
        image: "assets/galeri/galeri_1/galeri_1.2.webp",
        title: "Hutan Gembala",
        description: "Pemandangan arus sungai",
        alt: "Galeri set 1 gambar 2",
      },
      {
        image: "assets/galeri/galeri_1/galeri_1.3.webp",
        title: "Goa Kegelapan",
        description: "Berburu orb",
        alt: "Galeri set 1 gambar 3",
      },
      {
        image: "assets/galeri/galeri_1/galeri_1.4.webp",
        title: "Heaven Conference",
        description: "Perjalanan ke Surga",
        alt: "Galeri set 1 gambar 4",
      },
      {
        image: "assets/galeri/galeri_1/galeri_1.5.webp",
        title: "FIre Camp",
        description: "Kemah di depan api unggun",
        alt: "Galeri set 1 gambar 5",
      },
      {
        image: "assets/galeri/galeri_1/galeri_1.6.webp",
        title: "Zona Air Terjun",
        description: "Pemandangan air terjun",
        alt: "Galeri set 1 gambar 6",
      },
    ],
    [
      {
        image: "assets/galeri/galeri_2/galeri_2.1.webp",
        title: "Tantangan Balapan",
        description: "Pembalap handal",
        alt: "Galeri set 2 gambar 1",
      },
      {
        image: "assets/galeri/galeri_2/galeri_2.2.webp",
        title: "Battle Royale",
        description: "Pertempuran antar pemain",
        alt: "Galeri set 2 gambar 2",
      },
      {
        image: "assets/galeri/galeri_2/galeri_2.3.webp",
        title: "Puncak Tertinggi",
        description: "Mendaki setinggi mungkin",
        alt: "Galeri set 2 gambar 3",
      },
      {
        image: "assets/galeri/galeri_2/galeri_2.4.webp",
        title: "Pengalaman Horror ",
        description: "Mengalahkan monster pemakan manusia",
        alt: "Galeri set 2 gambar 4",
      },
      {
        image: "assets/galeri/galeri_2/galeri_2.5.webp",
        title: "Kios Tengah Malam",
        description: "Hanya layani manusia",
        alt: "Galeri set 2 gambar 5",
      },
      {
        image: "assets/galeri/galeri_2/galeri_2.6.webp",
        title: "Desa Terbengkalai",
        description: "Petualangan Horror Indonesia",
        alt: "Galeri set 2 gambar 6",
      },
    ],
    [
      {
        image: "assets/galeri/galeri_3/galeri_3.1.webp",
        title: "Pendakian Terindah",
        description: "Pemandangan aurora borealis ",
        alt: "Galeri set 3 gambar 1",
      },
      {
        image: "assets/galeri/galeri_3/galeri_3.2.webp",
        title: "Skate Boarding",
        description: "Atraksi skate board",
        alt: "Galeri set 3 gambar 2",
      },
      {
        image: "assets/galeri/galeri_3/galeri_3.3.webp",
        title: "Kehidupan Dinosaurus",
        description: "Alam berjuta-juta tahun lalu",
        alt: "Galeri set 3 gambar 3",
      },
      {
        image: "assets/galeri/galeri_3/galeri_3.4.webp",
        title: "Lokomotif",
        description: "Menjadi masinis kereta",
        alt: "Galeri set 3 gambar 4",
      },
      {
        image: "assets/galeri/galeri_3/galeri_3.5.webp",
        title: "Hukum Alam",
        description: "Yang kuat yang menang",
        alt: "Galeri set 3 gambar 5",
      },
      {
        image: "assets/galeri/galeri_3/galeri_3.6.webp",
        title: "Perburuan",
        description: "Memburu untuk kesenangan",
        alt: "Galeri set 3 gambar 6",
      },
    ],
    [
      {
        image: "assets/galeri/galeri_4/galeri_4.1.webp",
        title: "Off Road",
        description: "Petualangan off road",
        alt: "Galeri set 4 gambar 1",
      },
      {
        image: "assets/galeri/galeri_4/galeri_4.2.webp",
        title: "Pendakian Terakhir",
        description: "Mendaki gunung angker",
        alt: "Galeri set 4 gambar 2",
      },
      {
        image: "assets/galeri/galeri_4/galeri_4.3.webp",
        title: "Terdampar di pulau",
        description: "Mencoba bertahan hidup",
        alt: "Galeri set 4 gambar 3",
      },
      {
        image: "assets/galeri/galeri_4/galeri_4.4.webp",
        title: "Zaman Purba",
        description: "Kehidupan manusia zaman purba",
        alt: "Galeri set 4 gambar 4",
      },
      {
        image: "assets/galeri/galeri_4/galeri_4.5.webp",
        title: "Perang Bajak Laut",
        description: "Perebutan harta karun",
        alt: "Galeri set 4 gambar 5",
      },
      {
        image: "assets/galeri/galeri_4/galeri_4.6.webp",
        title: "Perang Teknologi",
        description: "Bunuh semua musuh",
        alt: "Galeri set 4 gambar 6",
      },
    ],
  ];

  const cardRefs = galleryItems.map((item) => {
    const image = item.querySelector(".gallery-image img");
    const title = item.querySelector(".gallery-caption h4");
    const description = item.querySelector(".gallery-caption p");

    return { image, title, description };
  });

  const hasIncompleteCard = cardRefs.some(
    (card) => !card.image || !card.title || !card.description
  );

  if (hasIncompleteCard) {
    return;
  }

  let currentSetIndex = 0;

  function renderSet(index) {
    const selectedSet = gallerySets[index];

    cardRefs.forEach((card, itemIndex) => {
      const data = selectedSet[itemIndex];
      card.image.src = data.image;
      card.image.alt = data.alt;
      card.title.textContent = data.title;
      card.description.textContent = data.description;
    });
  }

  prevBtn.addEventListener("click", () => {
    currentSetIndex = (currentSetIndex - 1 + gallerySets.length) % gallerySets.length;
    renderSet(currentSetIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentSetIndex = (currentSetIndex + 1) % gallerySets.length;
    renderSet(currentSetIndex);
  });

  renderSet(currentSetIndex);
});
