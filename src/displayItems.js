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

function displayNone(item) {
	const element = Array.from(document.querySelectorAll(`${item}`));

	element.forEach((dom) => {
		dom.classList.add("displayNone");
	});
}

function removeDisplayNone(item) {
	const element = Array.from(document.querySelectorAll(`${item}`));

	element.forEach((dom) => {
		dom.classList.remove("displayNone");
	});
}

function displayCurrentProject(projectArray, id) {
	const edit = document.getElementById("editProject");
	const title = document.getElementById("currentProject");
	const desc = document.getElementById("projectDesc");

	title.textContent = projectArray[id].name;
	desc.textContent = projectArray[id].desc;
	edit.style.visibility = "visible";
}
export {
	addVisibleClass,
	removeVisibleClass,
	displayNone,
	removeDisplayNone,
	displayCurrentProject,
};
