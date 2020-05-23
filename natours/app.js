const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// MIDDLEWARES
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
	console.log('Hi from middleware 🌿');
	next();
});

// ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// START SERVER	
const port = 3000;

app.listen(port, () => {
	console.log(`App running on port: ${port}`);
});
