const supabase = require('./supabaseClient');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 5001;

app.use(cors({
  origin: 'http://localhost:3000'  // This should match the URL of your front-end
}));

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