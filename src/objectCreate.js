/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import { removeVisibleClass, displayCurrentProject } from "./displayItems";

// Create our project object
function createProject([name, desc]) {
	return {
		name,
		desc,
		tasks: [],
	};
}

// gets our input values for new projects
function getProjectInput() {
	const name = document.getElementById("projectName").value;
	const desc = document.getElementById("projectDescription").value;
	return [name, desc];
}

function changeNavItem(name, id) {
	const navToChange = document.getElementById(`project_${id}`);
	navToChange.textContent = `${name}`;
}

function changeButton(edit, cancel) {
	if (edit === true && cancel === true) {
		const buttonToChanges = document.getElementById("submitEdit");
		buttonToChanges.setAttribute("id", "submitProject");
		return;
	}
	if (edit === true) {
		const buttonToChange = document.getElementById("submitProject");
		buttonToChange.setAttribute("id", "submitEdit");
		return;
	}

	const buttonToChange = document.getElementById("submitEdit");
	buttonToChange.setAttribute("id", "submitProject");
}

function editProject(projectArray, id) {
	projectArray[id].name = getProjectInput()[0];
	projectArray[id].desc = getProjectInput()[1];

	displayCurrentProject(projectArray, id);
	changeNavItem(projectArray[id].name, id);
	removeVisibleClass("#projectInput");
}

// Create our project object
function createTask([title, description, date, priority]) {
	return {
		title,
		description,
		date,
		priority,
	};
}

function getTaskInput() {
	const title = document.getElementById("taskTitle").value;
	const desc = document.getElementById("taskDescription").value;
	const date = document.getElementById("taskDate").value;
	const prio = document.getElementById("taskPrio").value;
	return [title, desc, date, prio];
}

export {
	createProject,
	createTask,
	getProjectInput,
	getTaskInput,
	editProject,
	changeButton,
};
