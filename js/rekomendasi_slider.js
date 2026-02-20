document.addEventListener("DOMContentLoaded", () => {

  const slides = [
    {
      image: "assets/rekomendasi/Fish_It.webp",
      html: `
        <p class="title">
          ❤️ VALENTINES UPDATE
          <br>+29 NEW FISH, NEW RAREST SECRET, LIMITED EVENT, SPECIAL LEADERBOARD AND MORE!
        </p>
        <p class="title">
          💦 NEW LAVA BASIN
          <br>
        </p>
        <p class="title">
          🌋 KOHANA VOLCANO EXPANSION
          <br>NEW 1 in 5M SECRET, +11 NEW FISH, REDESIGNED AREA, NEW QUESTS AND FREE REWARDS!
        </p>
        <p class="title">
          ✨ CRYSTAL DEPTHS
          <br>2 NEW SECRETS, NEW AREA WITH ADV. DIVING GEAR, +20 FISH AND NEW QUESTS
        </p>
        <p class="title">
          🍀 Collect from 1,000,000+ variations 🎣 Fish with your friends
          <br>Or just sail the seas and explore⛵
        </p>
        <p class="title">
          HOW DO I FISH?
          <br>• Click to charge up
          <br>• lick as fast as you can!
        </p>
        <p class="title">⭐ Remember to join the group and send feedback!</p>
        <p class="title">Inspired by Fisch and Fishing Simulator</p>
      `
    },
    {
      image: "assets/rekomendasi/Barbie_DreamHouse_Tycoon.webp",
      html: `
        <p class="title">
          The official Barbie DreamHouse Tycoon game is here!
          <br>Explore the Barbie universe and build your very own Barbie DreamHouse!
        </p>
        <p class="title">
          🏠 Create your own Barbie DreamHouse and visit your friends' DreamHouses!
          <br>👗 Customize your Avatar's makeup, hair, and outfit and collect incredible fashions
          <br>⭐ Help Barbie and Barbie by playing mini-games like cooking, fashion, and music challenges
          <br>🏃‍♂️ Venture outside the DreamHouse and discover the boutique, bakery, and more around town
        </p>
        <p class="title">Check back in for more updates including new careers and locations to build and explorer!</p>
        <p class="title">🎮 Available for PC, XBOX, Tablet, and Mobile</p>
        <p class="title">BARBIE™ and associated trademarks and trade dress are owned by, and used under license from, Mattel, ©2023 Mattel.
      `
    },
    {
      image: "assets/rekomendasi/Violence_District.webp",
      html: `
        <p class="title">
          ><>←GAME IS IN ALPHA, EXPECT BUGS AND CHANGES→<><
          <br>if you manage to clip any bugs, feel free to show us in #bug-reports in our server
        </p>
        <p class="title">
          Violence District is a casual asymmetrical horror game where 5 survivors have to survive against a killer.
          <br>Expect the worst, there aren't too many that get to live.
        </p>
        <p class="title">
          ><>←→<>←→<>←→<><
          <br>-SURVIVOR-
        </p>
        <p class="title">
          Cooperate with your team to do objectives for a chance to escape.
          <br>Make it out alive together.... or alone.
        </p>
        <p class="title">Pallets are a scarce and limited resource to stun the killer and escape the chase, use them wisely.</p>
        <p class="title">
          ><>←→<>←→<>←→<><
          <br>-KILLER-
        </p>
        <p class="title">
          Experience the thrill of the hunt, pursue down the ones who are alive.
          <br>Hunt them down and don't let them escape.
        </p>
      `
    },
    {
      image: "assets/rekomendasi/Mount_Grobogan.webp",
      html: `
        <p class="title">⛰️Mount Grobokan - The Mountain for Everyone!</p>
        <p class="title">
          Tired of games that leave your fingers frozen like Antarctica or gasping for air like Everest Simulator?
          <br>Fed up with climbing Rinjani or Semeru just to fall off at the top?
          <br>Or maybe... let's be real... you're just bad at climbing?
        </p>
        <p class="title">
          Don't worry. Mount Grobokan is here as the ultimate beginner-friendly mountain adventure.
          <br>Standing only 15 meters tall, this is the most humble mountain in Roblox-but don't underestimate it! Behind its "cute" height lies mini challenges, hidden secrets, and chaotic moments that'll have you laughing all the way to the top.
        </p>
        <p class="title">
          🎈Perfect for all players-from total noobs to heartbreak hikers..
          <br>🧗🏻Chill parkour, silly missions, and local NPCs who take nothing seriously.
          <br>🎁Collect "Grobokan's Legendary Rocks" to unlock bonus areas and hilarious items.
          <br>🐎Bonus: Race local goats to the summit-win or lose, they'll judge you.
        </p>
        <p class="title">Mount Grobokan - Because not all climbs need to be epic. Some just need to be fun. (WIP)</p>
      `
    },
  ];

  let index = 0;

  const img = document.querySelector(".game-image");
  const content = document.querySelector(".game-content");
  const prev = document.querySelector(".arrow-left");
  const next = document.querySelector(".arrow-right");
  const gameHero = document.querySelector('.game-hero');
  let firstSlideMeasured = false;

  function renderSlide() {
    img.src = slides[index].image;
    content.innerHTML = slides[index].html;
  }

  prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    renderSlide();
  });

  next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    renderSlide();
  });
  // Keep arrows from causing the card to lift when hovered: toggle a class
  // on the card so CSS can disable the lift effect.
  function lockCardOnArrowHover(el) {
    el.addEventListener('mouseenter', () => gameHero && gameHero.classList.add('no-lift'));
    el.addEventListener('mouseleave', () => gameHero && gameHero.classList.remove('no-lift'));
  }
  lockCardOnArrowHover(prev);
  lockCardOnArrowHover(next);

  // Measure the height of the first rendered slide and lock the card height
  // so all slides use the same height. We only measure once (first slide).
  function setFirstSlideHeight() {
    if (firstSlideMeasured || !gameHero) return;
    const measure = () => {
      const h = gameHero.offsetHeight;
      if (h && h > 0) {
        gameHero.style.minHeight = h + 'px';
        firstSlideMeasured = true;
      }
    };
    if (img.complete) {
      // image already loaded
      measure();
    } else {
      img.addEventListener('load', measure);
    }
    // extra fallback measurement after fonts/layout settle
    setTimeout(measure, 250);
  }

  renderSlide(); // slide pertama
  setFirstSlideHeight();
});
