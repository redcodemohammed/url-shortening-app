import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { createServer } from "http";
import { connect } from "mongoose";
import { resolve } from "path";

// import routes
import router from "./routes";

const app = express(); //create a new express app
const server = createServer(app); //create an http server

// ger settings
const PORT = process.env.PORT || 3000;
const DEV = !!process.env.DEV || false;
const MONGODB_URL = process.env.MONGODB_URL;

// connect to mongodb
try {
	if (!MONGODB_URL) throw new Error("mongodb url must be provided");
	connect(MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	}).then(() => console.log("connected to db"));
} catch (err) {
	console.log(err);
	process.exit(0);
}

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
if (DEV) app.use(cors());

// add routes here
app.use(router);

// server client folder
if (!DEV) {
	app.use(express.static(resolve("dist/client")));
	app.use((req, res) => res.sendFile(resolve("dist/client/index.html")));
}

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
