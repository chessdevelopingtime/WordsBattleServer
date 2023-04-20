import { LobbyMessages } from 'messageLoop/types'
import { Game } from 'modules/game/game'
import { WS } from '../helpers/wss/ws'

export abstract class State {
  public static games: Record<string, Game> = {}
  public static lobby: WS<LobbyMessages>[] = []

  public static cleanLobby = () => (State.lobby = [])
  public static removeGame = (gameId: string) => delete State.games[gameId]
}
