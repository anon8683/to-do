// Adds visible class to our DOMN element
function addVisibleClass(item) {
	const element = Array.from(document.querySelectorAll(`.${item}`));

	element.forEach((dom) => {
		dom.classList.add("visible");
	});
}

function removeVisibleClass(item) {
	const element = Array.from(document.querySelectorAll(`.${item}`));

	element.forEach((dom) => {
		dom.classList.remove("visible");
	});
}
export { addVisibleClass, removeVisibleClass };
