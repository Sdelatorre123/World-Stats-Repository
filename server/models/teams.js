const mongoose = require('mongoose');

const { Schema } = mongoose;

const teamsSchema = new Schema({
    teamname: {
        type: String,
        required: true,
    },
    teamstats: {
        type: String,
        required: true,
    },
    wins: {
        type: int,
        required: true,
    },
    losses: {
        type: int,
        required: true,
    },
});

const team = model('team', teamsSchema);

module.exports = team;