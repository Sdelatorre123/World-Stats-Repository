const mongoose = require('mongoose');

const { Schema } = mongoose;

const forumsSchema = new Schema({
    postCount: {
        type: int,
        default: 0,
    },
    
})