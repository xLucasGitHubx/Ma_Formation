const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Connexion à MongoDB
mongoose.connect("mongodb+srv://lucas:QDVHDYF2z8rtVA4E@cluster0.r5inqzz.mongodb.net/todoapp", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Vérifier la connexion à MongoDB
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erreur de connexion à MongoDB:"));
db.once("open", () => {
	console.log("Connecté à MongoDB");
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // Servir le frontend

// Schéma et modèle MongoDB pour les tâches
const taskSchema = new mongoose.Schema({
	title: String,
	description: String,
	completed: Boolean,
});
const Task = mongoose.model("Task", taskSchema);

// API pour gérer les tâches
app.get("/api/tasks", async (req, res) => {
	try {
		const tasks = await Task.find();
		res.json(tasks);
	} catch (err) {
		res.status(500).send(err);
	}
});

app.post("/api/tasks", async (req, res) => {
	const task = new Task(req.body);
	try {
		const savedTask = await task.save();
		res.json(savedTask);
	} catch (err) {
		res.status(500).send(err);
	}
});

app.put("/api/tasks/:id", async (req, res) => {
	try {
		const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
		res.json(updatedTask);
	} catch (err) {
		res.status(500).send(err);
	}
});

app.delete("/api/tasks/:id", async (req, res) => {
	try {
		await Task.findByIdAndDelete(req.params.id);
		res.json({ message: "Tâche supprimée" });
	} catch (err) {
		res.status(500).send(err);
	}
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Serveur démarré sur le port ${PORT}`);
});
