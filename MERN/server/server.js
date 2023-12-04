require("dotenv").config();
const express = require('express');
const app = express();
const PORT = 5000;
const authRoute = require('./router/auth_router');
const contactRoute = require('./router/contact_router');
const connectDB = require('./utils/db');
const errorMiddleware = require("./middlewares/error_middleware");
const cors = require('cors')

const corsOptions = {
    origin: 'http://127.0.0.1:5173',
    methods:"GET, POST, PUT, DELETE, OPTIONS, PATCH, HEAD",
    credentials:true,
    // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/form', contactRoute);
app.use(errorMiddleware);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on ${PORT}`);
    });
});
