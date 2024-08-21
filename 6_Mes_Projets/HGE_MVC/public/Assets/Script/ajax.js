document.querySelector(".mp").addEventListener("submit", function (e) {
	e.preventDefault(); // Empêche le formulaire de se soumettre normalement

	const messageInput = document.querySelector('input[name="message"]');
	const destinataireIdInput = document.querySelector('input[name="destinataire_id"]');
	const messageContent = messageInput.value;
	const destinataireId = destinataireIdInput.value;

	if (messageContent.trim() === "") {
		alert("Veuillez entrer un message.");
		return;
	}

	// Préparer les données à envoyer
	const formData = new FormData();
	formData.append("message", messageContent);
	formData.append("destinataire_id", destinataireId);

	// Envoyer la requête AJAX
	fetch("/discussion/sendMessage", {
		method: "POST",
		body: formData,
	})
		.then((response) => response.json()) // Traiter la réponse comme JSON
		.then((data) => {
			console.log("Réponse d'envoi de message:", data); // Débogage
			if (data.success) {
				// Ajouter le message au fil de discussion
				const messageList = document.getElementById("message-list");
				const newMessage = document.createElement("li");
				newMessage.className = "message right";
				newMessage.innerHTML = `
                <img class="logo" src="../Assets/Icons/yellow_user_icon.svg" alt="User Icon" />
                <p>${data.message}</p>
            `;
				messageList.appendChild(newMessage);

				// Effacer le champ de saisie
				messageInput.value = "";
			} else {
				alert(data.error);
			}
		})
		.catch((error) => {
			console.error("Erreur:", error);
		});
});

// Fonction pour récupérer les nouveaux messages
function fetchMessages() {
	const destinataireId = destinataireIdInput.value;

	fetch(`/discussion/getNewMessages?destinataire_id=${destinataireId}`)
		.then((response) => response.json())
		.then((data) => {
			console.log("Réponse de récupération des messages:", data); // Débogage
			if (data.success) {
				// Ajouter les nouveaux messages au fil de discussion
				data.messages.forEach((message) => {
					const messageElement = document.createElement("li");
					messageElement.className = `message ${message.Id_Expéditeur == destinataireId ? "left" : "right"}`;
					messageElement.innerHTML = `
						<img class="logo" src="../Assets/Icons/${message.Id_Expéditeur == destinataireId ? "green_user_icon.svg" : "yellow_user_icon.svg"}" alt="User Icon" />
						<p>${message.Contenu}</p>
					`;
					messageList.appendChild(messageElement);
				});
			} else {
				console.error("Erreur lors de la récupération des messages:", data.message);
			}
		})
		.catch((error) => {
			console.error("Erreur lors de la récupération des messages:", error);
		});
}

// Polling toutes les 5 secondes pour les nouveaux messages
setInterval(fetchMessages, 1000);
