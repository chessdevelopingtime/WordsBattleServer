import { checkData } from './../helpers/helpers'
import { WS } from '../helpers/wss/ws'
import { lobbyLoop } from './lobbyLoop'

import { LobbyMessages, LobbyData, LobbySchema, MainMessages, TMessageLoop } from './types'

export const mainLoop: TMessageLoop<MainMessages> = (ws) => {
  console.log('smb connected')
  ws.on('lobby', (data: LobbyData) => {
    checkData(LobbySchema, data)

    console.log(`add user: ${data.userId} to lobby`)

    const { userId, animation } = data
    ws.meta = { ...ws.meta, animation, userId }

    lobbyLoop((ws as any) as WS<LobbyMessages>, null)
  })
}
