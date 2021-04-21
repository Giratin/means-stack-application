const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String
        },
        age: {
            type: Number
        },
        email: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('usr', userSchema);

module.exports = User;
