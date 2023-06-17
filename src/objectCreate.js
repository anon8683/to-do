// Create our project object
function createProject([name, desc]) {
	return {
		name,
		desc,
		tasks: [],
	};
}

// gets our input values for new projects
function getProjectInput() {
	const name = document.getElementById("projectName").value;
	const desc = document.getElementById("projectDescription").value;
	return [name, desc];
}

// Create our project object
function createTask([title, description, date, priority]) {
	return {
		title,
		description,
		date,
		priority,
	};
}

function getTaskInput() {
	const title = document.getElementById("taskTitle").value;
	const desc = document.getElementById("taskDescription").value;
	const date = document.getElementById("taskDate").value;
	const prio = document.getElementById("taskPrio").value;
	return [title, desc, date, prio];
}

export { createProject, createTask, getProjectInput, getTaskInput };
