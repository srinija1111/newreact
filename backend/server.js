const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const ticketRoutes = require('./routes/ticketRoutes');

dotenv.config(); 

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json()); 


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));


app.use('/api/tickets', ticketRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
