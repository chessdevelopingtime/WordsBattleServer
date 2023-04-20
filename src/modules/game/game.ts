import {GameMap} from "./gameMap";

export class Game {
  constructor(public id: string, public map: GameMap, public playerIds: string[]) {}

  wordsLeft = Object.keys(this.map.words).length

  CheckMatch = (match: string) => {
    if (this.map.words[match]) {
      this.map.words[match] = false
      this.wordsLeft--
      return true
    }
    return false
  }
}
