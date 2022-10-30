const express = require('express');

const path = require('path');

const fs = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();

const apiRoutes = require('./routes/apiRoutes');

const htmlRoute = require('./routes/htmlRoute');

app.use(express.static('public'));

app.use(express.urlencoded({extend: true}));

app.use(express.json());

app.use('/api', apiRoutes);

app.use('/', htmlRoute);

app.listen(PORT, () => {
    console.log(`Server is available at localhost${PORT}`);
})