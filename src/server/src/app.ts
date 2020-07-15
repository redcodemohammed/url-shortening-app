import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { createServer } from "http";
import { resolve } from "path";

// import routes
import router from "./routes";

const app = express(); //create a new express app
const server = createServer(app); //create an http server

// ger settings
const PORT = process.env.PORT || 3000;
const DEV = !!process.env.DEV || false;

// use the middlewares
app.use(
	helmet({
		hidePoweredBy: true,
		noSniff: true,
		xssFilter: true
	})
);
app.use(morgan("dev"));
app.use(express.json());

// add routes here
app.use(router);

// server client folder
if (!DEV) {
	app.use(express.static(resolve("dist/client")));
	app.use((req, res) => res.sendFile(resolve("dist/client/index.html")));
}

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
