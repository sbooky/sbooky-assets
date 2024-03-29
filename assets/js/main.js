document.addEventListener("DOMContentLoaded", function () {
	const title = document.querySelector(".header__title");

	window.addEventListener("scroll", () => {
		if (window.scrollY > 40) {
			title.classList.add("header__title--hidden");
		} else {
			title.classList.remove("header__title--hidden");
		}
	});
});

const $card = document.querySelector("#test");
let bounds;

function rotateToMouse(e) {
	const mouseX = e.clientX;
	const mouseY = e.clientY;
	const leftX = mouseX - bounds.x;
	const topY = mouseY - bounds.y;
	const center = {
		x: leftX - bounds.width / 2,
		y: topY - bounds.height / 2,
	};
	const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

	// 	$card.style.transform = `
	//     scale3d(1.07, 1.07, 1.07)
	//     rotate3d(
	//       ${center.y / 100},
	//       ${-center.x / 100},
	//       0,
	//       ${Math.log(distance) * 2}deg
	//     )
	//   `;

	$card.querySelector(".shine").style.backgroundImage = `
	    radial-gradient(
	      circle at
	      ${center.x * 2 + bounds.width / 2}px
	      ${center.y * 2 + bounds.height / 2}px,
	      #ffffff55,
	      #0000000f
	    )
	  `;
}

$card.addEventListener("mouseenter", () => {
	bounds = $card.getBoundingClientRect();
	document.addEventListener("mousemove", rotateToMouse);
});

$card.addEventListener("mouseleave", () => {
	document.removeEventListener("mousemove", rotateToMouse);
	$card.style.transform = "";
	$card.style.background = "";
});
