const express = require('express');
const app = express();
app.use(express.json());

// Middleware for basic input validation
app.use('/user', (req, res, next) => {
  if (!req.body || !req.body.name || !req.body.email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  next();
});

app.post('/user', (req, res) => {
  const user = req.body;
  db.createUser(user, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create user' });
    } else {
      res.status(201).json(result);
    }
  });
});

// ... other routes with improved error handling ...

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});