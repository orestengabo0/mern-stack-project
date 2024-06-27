const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/users');

mongoose.connect('mongodb://localhost/examTerm3', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Succefully connected to mongodb...');
}).catch((ex) => {
    console.log("Couldn't connect to mongodb...");
});

app.use(bodyParser.json());
app.use(cors());
app.use('/users', userRouter);
app.use('/api/userdetails',userRouter)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
