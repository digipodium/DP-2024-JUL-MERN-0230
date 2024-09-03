const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    city: { type: String, default: 'Unknown' },
    password: String,
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('User', mySchema);