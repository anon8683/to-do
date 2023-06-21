// eslint-disable-next-line import/no-cycle
import { displayCurrentProject, displayTasks } from "./displayItems";
import { setLastProject } from "./localStorage";

/* eslint-disable prefer-destructuring */
let count = 0;

// Our current project by default is 0
// Whenever a project is clicked, it ID (index in array) becomes current project
let currentProject = 0;
function addProjectNav(project, projectArray) {
	const nav = document.querySelector("nav");
	const name = project.name;
	// const projects = projectArray;
	// console.log(projects);

	const newProject = document.createElement("div");
	newProject.setAttribute("class", "projectButton");
	newProject.setAttribute("id", `project_${count}`);

	newProject.innerHTML = `
	<a href="#" class="projectButtonx" id="link_project_${count}">${name}</a>
	<button class="deleteButton" id="deleteButton${count}" onclick="deleteProject(this.id)" return false;>Delete</button>
	`;
	nav.append(newProject);

	const linkToTrack = document.getElementById(`link_project_${count}`);

	// const projectNav = document.getElementById("projectNav");

	// projectNav.innerHTML = `
	// <a href="#" class="projectButton" id="project_${count}>${name}</a>
	// `;
	const id = newProject.id.slice(-1);
	// setLastProject(id);

	linkToTrack.addEventListener("click", () => {
		// const id = newProject.id.slice(-1);
		console.log("nav clicked");
		currentProject = id;
		displayCurrentProject(projectArray, id);
		displayTasks(projectArray[currentProject], currentProject);
		setLastProject(id);
	});
	count += 1;
}

// Returns the ID of our currently selected project
function getCurrentProject() {
	if (currentProject === undefined) {
		return null;
	}
	return currentProject;
}

export { addProjectNav, getCurrentProject };
