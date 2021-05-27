const mongoose = require('mongoose');
const config = require('../models/config');
uri = config.URI;

mongoose
    .connect(uri || 'http://localhost:8080', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Failed to connect to mongoDB:', e.message);
    })

const db = mongoose.connection;

module.exports = db;

