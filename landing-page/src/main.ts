const closeMenu = document.getElementById("close-menu") as HTMLButtonElement | null;
const openMenu = document.getElementById("open-menu") as HTMLButtonElement | null;
const nav = document.getElementById("nav") as HTMLElement | null;
const overlay = document.getElementById("overlay") as HTMLElement | null;

if (openMenu && closeMenu && nav && overlay) {
  openMenu.addEventListener("click", (_e: MouseEvent) => {
    openMenu.classList.add("inactive");
    closeMenu.classList.add("active");

    closeMenu.classList.remove("inactive");
    openMenu.classList.remove("active");

    nav.classList.toggle("active");

    overlay.classList.toggle("overlay-active");
  });

  closeMenu.addEventListener("click", (_e: MouseEvent) => {
    openMenu.classList.add("active");
    closeMenu.classList.add("inactive");

    closeMenu.classList.remove("active");
    openMenu.classList.remove("inactive");

    nav.classList.toggle("active");
    overlay.classList.toggle("overlay-active");
  });

  overlay.addEventListener("click", (_e: MouseEvent) => {
    openMenu.classList.add("active");
    closeMenu.classList.add("inactive");

    closeMenu.classList.remove("active");
    openMenu.classList.remove("inactive");

    nav.classList.toggle("active");
    overlay.classList.toggle("overlay-active");
  });
}
