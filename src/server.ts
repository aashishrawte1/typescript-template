import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({}));
app.use(cookieParser())

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});