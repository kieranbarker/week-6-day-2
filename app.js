const express = require("express");
const { Post } = require("./db/models/index.js");

const app = express();
app.use(express.json());

app.post("/posts", async (req, res) => {
  // Creates a new post and sends a "201 Created" response.
  const { title, body } = req.body;
  const post = await Post.create({ title, body });
  res.status(201).json(post);
});

app.get("/posts", async (req, res) => {
  // Gets all posts and sends a "200 OK" response.
  const posts = await Post.findAll();
  res.status(200).json(posts);
});

app.get("/posts/:id", async (req, res) => {
  // Tries to find the post by its ID.
  const { id } = req.params;
  const post = await Post.findByPk(id);

  // If the post does not exist, sends a "404 Not Found" response.
  if (!post) {
    res.status(404).json({ error: "Post not found" });
    return;
  }

  // Otherwise, sends a 200 OK response.
  res.status(200).json(post);
});

app.put("/posts/:id", async (req, res) => {
  // Tries to find the post by its ID.
  const { id } = req.params;
  let post = await Post.findByPk(id);

  // Gets the post title and post body from the request body.
  const { title, body } = req.body;

  // If the post does not exist, creates it and sends a "201 Created" response.
  if (!post) {
    post = await Post.create({ id: Number(id), title, body });
    res.status(201).json(post);
    return;
  }

  // Otherwise, updates the post and sends a "200 OK" response.
  post = await post.update({ title, body });
  res.status(200).json(post);
});

app.delete("/posts/:id", async (req, res) => {
  // Tries to find the post by its ID.
  const { id } = req.params;
  const post = await Post.findByPk(id);

  // If the post does not exist, sends a "404 Not Found" response.
  if (!post) {
    res.status(404).json({ error: "Post not found" });
    return;
  }

  // Otherwise, deletes the post and sends a "204 No Content" response.
  await post.destroy();
  res.status(204).send();
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
