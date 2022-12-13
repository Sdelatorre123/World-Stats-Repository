const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentsSchema = new Schema({
    ratings: [{
        type: Boolean,
        default: false,
    }]
});