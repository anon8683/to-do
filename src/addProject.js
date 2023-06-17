/* eslint-disable prefer-destructuring */
let count = 0;
function addProjectNav(project) {
	const nav = document.querySelector("nav");
	const name = project.name;
	// const desc = project.desc;

	const newProject = document.createElement("a");
	newProject.setAttribute("href", "#");
	newProject.setAttribute("class", "projectButton");
	newProject.setAttribute("id", `project_${count}`);
	newProject.textContent = `${name}`;
	nav.append(newProject);
	count += 1;
}

export default addProjectNav;
