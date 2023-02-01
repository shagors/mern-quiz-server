import express from "express";
import morgan from "morgan";
import cors from 'cors';
import { config } from "dotenv";
import router from "./router/route.js";

//** connection file */
import connect from "./database/conn.js";

const app = express();

//*** app middleware */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

// ** app port*/
const port = process.env.PORT || 8080;


/** route**/ 
app.use('/api', router);

app.get('/', (req, res) => {
    try {
        res.json("Get Request");
    } catch (error) {
        res.json(error);
    }
});

//** Mongo connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`The server is running on ${port}`);
        });
    } catch (error) {
        console.log("Can't connect to the server");
    }
}).catch(error => {
    console.log("Invalid Database Connection");
});
