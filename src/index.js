/* eslint-disable prefer-destructuring */
import "./style.css";
import {
	createProject,
	createTask,
	getProjectInput,
	getTaskInput,
	editProject,
} from "./objectCreate";
import addProjectNav from "./addProject";
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
				const save = document.getElementById("submitEditProject");
				if (save) {
					break;
				}

				break;
			case "submitProject":
				{
					const project = createProject(getProjectInput());
					projects.push(project);
					projectArray.push(project);
					console.log(projectArray);
					addProjectNav(project, projectArray);
					if (projectArray.length <= 1) {
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
				console.log("edit clicked");
				console.log(currentProject);
				console.log(projectArray);
				addVisibleClass("#projectInput");

				editProject(projectArray[currentProject], currentProject);
				break;
			default:
		}
	});
});
