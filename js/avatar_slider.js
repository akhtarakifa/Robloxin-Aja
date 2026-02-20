document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    {
      name: "Banoe",
      mainImage: "assets/avatar & item/Banoe/Banoe_Avatar.webp",
      items: {
        hair: "assets/avatar & item/Banoe/Banoe_Hair.webp",
        head: "assets/avatar & item/Banoe/Banoe_Head.webp",
        top: "assets/avatar & item/Banoe/Banoe_Shirt.webp",
        bottom: "assets/avatar & item/Banoe/Banoe_Pants.webp",
      },
      description:
        "Avatar bergaya streetwear modern dengan tema monokrom hitam-putih yang kontras. Rambut dua warna yang unik, hoodie oversized putih beraksen garis hitam, dipadukan dengan celana kargo longgar bergaya sporty, dan sepatu sneakers senada. Tampilan simpel namun keren yang memancarkan aura futuristik dan stylish.",
    },
    {
      name: "Callista",
      mainImage: "assets/avatar & item/Callista/Callista_Avatar.webp",
      items: {
        hair: "assets/avatar & item/Callista/Callista_Hair.webp",
        head: "assets/avatar & item/Callista/Callista_Head.webp",
        top: "assets/avatar & item/Callista/Callista_Dress.webp",
        bottom: "assets/avatar & item/Callista/Callista_Skirt.webp",
      },
      description:
        "Avatar bergaya soft girl atau coquette dengan dominasi palet warna pastel merah muda. Rambut panjang bergelombang yang anggun, atasan manis dengan detail pita, serta bawahan ruffle yang dilengkapi leg warmers senada. Tampilan yang sangat feminin, kawaii, dan memberikan kesan lembut serta elegan.",
    },
    {
      name: "Jihan",
      mainImage: "assets/avatar & item/Jihan/Jihan_Avatar.webp",
      items: {
        hair: "assets/avatar & item/Jihan/Jihan_Hair.webp",
        head: "assets/avatar & item/Jihan/Jihan_Head.webp",
        top: "assets/avatar & item/Jihan/Jihan_Shirt.webp",
        bottom: "assets/avatar & item/Jihan/Jihan_Shorts.webp",
      },
      description:
        "Avatar bergaya grunge manis dengan sentuhan estetika Y2K. Rambut hitam messy dengan aksesoris penutup mata yang unik, atasan pola kotak-kotak ungu beraksen pita, celana pendek gelap, dan sepatu boots transparan berwarna ungu. Tampilan quirky yang memadukan kesan misterius sekaligus playful dan kekinian.",
    },
    {
      name: "Akhtar",
      mainImage: "assets/avatar & item/Akhtar/Akhtar_Avatar.webp",
      items: {
        hair: "assets/avatar & item/Akhtar/Akhtar_Hair.webp",
        head: "assets/avatar & item/Akhtar/Akhtar_Head.webp",
        top: "assets/avatar & item/Akhtar/Akhtar_Shirt.webp",
        bottom: "assets/avatar & item/Akhtar/Akhtar_Pants.webp",
      },
      description:
        "Avatar bergaya casual rocker klasik dengan nuansa maskulin. Rambut cokelat berantakan yang cool, jaket kulit hitam melapisi kaos teal bergambar gitar listrik, dipadukan dengan celana denim gelap berdetail rantai, dan sepatu sneakers hijau. Tampilan santai yang memancarkan aura percaya diri dan jiwa musisi yang edgy.",
    },
  ];

  const mainImg = document.getElementById("avatar-main-img");
  const desc = document.getElementById("avatar-desc");
  const itemHair = document.getElementById("avatar-item-hair");
  const itemHead = document.getElementById("avatar-item-head");
  const itemTop = document.getElementById("avatar-item-top");
  const itemBottom = document.getElementById("avatar-item-bottom");
  const prevBtn = document.querySelector(".avatar-arrow-left");
  const nextBtn = document.querySelector(".avatar-arrow-right");

  if (
    !mainImg ||
    !desc ||
    !itemHair ||
    !itemHead ||
    !itemTop ||
    !itemBottom ||
    !prevBtn ||
    !nextBtn
  ) {
    return;
  }

  let currentIndex = slides.findIndex((slide) => slide.name === "Banoe");
  if (currentIndex < 0) currentIndex = 0;

  function renderSlide(index) {
    const slide = slides[index];
    mainImg.src = slide.mainImage;
    mainImg.alt = "Avatar " + slide.name;

    itemHair.src = slide.items.hair;
    itemHair.alt = slide.name + " Hair";

    itemHead.src = slide.items.head;
    itemHead.alt = slide.name + " Head";

    itemTop.src = slide.items.top;
    itemTop.alt = slide.name + " Top";

    itemBottom.src = slide.items.bottom;
    itemBottom.alt = slide.name + " Bottom";

    desc.textContent = slide.description;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    renderSlide(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    renderSlide(currentIndex);
  });

  renderSlide(currentIndex);
});
