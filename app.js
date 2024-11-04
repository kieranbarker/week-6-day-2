const express = require("express");
const { Post } = require("./db/models/index.js");

const app = express();
app.use(express.json());

app.post("/posts", async (req, res) => {});

app.get("/posts", async (req, res) => {});

app.get("/posts/:id", async (req, res) => {});

app.put("/posts/:id", async (req, res) => {});

app.delete("/posts/:id", async (req, res) => {});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
