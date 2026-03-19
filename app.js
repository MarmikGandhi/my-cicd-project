const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Success!</h1><p>The CI/CD Pipeline is working perfectly.</p>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});