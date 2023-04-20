import { Document } from 'mongodb'
import { Schema, model, connect } from 'mongoose'

type Theme = { name: string } & Document

// ! not sure about generic types
export const themeSchema = {
  name: { type: String, required: true }
}

export const ThemeModel = model<Theme>('theme', new Schema<Theme>(themeSchema))
