function adjustStorage(projectArray, sideArray) {
	if (projectArray !== null) {
		localStorage.setItem("projects", JSON.stringify(projectArray));
	}

	if (sideArray !== undefined) {
		console.log(sideArray);
		localStorage.setItem("sideProjects", JSON.stringify(sideArray));
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

function getSideStorage() {
	const side = JSON.parse(localStorage.getItem("sideProjects")).filter(
		(n) => n
	);

	return side;
}

window.getSideStorage = getSideStorage;

function getLastProject() {
	const lastProject = JSON.parse(localStorage.getItem("lastProject"));

	return lastProject;
}

export {
	adjustStorage,
	getStorage,
	setLastProject,
	getLastProject,
	getSideStorage,
};
