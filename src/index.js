/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import "./style.css";
import {
	createProject,
	createTask,
	getProjectInput,
	getTaskInput,
	editProject,
	changeButton,
} from "./objectCreate";
import { addProjectNav, getCurrentProject } from "./addProject";
import {
	addVisibleClass,
	removeVisibleClass,
	displayCurrentProject,
	displayTasks,
} from "./displayItems";
import { orderTasksByDate } from "./card";
import {
	adjustStorage,
	getStorage,
	getLastProject,
	setLastProject,
	getSideStorage,
} from "./localStorage";

window.projects = [];
window.x = undefined;

window.projectArray = [];
window.sideArray = [];
let currentProject;
let edit = false;

// changes
if (sideArray.length < 1) {
	const all = createProject(["all", "all tasks"]);
	const today = createProject(["today", "today tasks"]);
	const week = createProject(["week", "week tasks"]);
	const important = createProject(["important", "important tasks"]);
	sideArray.push(all, today, week, important);
}
// changes

const buttons = Array.from(document.querySelectorAll("button"));
const catergory = Array.from(document.querySelectorAll(".catergory"));

function validateTask() {
	const nameInput = document.getElementById("taskName");
	const dateInput = document.getElementById("taskDate");
	if (dateInput.validity.valid && nameInput.validity.valid) {
		return true;
	}

	return false;
}

function validateProject() {
	const nameInput = document.getElementById("projectName");
	if (nameInput.validity.valid) {
		return true;
	}
	return false;
}

catergory.forEach((cat) => {
	cat.addEventListener("click", () => {
		displayCurrentProject(1, cat.id);

		switch (cat.id) {
			case "all":
				if (sideArray[0].tasks.length > 0) {
					orderTasksByDate(sideArray[0]);
					displayTasks(sideArray[0], "all");
				}
				break;
			case "today":
				if (sideArray[1].tasks.length > 0) {
					orderTasksByDate(sideArray[1]);
					displayTasks(sideArray[1], "today");
				}
				break;
			case "week":
				if (sideArray[2].tasks.length > 0) {
					orderTasksByDate(sideArray[2]);
					displayTasks(sideArray[2], "week");
				}
				break;
			case "important":
				if (sideArray[3].tasks.length > 0) {
					orderTasksByDate(sideArray[3]);
					displayTasks(sideArray[3], "important");
				}
				break;
			default:
		}
	});
});

// get our taskTime in seconds, and our current time. If the difference is within 86400 seconds (a day)
// then our task is due today and should be added to today list
function today(task) {
	const taskEpoch = (task.date.getTime() / 1000).toFixed(0);
	const currentEpoch = (new Date().getTime() / 1000).toFixed(0);
	const time = taskEpoch - currentEpoch;

	if (time < 86400 && time > 0) {
		return true;
	}

	return false;
}

function week(task) {
	const taskEpoch = (task.date.getTime() / 1000).toFixed(0);
	const currentEpoch = (new Date().getTime() / 1000).toFixed(0);
	const time = taskEpoch - currentEpoch;

	if (time < 86400 * 7 && time > 0) {
		return true;
	}

	return false;
}

buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		switch (btn.id) {
			case "addTask":
				addVisibleClass("#taskInput");
				break;
			case "addProjectButton":
				// show project inputs
				addVisibleClass("#projectInput");
				break;
			case "submitProject":
				{
					if (!validateProject()) {
						// e.preventDefault();
						return;
					}
					const project = createProject(getProjectInput());
					projects.push(project);
					projectArray.push(project); // this will always contain total projects, add to localstorage
					adjustStorage(projectArray);
					getStorage();
					addProjectNav(project, projectArray);
					if (projectArray.length <= 1) {
						// by default display our first entry
						displayCurrentProject(projectArray, 0);
						currentProject = 0;
					}
					removeVisibleClass("#projectInput");
				}
				break;
			case "cancelSubmitProject":
				removeVisibleClass("#projectInput");
				if (edit === true) {
					changeButton(edit, true);
					edit = false;
				}
				break;
			case "cancelSubmitTask":
				removeVisibleClass("#taskInput");
				break;
			case "submitTask": {
				if (!validateTask()) {
					return;
				}
				const task = createTask(getTaskInput()); // gives a task object from our inputs

				const current = projectArray[getCurrentProject()]; //
				current.tasks.push(task);

				// we check if our task needs adding to any of our default catergories
				// if the task priority is urgent, add to urgent array
				if (task.priority === "Urgent") {
					sideArray[3].tasks.push(task);
				}

				// if the task is today, add it to our Today list
				if (today(task)) {
					sideArray[1].tasks.push(task);
				}

				// if the task is within the next week, add it to our week list
				if (week(task)) {
					sideArray[2].tasks.push(task);
				}

				// Always push the task to our "All task" array and adjust our storage
				sideArray[0].tasks.push(task);
				adjustStorage(null, sideArray);
				// changes

				orderTasksByDate(current);
				removeVisibleClass("#taskInput");
				displayTasks(current, getCurrentProject());
				adjustStorage(projectArray); // adds task to storage
				break;
			}
			case "editProject":
				// when edit button is clicked
				// set get our currently selected project ID
				// make our input form visible and change the button
				currentProject = getCurrentProject();
				addVisibleClass("#projectInput");
				edit = true;
				changeButton(edit);
				break;

			case "submitEdit":
				editProject(projectArray, currentProject);
				edit = false;
				changeButton(edit);
				adjustStorage(projectArray);
				break;
			default:
		}
	});
});

// When page is loaded, get storage and displ
window.addEventListener("load", () => {
	if (localStorage.getItem("sideProjects") !== null) {
		sideArray = getSideStorage();
	}

	if (
		localStorage.getItem("projects") !== null &&
		localStorage.getItem("projects") !== "[]"
	) {
		window.proj = getStorage();
		for (let i = 0; i < proj.length; i += 1) {
			const element = proj[i];
			projectArray.push(element);
			addProjectNav(element, projectArray);
		}

		if (getLastProject() === null) {
			setLastProject(0);
		}

		// display out last viewed project and click the nav to generate the tasks
		displayCurrentProject(projectArray, getLastProject());
		const itemToClick = document.getElementById(
			`link_project_${getLastProject()}`
		);
		itemToClick.click();
	}
});
