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
import { createCard, orderTasksByDate } from "./card";
import { adjustStorage, getStorage, getLastProject } from "./localStorage";

window.projects = [];
window.x = undefined;

const projectArray = [];
let currentProject;
let edit = false;

// button rewrite

const buttons = Array.from(document.querySelectorAll("button"));

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
				console.log(getCurrentProject());
				const task = createTask(getTaskInput());
				const current = projectArray[getCurrentProject()];

				current.tasks.push(task);
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
				break;
			default:
		}
	});
});

window.addEventListener("load", () => {
	if (localStorage.getItem("projects") != null) {
		window.proj = getStorage();
		for (let i = 0; i < proj.length; i++) {
			const element = proj[i];
			projectArray.push(element);
			console.log(projectArray);
			console.log(proj);
			addProjectNav(element, projectArray);
			console.log(element.tasks);
			if (element.tasks !== null) {
				console.log(element, i);
				displayTasks(element, i);
			}
		}
		// const lastItem = localStorage.getItem("lastProject")
		// displayCurrentProject(projectArray, getStorage()[1] )

		// console.log(getLastProject());
		// displayCurrentProject(projectArray, getLastProject());
		displayCurrentProject(projectArray, getLastProject());
	}
	console.log(projectArray);
});
