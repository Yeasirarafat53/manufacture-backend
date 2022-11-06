import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './router/userRouter.js';
import productRouter from './router/productRouter.js';

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });


app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

// //==========all products fetch api ============
// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// });

// // =======products details api==========
// app.get('/api/products/:id', (req, res) => {
//   const product = data.products.find((x) => x.id === req.params.id);
//   if (product) {
//   res.send(product);
//   } else {
//    res.status(404).send({ message: 'Product Not Found' });
//   }
  
// });

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});






app.get('/', (req, res) => {
  res.send('Server is ready');
});






const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
