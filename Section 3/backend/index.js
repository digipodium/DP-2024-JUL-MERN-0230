const express = require('express');
const UserRouter = require('./routers/userRouter');
// const ProductRouter = require('./routers/productRouter');

const app = express();
const port = 5000;

// middleware
app.use(express.json());
app.use('/user', UserRouter);
// app.use('/product', ProductRouter);

// route or endpoint
app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('response from add');
});

app.listen(port, () => {
    console.log('server started');
});