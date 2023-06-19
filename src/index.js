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
					projectArray.push(project);
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
