/* eslint-disable no-undef */
// eslint-disable-next-line import/no-cycle
import { displayCurrentProject, displayTasks } from "./displayItems";
import { setLastProject } from "./localStorage";

/* eslint-disable prefer-destructuring */
let count = 0;

// Our current project by default is 0
// Whenever a project is clicked, it ID (index in array) becomes current project
window.currentProject = 0;
function addProjectNav(project, projectArray) {
	const nav = document.getElementById("projectNav");
	const name = project.name;
	// const projects = projectArray;
	// console.log(projects);

	const newProject = document.createElement("div");
	newProject.setAttribute("class", "projectButton");
	newProject.setAttribute("id", `project_${count}`);

	newProject.innerHTML = `
	<a href="#" class="projectButtonx" id="link_project_${count}">• ${name}</a>
	<button class="deleteButton" id="deleteButton${count}" onclick="deleteProject(this.id)" return false;>Delete</button>
	`;
	nav.append(newProject);

	const linkToTrack = document.getElementById(`link_project_${count}`);
	const id = newProject.id.slice(-1);

	linkToTrack.addEventListener("click", () => {
		currentProject = id;
		displayCurrentProject(projectArray, id);
		displayTasks(projectArray[currentProject], currentProject);
		setLastProject(id);
	});

	count += 1;
}

const catergory = Array.from(document.querySelectorAll(".catergory"));
catergory.forEach((item) => {
	item.addEventListener("click", () => {
		switch (item.id) {
			case "all":
				currentProject = "all";
				break;
			case "today":
				currentProject = "today";
				break;
			case "week":
				currentProject = "week";
				break;
			case "important":
				currentProject = "important";
				break;
			default:
		}
	});
});

// Returns the ID of our currently selected project
function getCurrentProject() {
	if (currentProject === undefined) {
		return null;
	}
	return currentProject;
}

export { addProjectNav, getCurrentProject };
