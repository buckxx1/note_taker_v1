//required routes
const apirRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');

const {notes} = require('./Develop/db/db.json');

//choosing server and port

const PORT = process.env.PORT || 4001;
const app = express();

app.use(express.urlencoded({extended: true }));
app.use(express.json());

app.use('/api', apirRoutes);
app.use('/',htmlRoutes);

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}`)
});