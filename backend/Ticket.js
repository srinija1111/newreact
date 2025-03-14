const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'Open', 
  },
  created_at: {
    type: Date,
    default: Date.now, 
  },
});

const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;
