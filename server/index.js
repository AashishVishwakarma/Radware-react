const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/users', async (req, res) => {
    try {
        console.log("try".res);

        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        res.json(response.data);
        console.log(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/users/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
