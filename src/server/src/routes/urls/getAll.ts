import { Request, Response } from "express";
import urlModel from "../../models/Url";

export default async (req: Request, res: Response) => {
	try {
		let urls = await urlModel.find();

		return res
			.status(200)
			.json({ error: false, urls })
			.end();
	} catch (err) {}
};
