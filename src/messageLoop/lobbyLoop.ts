import { WSS } from '../helpers/wss/wss'
import { WS } from '../helpers/wss/ws'
import { LobbyMessages, LobbyMeta, TMessageLoop, GameMessages } from './types'
import uuid from 'uuid-random';

import { gameLoop } from './gameLoop'
import { State } from '../state/state'
import {MapHolder} from "../modules/game/mapHolder";
import {Game} from "../modules/game/game";

export const lobbyLoop: TMessageLoop<LobbyMessages, LobbyMeta> = async (ws) => {
  if (!ws.meta.userId) console.log(`user with id ${ws.meta.userId} error`)

  if (WSS.clients[ws.meta.userId]) {
    ws.emit('error:lobby', `u (userId: ${ws.meta.userId}) already exist in lobby`)
    console.log(`user with id ${ws.meta.userId} already exist in lobby`)
    return
  }

  // * add self to lobby
  WSS.clients[ws.meta.userId] = ws
  State.lobby.push(ws)

  // * check if lobby has players in waiting
  if (State.lobby.length >= 2) {
    const opponent = State.lobby[0] as WS<LobbyMessages, LobbyMeta>

    // * remove players from lobby
    State.cleanLobby()
    
    const game = new Game(uuid(), MapHolder.constructMap(), [ws.meta.userId, opponent.meta.userId])
    State.games[game.id] = game
  
    gameLoop((opponent as any) as WS<GameMessages>, game)
    gameLoop((ws as any) as WS<GameMessages>, game)
  } else {
    ws.emit('lobby:wait')
  }
}
