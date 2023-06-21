function adjustStorage(projectArray) {
	if (projectArray !== null) {
		localStorage.setItem("projects", JSON.stringify(projectArray));
	}
	// localStorage.setItem("lastProject", JSON.stringify(getCurrentProject()));
}

function setLastProject(id) {
	localStorage.setItem("lastProject", JSON.stringify(id));
}

function getStorage() {
	const savedProjects = JSON.parse(localStorage.getItem("projects")).filter(
		(n) => n
	);

	return savedProjects;
}

function getLastProject() {
	const lastProject = JSON.parse(localStorage.getItem("lastProject"));

	return lastProject;
}

export { adjustStorage, getStorage, setLastProject, getLastProject };
