const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse incoming JSON data
app.use(express.json());

// GET route for the index page (loads the index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// POST route to handle form submission and save data in JSON
app.post('/submit', (req, res) => {
    const formData = req.body;
    // Store the form data in a JSON file
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error reading data file');
        }

        const jsonData = JSON.parse(data || '[]');
        jsonData.push(formData);

        fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Error saving data');
            }

            // Send acknowledgment to the client
            res.send('Form data submitted successfully!');
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});