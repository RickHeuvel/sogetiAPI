
import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as cors from "cors";
import routes from "./routes";

//Connects to the Database -> then starts the express
createConnection()
    .then(async connection => {
        // Create a new express application instance
        const app = express();
        const port = process.env.PORT || 3000;

        // Call midlewares
        app.use(cors());
        app.use(helmet());
        app.use(bodyParser.json());

        //Set all routes from routes folder
        app.use("/", routes);

        app.listen(port, () => {
            console.log("Server started on port"+ port + "!");
        });
    })
    .catch(error => console.log(error));
