const Ticket = require('../models/Ticket');


const createTicket = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTicket = new Ticket({ title, description });
    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a ticket's status
const updateTicketStatus = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (ticket) {
      ticket.status = req.body.status || ticket.status;
      await ticket.save();
      res.json(ticket);
    } else {
      res.status(404).json({ message: 'Ticket not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { createTicket, getTickets, updateTicketStatus };
