const express = require('express');
const { createTicket, getTickets, updateTicketStatus } = require('../controllers/ticketController');
const router = express.Router();


router.post('/', createTicket);       
router.get('/', getTickets);          
router.patch('/:id', updateTicketStatus); 

module.exports = router;
