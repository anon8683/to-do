/* eslint-disable prefer-destructuring */
import "./style.css";
import {
	createProject,
	createTask,
	getProjectInput,
	getTaskInput,
	editProject,
} from "./objectCreate";
import { addProjectNav, getCurrentProject } from "./addProject";
import {
	addVisibleClass,
	removeVisibleClass,
	displayCurrentProject,
} from "./displayItems";

window.projects = [];
window.x = undefined;

const projectArray = [];
let currentProject;

// button rewrite

const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		switch (btn.id) {
			case "addProjectButton":
				// show project inputs
				addVisibleClass("#projectInput");
				break;
			case "submitProject":
				{
					const project = createProject(getProjectInput());
					projects.push(project);
					projectArray.push(project);
					console.log(projectArray);
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
				break;
			case "submitTask": {
				const task = createTask(getTaskInput());
				projects[currentProject].tasks.push(task);
				projectArray[currentProject].tasks.push(task);
				break;
			}
			case "editProject":
				// editProject(projectArray[currentProject], currentProject);
				console.log(projectArray);
				currentProject = getCurrentProject();

				addVisibleClass("#projectInput");
				console.log(`edit clicked current project is ${currentProject}`);
				editProject(projectArray, currentProject); // sends our current item and id to edit
				break;
			default:
		}
	});
});
