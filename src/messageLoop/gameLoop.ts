import { WS } from './../helpers/wss/ws'
import { GameMessages, TMessageLoop, GameMeta } from './types'
import { State } from '../state/state'
import { WSS } from '../helpers/wss/wss'
import {Game} from "../modules/game/game";

export const gameLoop: TMessageLoop<GameMessages, GameMeta, Game> = async (ws, game) => {
  ws.meta.gameId = game.id
  const endGameDelay = 300000;
  const [opponentId] = State.games[game.id].playerIds.filter((playerId) => playerId !== ws.meta.userId)
  const opponent = (WSS.clients[opponentId] as any) as WS<GameMessages, GameMeta>
  ws.emit('game:start', { rows: game.map.gameMap, theme: game.map.theme })
  setTimeout(endGameByTimeout, endGameDelay);
  console.log(`${Date.now()} set timeout:${endGameDelay} for ${ws.meta.userId} of ${game.id} game`)

  ws.on('game:match', (match: string) => {
    if (game.CheckMatch(match)) {
      ws.emit('game:match:success')
      opponent.emit('game:match:enemy', {
        animation: ws.meta.animation,
        match
      })
      if (!game.wordsLeft) {
        endGame();
        console.log(`${Date.now()} game:${game.id} ended with the last match of the user:${ws.meta.userId}`)
      }
    } else ws.emit('game:match:failed')
  })

  function endGame() {
    ws.emit('game:end')
    opponent.emit('game:end')
    ws.clean(['game:match'])
    WSS.removeClients(game.playerIds)
    State.removeGame(game.id)
  }

  function endGameByTimeout() {
    endGame()
    console.log(`${Date.now()} game:${game.id} ended by timeout for the user:${ws.meta.userId}`)
  }
}


