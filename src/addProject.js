import { displayCurrentProject } from "./displayItems";

/* eslint-disable prefer-destructuring */
let count = 0;
let currentProject = 0;
function addProjectNav(project, projectArray) {
	const nav = document.querySelector("nav");
	const name = project.name;
	const projects = projectArray;
	console.log(projects);

	const newProject = document.createElement("a");
	newProject.setAttribute("href", "#");
	newProject.setAttribute("class", "projectButton");
	newProject.setAttribute("id", `project_${count}`);
	newProject.textContent = `${name}`;
	nav.append(newProject);

	newProject.addEventListener("click", () => {
		const id = newProject.id.slice(-1);
		currentProject = id;
		console.log(id);
		console.log(currentProject);
		displayCurrentProject(projectArray, id);
	});
	count += 1;
}

function getCurrentProject() {
	if (currentProject === undefined) {
		return null;
	}
	return currentProject;
}

export { addProjectNav, getCurrentProject };
