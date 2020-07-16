import { Schema, model, Document } from "mongoose";

export interface Url extends Document {
	originalUrl: string;
	shortUrl: string;
	urlShortCode: string;
}

export const urlSchema = new Schema(
	{
		originalUrl: {
			type: String,
			required: String
		},
		shortUrl: {
			type: String,
			required: true,
			unique: true
		},
		urlShortCode: {
			type: String,
			required: true,
			unique: true
		}
	},
	{ timestamps: true }
);

export const urlModel = model<Url>("url", urlSchema);

export default urlModel;
