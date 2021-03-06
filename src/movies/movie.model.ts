/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/array-type */

import mongoose from 'mongoose'
import { IComment } from '../comments/comment.model'

export interface IMovie extends mongoose.Document {
	Title: String
	Year: String
	imdbID: String
	Poster: String
	comments: Array<IComment>
}

const movieSchema = new mongoose.Schema({
	Title: String,
	Year: String,
	imdbID: {
		type: String,
		required: true,
		unique: true,
	},
	Poster: String,
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment',
		},
	],
})

export const Movie = mongoose.model<IMovie>('Movie', movieSchema)
