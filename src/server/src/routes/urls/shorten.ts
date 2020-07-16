import { Request, Response } from "express";
import validator from "validator";
import randomCode from "../../tools/randomCode";
import urlModel from "../../models/Url";

export default async (req: Request, res: Response) => {
	try {
		let url: string = req.body.url; //get the url from the body

		// validate that url:
		if (!url || !validator.isURL(url))
			return res
				.status(400)
				.json({ error: true, reason: "The url is not valid" })
				.end();

		// check if already shortened:
		if (url.endsWith("/")) url = url.slice(0, -1);
		let shortVersion = await urlModel.findOne({ originalUrl: url });

		// shorten the url:

		if (!shortVersion) {
			let urlShortCode = randomCode();
			shortVersion = await urlModel.create({
				originalUrl: url,
				shortUrl: `https://pbid.io/${urlShortCode}`,
				urlShortCode
			});
		}

		return res
			.status(200)
			.json({ error: false, url: shortVersion })
			.end();
	} catch (err) {
		return res
			.status(500)
			.json({ error: true, reason: "Something wrong in our side :(" })
			.end();
	}
};
