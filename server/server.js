const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('tiny'));

const authRouter = require('./routes/auth');
const problemRouter = require('./routes/problem');
const userRouter = require('./routes/user');
/*
    GET
    getUserDetails('/user/:id);
    getAllProblems('/problems');
    getAllSubmissions('/submissions/:id');

    POST
    createASubmission('/submissions/:id');
    creatAProblem('/problems');

    PATCH
    updateAUser('/user/:id');
*/
app.use('/auth', authRouter);
app.use('/problems', problemRouter);
app.use('/user', userRouter);

const port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}).catch((e) => {
    console.log(e);
});

