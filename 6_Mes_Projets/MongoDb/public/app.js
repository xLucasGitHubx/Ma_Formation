document.addEventListener("DOMContentLoaded", () => {
	const taskForm = document.getElementById("task-form");
	const taskList = document.getElementById("task-list");

	// Charger les tâches existantes
	fetch("/api/tasks")
		.then((res) => res.json())
		.then((tasks) => {
			tasks.forEach((task) => {
				addTaskToDOM(task);
			});
		});

	// Ajouter une nouvelle tâche
	taskForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const title = document.getElementById("title").value;
		const description = document.getElementById("description").value;

		fetch("/api/tasks", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title, description }),
		})
			.then((res) => res.json())
			.then((task) => {
				addTaskToDOM(task);
				taskForm.reset();
			});
	});

	// Fonction pour ajouter une tâche au DOM
	function addTaskToDOM(task) {
		const li = document.createElement("li");
		li.setAttribute("data-id", task._id);
		li.className = task.completed ? "completed" : "";

		const toggleBtn = document.createElement("input");
		toggleBtn.type = "checkbox";
		toggleBtn.checked = task.completed;
		toggleBtn.className = "toggle-btn";
		toggleBtn.addEventListener("change", () => {
			updateTask(task._id, { completed: toggleBtn.checked });
			li.classList.toggle("completed");
		});

		li.appendChild(toggleBtn);

		const taskContent = document.createElement("span");
		taskContent.textContent = `${task.title} - ${task.description}`;
		li.appendChild(taskContent);

		// Bouton Modifier
		const editBtn = document.createElement("button");
		editBtn.textContent = "Modifier";
		editBtn.className = "edit-btn";
		editBtn.addEventListener("click", () => {
			const newTitle = prompt("Modifier le titre:", task.title);
			const newDescription = prompt("Modifier la description:", task.description);
			if (newTitle && newDescription !== null) {
				updateTask(task._id, { title: newTitle, description: newDescription });
				taskContent.textContent = `${newTitle} - ${newDescription}`;
			}
		});
		li.appendChild(editBtn);

		// Bouton Supprimer
		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "Supprimer";
		deleteBtn.className = "delete-btn";
		deleteBtn.addEventListener("click", () => {
			deleteTask(task._id);
			taskList.removeChild(li);
		});
		li.appendChild(deleteBtn);

		taskList.appendChild(li);
	}

	// Fonction pour mettre à jour une tâche
	function updateTask(id, data) {
		fetch(`/api/tasks/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
	}

	// Fonction pour supprimer une tâche
	function deleteTask(id) {
		fetch(`/api/tasks/${id}`, {
			method: "DELETE",
		});
	}
});
