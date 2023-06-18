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

function editProject(projectArray, id) {
	console.log(projectArray[id], id);

	const buttonToChange = document.getElementById("submitProject");
	buttonToChange.setAttribute("id", "submitEdit");

	function handleClick() {
		console.log("edit saved");
		console.log(getProjectInput(), projectArray[id]);

		buttonToChange.setAttribute("id", "submitProject");
		removeVisibleClass("#projectInput");

		projectArray[id].name = getProjectInput()[0];
		projectArray[id].desc = getProjectInput()[1];
		displayCurrentProject(projectArray, id);
		changeNavItem(projectArray[id].name, id);
		console.log(projectArray);

		buttonToChange.removeEventListener("click", handleClick);
	}

	buttonToChange.addEventListener("click", handleClick);

	// console.log(project);
	// const save = document.getElementById("submitProject");
	// const nameInput = document.getElementById("projectName");
	// const descInput = document.getElementById("projectDescription");
	// if (save) {
	// 	save.setAttribute("id", "submitEditProject");
	// }
	// // nameInput.setAttribute("value", `${project.name}`);
	// // descInput.setAttribute("value", `${project.desc}`);
	// console.log(save);

	// save.addEventListener("click", (edit) => {
	// 	const name = getProjectInput()[0];
	// 	const desc = getProjectInput()[1];
	// 	project.name = name;
	// 	project.desc = desc;

	// 	const navContent = document.getElementById(`project_${id}`);
	// 	const currentName = document.getElementById("currentProject");
	// 	const currentDesc = document.getElementById("projectDesc");
	// 	navContent.textContent = name;
	// 	currentName.textContent = name;
	// 	currentDesc.textContent = desc;
	// 	removeVisibleClass("#projectInput");
	// 	save.setAttribute("id", "submitProject");
	// 	save.removeEventListener("click", edit);
	// });
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
