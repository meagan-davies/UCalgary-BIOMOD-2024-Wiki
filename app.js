const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.render('template', { page: 'pages/home' });
});

app.get('/project/:page', (req, res) => {
    const page = req.params.page;
    res.render('template', { page: `pages/project/${page}` });
});

app.get('/elsi/:page', (req, res) => {
    const page = req.params.page;
    res.render('template', { page: `pages/elsi/${page}` });
});

app.get('/team/:page', (req, res) => {
    const page = req.params.page;
    res.render('template', { page: `pages/team/${page}` });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
