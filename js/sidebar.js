// Sidebar Toggle Function
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".sidebar-overlay");

  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");

  // Prevent body scroll when sidebar is open
  if (sidebar.classList.contains("active")) {
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

// Close sidebar on ESC key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar && sidebar.classList.contains("active")) {
      toggleSidebar();
    }
  }
});

window.addEventListener("load", updateFooterBackgroundLimit);
window.addEventListener("resize", updateFooterBackgroundLimit);
