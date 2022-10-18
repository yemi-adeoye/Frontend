const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    issue:{
        type: String
    },
    priority: {
        type: String
    },
    email: {
        type: String
    },
    response:{
        type: String
    },
    status: {
        type: String,
        default: 'OPEN'
    },
    responseByEmail:{
        type: String
    },
    genaratedDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Ticket = mongoose.model('ticket',TicketSchema);