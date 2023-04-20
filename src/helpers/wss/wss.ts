import { Server } from 'http'
import { mainLoop } from '../../messageLoop/mainLoop'
import { LobbyMessages } from '../../messageLoop/types'
import WebSocket from 'ws'
import { WS } from './ws'

export class WSS {
  public static wss: WebSocket.Server = null!
  public static clients: Record<string, WS<LobbyMessages>> = {}

  static run = (server: Server) => {
    WSS.wss = new WebSocket.Server({ server })
    WSS.wss.on('connection', (ws) => {
      mainLoop(new WS(ws), null)
    })
  }

  static removeClients = (clientIds: string[]) => clientIds.forEach((id) => delete WSS.clients[id])
}
