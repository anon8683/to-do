/* eslint-disable no-param-reassign */
import { removeVisibleClass } from "./displayItems";

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

function editProject(project, id) {
	const save = document.getElementById("submitProject");
	save.setAttribute("id", "submitEditProject");

	save.addEventListener("click", () => {
		const name = getProjectInput()[0];
		const desc = getProjectInput()[1];
		project.name = name;
		project.desc = desc;

		const navContent = document.getElementById(`project_${id}`);
		const currentName = document.getElementById("currentProject");
		const currentDesc = document.getElementById("projectDesc");
		navContent.textContent = name;
		currentName.textContent = name;
		currentDesc.textContent = desc;
		removeVisibleClass("#projectInput");
	});
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
};
