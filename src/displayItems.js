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
	const add = document.getElementById("addTask");
	const title = document.getElementById("currentProject");
	const desc = document.getElementById("projectDesc");

	title.textContent = projectArray[id].name;
	desc.textContent = projectArray[id].desc;
	edit.style.visibility = "visible";
	add.style.visibility = "visible";
}

function displayTasks(project, projectIndex) {
	console.log(project);

	const container = document.getElementById("taskContainer");

	if (container) {
		container.remove();
		console.log("container removed");
	}
	const section = document.querySelector("section");
	const taskContainer = document.createElement("article");
	taskContainer.setAttribute("id", "taskContainer");

	section.append(taskContainer);

	const array = project.tasks;

	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		console.log(element);
		const date = element.date.toString().slice(4, 21);

		const newTask = document.createElement("div");
		newTask.setAttribute(`id`, `project_${projectIndex}_task_${index}`);
		newTask.classList.add("taskCard");
		// newTask.textContent = element.date;

		newTask.innerHTML = `
			<div class="taskDisplay" id="taskDisplayName">${element.title}</div>
			<div class="taskDisplay" id="taskDisplayDesc">${element.description}</div>
			<div class="taskDisplay" id="taskDisplayDate">${date}</div>
		`;

		taskContainer.append(newTask);
	}
}
export {
	addVisibleClass,
	removeVisibleClass,
	displayNone,
	removeDisplayNone,
	displayCurrentProject,
	displayTasks,
};
