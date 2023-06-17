import "./style.css";
import {
	createProject,
	createTask,
	getProjectInput,
	getTaskInput,
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

				break;
			case "submitProject":
				{
					const project = createProject(getProjectInput());
					projects.push(project);
					projectArray.push(project);
					addProjectNav(project);
					const projectButton = Array.from(
						document.querySelectorAll(".projectButton")
					);
					projectButton.forEach((but) => {
						but.addEventListener("click", () => {
							currentProject = but.id.slice(-1);
							displayCurrentProject(currentProject);
							console.log(currentProject);
						});
					});

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
			default:
		}
	});
});
