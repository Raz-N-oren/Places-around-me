import express from "express";
import cors from "cors";
import appConfig from "./2-utils/app-config";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/route-not-found";
import controller from "./6-controllers/controller";

// Create express server:
const server = express();

// Allow all sites to access our backend: 
server.use(cors());

// Creates request.body object if exists:
server.use(express.json())

// Tell the server to listen to any router written in our controller:
server.use("/api", controller);
server.use("*", routeNotFound);

// Catch all middleware:
server.use(catchAll);

// Run the server:
server.listen(appConfig.port, () => console.log(`Listening on http://localhost:${appConfig.port}`));

