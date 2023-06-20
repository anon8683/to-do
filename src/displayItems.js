import { el } from "date-fns/locale";
import { getCurrentProject } from "./addProject";
import { adjustStorage } from "./localStorage";

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
	const container = document.getElementById("taskContainer");

	if (container) {
		container.remove();
	}
	const section = document.querySelector("section");
	const taskContainer = document.createElement("article");
	taskContainer.setAttribute("id", "taskContainer");

	section.append(taskContainer);

	const array = project.tasks;

	for (let index = 0; index < array.length; index++) {
		const element = array[index];

		if (typeof element.date === "string") {
			element.date = new Date(element.date);
		}

		const date = element.date.toString().slice(4, 21);

		const newTask = document.createElement("div");
		newTask.setAttribute(`id`, `project_${projectIndex}_task_${index}`);
		newTask.classList.add("taskCard");

		newTask.innerHTML = `
		<div class="taskJoin">
			<div class="taskNameAndButton">
				<button id="showMore${index}" class="showButton" onclick="showMore(this.id)">+</button>
				<div class="taskDisplay" id="taskDisplayName">${element.title}</div>
			</div>
			<div class="taskDisplay desc" id="taskDisplayDesc ${index}">${element.description}</div>
		</div>
		<div class="taskComplete">
				<div class="taskDisplay" id="taskDisplayDate">${date}</div>
				<input type="checkbox" name="complete" id="complete${index}" onclick="completeTask(this.id)">
		</div>
		`;

		taskContainer.append(newTask);

		if (element.completed === true) {
			// const completeBox = document.getElementById(`complete${index}`);
			// console.log(completeBox);
			// completeBox.click();

			completeTask(`complete${index}`);
			const checkbox = document.getElementById(`complete${index}`);
			checkbox.setAttribute("checked", "");
		}
	}
}
function showMore(id) {
	const buttonClicked = document.getElementById(`${id}`);
	const index = id.slice(-1);

	const element = document.getElementById(`taskDisplayDesc ${index}`);
	element.style.display = "block";
	buttonClicked.textContent = "-";
	buttonClicked.setAttribute("onclick", "showLess(this.id)");
}

function showLess(id) {
	const buttonClicked = document.getElementById(`${id}`);
	const index = id.slice(-1);

	const element = document.getElementById(`taskDisplayDesc ${index}`);
	element.style.display = "none";

	buttonClicked.textContent = "+";
	buttonClicked.setAttribute("onclick", "showMore(this.id)");
}

function completeTask(id) {
	const index = id.slice(-1);
	const projectIndex = getCurrentProject();
	const checkbox = document.getElementById(`${id}`);
	const cardToChange = document.getElementById(
		`project_${projectIndex}_task_${index}`
	);
	cardToChange.style.textDecoration = "line-through";
	checkbox.setAttribute("onclick", "unCompleteTask(this.id)");

	projectArray[projectIndex].tasks[index].completed = true;
	adjustStorage(projectArray);

	// remove from local storage
}

function unCompleteTask(id) {
	const index = id.slice(-1);
	const projectIndex = getCurrentProject();
	const checkbox = document.getElementById(`${id}`);
	const cardToChange = document.getElementById(
		`project_${projectIndex}_task_${index}`
	);
	cardToChange.style.textDecoration = "none";
	checkbox.setAttribute("onclick", "completeTask(this.id)");

	projectArray[projectIndex].tasks[index].completed = false;
	adjustStorage(projectArray);
}

window.unCompleteTask = unCompleteTask;
window.completeTask = completeTask;
window.showMore = showMore;
window.showLess = showLess;

export {
	addVisibleClass,
	removeVisibleClass,
	displayNone,
	removeDisplayNone,
	displayCurrentProject,
	displayTasks,
};
