document.addEventListener("DOMContentLoaded", function () {
	const hamburger = document.getElementById("hamburger");
	const navMenu = document.getElementById("navMenu");
	function toggleMenu() {
		navMenu.classList.toggle("active");
		const expanded = hamburger.getAttribute("aria-expanded") === "true";
		hamburger.setAttribute("aria-expanded", !expanded);
	}
	if (hamburger && navMenu) {
		hamburger.addEventListener("click", toggleMenu);
		// Hide nav on link click (mobile only)
		navMenu.querySelectorAll("a").forEach((link) => {
			link.addEventListener("click", () => {
				if (window.innerWidth <= 768) navMenu.classList.remove("active");
			});
		});
		// Ensure nav/hamburger visibility on resize
		function handleResize() {
			if (window.innerWidth > 768) {
				navMenu.classList.remove("active");
				hamburger.style.display = "none";
			} else {
				hamburger.style.display = "block";
			}
		}
		window.addEventListener("resize", handleResize);
		handleResize();
	}
});
