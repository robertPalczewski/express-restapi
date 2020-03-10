const express = require('express');
const cors = require('express-cors');
const app = express();

app.use(express.urlencoded({ extended: false }));	app.use(express.urlencoded({ extended: false }));
app.use(express.json());	app.use(express.json());
app.use(cors({
  allowedOrigins: ['localhost:8002',]
}));
const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

app.use('/testimonials', testimonialsRoutes);
app.use('/concerts', concertsRoutes);
app.use('/seats', seatsRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found...' });
});

app.listen(8002, () => {
  console.log('Server is running on port: 8002');
}); 