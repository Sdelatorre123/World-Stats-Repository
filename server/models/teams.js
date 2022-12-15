const mongoose = require('mongoose');

const { Schema } = mongoose;

const teamsSchema = new Schema({
    teamname: {
        type: String,
        required: true,
    }
})