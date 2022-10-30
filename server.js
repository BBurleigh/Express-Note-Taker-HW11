const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes');

const htmlRoute = require('./routes/htmlRoute');

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is available at localhost${PORT}`);
})