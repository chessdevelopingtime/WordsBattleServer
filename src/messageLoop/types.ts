import { IWsMessages } from '../helpers/wss/types'
import { WS } from '../helpers/wss/ws'
import { z } from 'zod'

export type TMessageLoop<T extends IWsMessages, TMeta = any, TData = any> = (ws: WS<T, TMeta>, data: TData) => void

export type GameMessages = IWsMessages &
  ('game:start' | 'game:end' | 'game:match' | 'game:match:success' | 'game:match:failed' | 'game:match:enemy')
export type GameMeta = { gameId: string } & LobbyMeta

export type LobbyMessages = IWsMessages & ('lobby:wait' | 'error:lobby')
export type LobbyMeta = LobbyData

export type MainMessages = IWsMessages & 'lobby'

export type LobbyData = {
  userId: string
  animation: string
}

// ? Zod schemas
export const LobbySchema = z.object({
  userId: z.string(),
  animation: z.string()
})
