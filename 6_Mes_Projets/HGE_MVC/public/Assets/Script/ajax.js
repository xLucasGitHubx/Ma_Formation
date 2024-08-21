document.getElementById("message-form").addEventListener("submit", function (event) {
	event.preventDefault(); // Empêche la soumission normale du formulaire

	let formData = new FormData(this);

	fetch("/discussion/sendMessage", {
		method: "POST",
		body: formData,
	})
		.then((response) => response.text())
		.then((data) => {
			// Traitez la réponse ici, par exemple, rechargez la liste des messages
			if (data.trim() === "Données invalides pour l'envoi du message.") {
				alert("Erreur lors de l'envoi du message");
			} else {
				// Recharger la liste des messages
				document.getElementById("message-list").innerHTML = data;
			}
		})
		.catch((error) => console.error("Erreur:", error));
});
