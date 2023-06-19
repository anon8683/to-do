import { compareAsc } from "date-fns";

function createCard() {
	// when our tasks gets created and added, make a card for it
}

function orderTasksByDate(project) {
	const { tasks } = project;
	tasks.sort((a, b) => compareAsc(a.date, b.date)); // sorts our tasks by date
	console.log(tasks);
	console.log(project);
}

export { createCard, orderTasksByDate };
