import { Schema, model } from 'mongoose'

type Lobby = {
  mode: 'duel'
  userIds: string[]
}

// ! not sure about generic types
const lobbySchema = new Schema<Lobby>({
  mode: {
    type: String,
    enum: ['duel'],
    required: [true, 'game mode required']
  },
  userIds: {
    type: [{ type: String }],
    required: [true, 'userIds required']
  }
})

export const LobbyModel = model<Lobby>('lobby', lobbySchema)
