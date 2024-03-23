const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email']
    },
    phone: {
        type: String,
        required: [true, 'Please add a phone number']
    },
    image:{
        type: String,
        required: false
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Customer', customerSchema);