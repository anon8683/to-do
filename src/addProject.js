import { displayCurrentProject } from "./displayItems";

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

	const newProject = document.createElement("a");
	newProject.setAttribute("href", "#");
	newProject.setAttribute("class", "projectButton");
	newProject.setAttribute("id", `project_${count}`);
	newProject.textContent = `${name}`;
	nav.append(newProject);

	newProject.addEventListener("click", () => {
		const id = newProject.id.slice(-1);
		currentProject = id;
		displayCurrentProject(projectArray, id);
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
