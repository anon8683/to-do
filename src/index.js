import "./style.css";
import {
	createProject,
	createTask,
	getProjectInput,
	getTaskInput,
} from "./objectCreate";
import addProjectNav from "./addProject";

window.projects = [];
window.x = undefined;

const projectArray = [];
let currentProject;

// button rewrite

const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		switch (btn.id) {
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
							console.log(currentProject);
						});
					});
				}
				break;

			case "submitTask": {
				const task = createTask(getTaskInput());
				projects[currentProject].tasks.push(task);
				break;
			}
			default:
		}
	});
});
