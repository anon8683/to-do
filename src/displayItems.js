// Adds visible class to our DOM element
function addVisibleClass(item) {
	const element = Array.from(document.querySelectorAll(`${item}`));

	element.forEach((dom) => {
		dom.classList.add("visible");
	});
}

// Removes visible class from our given (item) DOM element
function removeVisibleClass(item) {
	const element = Array.from(document.querySelectorAll(`${item}`));

	element.forEach((dom) => {
		dom.classList.remove("visible");
	});
}

function displayCurrentProject(id) {
	const title = document.getElementById("currentProject");
	const desc = document.getElementById("projectDesc");

	title.textContent = projects[id].name;
	desc.textContent = projects[id].desc;
}
export { addVisibleClass, removeVisibleClass, displayCurrentProject };
