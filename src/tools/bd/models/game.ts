import { Document } from 'mongodb'
import { Schema, model } from 'mongoose'
import { themeSchema } from './theme'

type Game = {
  theme: string
  rows: string[][]
}

// ! not sure about generic types
const gameSchema = {
  theme: themeSchema.name,
  rows: { type: [[{ type: String, required: true }]] }
}

export const GameModel = model<Game>('game', new Schema<Game>(gameSchema))
