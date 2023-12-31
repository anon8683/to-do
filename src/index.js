/* eslint-disable no-shadow */
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

const welcomeText = document.getElementById("introText");
window.projects = [];
window.x = undefined;
window.projectArray = [];
window.sideArray = [];
let currentProject;
let edit = false;

// Creates our initial projects that are defaults
if (sideArray.length < 1) {
	const all = createProject(["all", "all tasks"]);
	const today = createProject(["today", "today tasks"]);
	const week = createProject(["week", "week tasks"]);
	const important = createProject(["important", "important tasks"]);
	sideArray.push(all, today, week, important);
}

// task input validation, requires a valid name and date to submit
function validateTask() {
	const nameInput = document.getElementById("taskName");
	const dateInput = document.getElementById("taskDate");
	if (dateInput.validity.valid && nameInput.validity.valid) {
		return true;
	}
	return false;
}

// project input vlaidaiton, requires valid name
function validateProject() {
	const nameInput = document.getElementById("projectName");
	if (nameInput.validity.valid) {
		return true;
	}
	return false;
}

const catergory = Array.from(document.querySelectorAll(".catergory"));
catergory.forEach((item) => {
	item.addEventListener("click", () => {
		const add = document.getElementById("addTask");
		const desc = document.getElementById("projectDesc");
		welcomeText.style.display = "none";
		displayCurrentProject(1, item.id);
		add.style.visibility = "hidden";
		desc.style.visibility = "hidden";

		switch (item.id) {
			case "all":
				orderTasksByDate(sideArray[0]);
				displayTasks(sideArray[0], "all");
				break;

			case "today":
				orderTasksByDate(sideArray[1]);
				displayTasks(sideArray[1], "today");
				break;

			case "week":
				orderTasksByDate(sideArray[2]);
				displayTasks(sideArray[2], "week");
				break;

			case "important":
				orderTasksByDate(sideArray[3]);
				displayTasks(sideArray[3], "important");
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

// checks if the task is within one week from current time
function week(task) {
	const taskEpoch = (task.date.getTime() / 1000).toFixed(0);
	const currentEpoch = (new Date().getTime() / 1000).toFixed(0);
	const time = taskEpoch - currentEpoch;

	if (time < 86400 * 7 && time > 0) {
		return true;
	}

	return false;
}

const buttons = Array.from(document.querySelectorAll("button"));
// listen to all buttons on the page, switch case to perform a set of actions based on what button is clicked
buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		switch (btn.id) {
			// makes our task inputs visible
			case "addTask":
				addVisibleClass("#taskInput");
				break;

			// makes our project inputs visible
			case "addProjectButton":
				addVisibleClass("#projectInput");
				welcomeText.style.display = "none";
				break;

			// logic for submitting our custom project
			case "submitProject":
				{
					// if user inputs does not pass validation, return
					if (!validateProject()) {
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

			// hides project inputs
			case "cancelSubmitProject":
				removeVisibleClass("#projectInput");
				if (edit === true) {
					changeButton(edit, true);
					edit = false;
				}
				break;

			// hides task inputs
			case "cancelSubmitTask":
				removeVisibleClass("#taskInput");
				break;

			// logic for submitting a task
			case "submitTask": {
				// if task inputs are not valid, return
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
		welcomeText.style.display = "none";
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

	// examples();
});
