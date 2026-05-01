// Sidebar Toggle Function
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".sidebar-overlay");

  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

// Mobile Menu Toggle Function
function toggleMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-nav-menu");
  const overlay = document.querySelector(".mobile-menu-overlay");
  const hamburger = document.querySelector(".hamburger-menu");

  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  if (hamburger) {
    hamburger.classList.toggle("active");
  }

  if (mobileMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

function updateFooterBackgroundLimit() {
  const footer = document.querySelector(".footer");
  if (!footer) {
    return;
  }

  document.documentElement.style.setProperty(
    "--footer-height",
    `${footer.offsetHeight}px`,
  );
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const sidebar = document.querySelector(".sidebar");
    const mobileMenu = document.querySelector(".mobile-nav-menu");
    
    if (sidebar && sidebar.classList.contains("active")) {
      toggleSidebar();
    }
    
    if (mobileMenu && mobileMenu.classList.contains("active")) {
      toggleMobileMenu();
    }
  }
});

window.addEventListener("load", updateFooterBackgroundLimit);
window.addEventListener("resize", updateFooterBackgroundLimit);
