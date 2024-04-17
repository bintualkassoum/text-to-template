const supabase = require('./supabaseClient');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); // Add a closing parenthesis here

app.use((err, req, res, next) => {
  console.error(err.stack);
    res.status(500).send('Something broke!');
});