const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing, return all requests to React app
app.get('/api', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
  res.json("working")
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
