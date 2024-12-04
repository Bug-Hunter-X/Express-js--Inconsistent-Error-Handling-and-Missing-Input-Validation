const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Missing error handling if req.body is empty or invalid
  db.createUser(user, (err, result) => {
    if (err) {
      // Missing proper error handling and response
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).send(result);
    }
  });
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});