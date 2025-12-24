const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001; // use 3001 to avoid conflict with React dev server

app.use(cors());
app.use(express.json());


let posts = [];
let comments = [];
let postIdCounter = 1;
let commentIdCounter = 1;

// GET all posts
app.get('/posts', (req, res) => {
  res.json(posts);
});


app.get('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).json({ error: 'Post not found' });

  const postComments = comments.filter(c => c.postId === id);
  res.json({ ...post, comments: postComments });
});

// POST new post
app.post('/posts', (req, res) => {
  const { name, content } = req.body;
  if (!name || !content) return res.status(400).json({ error: 'Missing fields' });

  const post = { id: postIdCounter++, name, content };
  posts.push(post);
  res.status(201).json(post);
});

// GET comments for a post
app.get('/posts/:id/comments', (req, res) => {
  const postId = parseInt(req.params.id);
  const postComments = comments.filter(c => c.postId === postId);
  res.json(postComments);
});

// POST new comment
app.post('/posts/:id/comments', (req, res) => {
  const postId = parseInt(req.params.id);
  const { comment } = req.body;
  if (!comment) return res.status(400).json({ error: 'Missing comment' });

  const postExists = posts.some(p => p.id === postId);
  if (!postExists) return res.status(404).json({ error: 'Post not found' });

  const newComment = { id: commentIdCounter++, postId, comment };
  comments.push(newComment);
  res.status(201).json(newComment);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
