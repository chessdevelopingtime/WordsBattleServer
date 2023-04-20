import {GameMap} from "./gameMap";

export class MapHolder {
  static readonly FurnitureWords: Record<string, boolean> = {
    '16-8-0-1-2': true,
    '17-18-19-27-35-36-37': true,
    '63-55-47-39-38-37': true,
    '26-25-24-32-40-48-56': true,
    '7-6-5-4': true,
    '23-15-14-13-12': true,
    '57-49-41-33': true,
    '58-50-42-34': true,
    '59-51-43': true,
    '54-46-38-30-29-28': true,
    '39-47-55-63': true,
    '12-11-10-9': true,
    '22-21-20': true
  }

  static readonly FruitsWords: Record<string, boolean> = {
    '0-1-2-10-18': true, // melon
    '7-15-23-22-21-20': true, // orange
    '63-55-47-39-38-37': true, // banana
    '56-48-40-41': true, // lime
    '8-16-24-32-33-34': true, // cherry
    '61-60-59-58-57-49': true, // quince
    '9-17-25-26': true, // pear
    '31-30-29-28-36': true, // lemon
    '6-5-4-3': true, // kiwi
    '14-13-12': true, // fig
    '11-19-27-35-43-42': true, // papaya
    '50-51-52-53': true, // plum
    '44-45-46-54-62': true // mango
  }

  static readonly InsectsWords: Record<string, boolean> = {
    '14-22-30-38-37-36-35': true,
    '25-17-9': true,
    '18-10-2-1-0': true,
    '8-16-24-32-33-34': true,
    '63-55-47-46-45': true,
    '54-53-52-51-50': true,
    '62-61-60-59-58-57-49-41': true,
    '54-46-38-30-29-28': true,
    '42-43-44': true,
    '56-48-40': true,
    '3-11-19': true,
    '39-31-23-15': true,
    '7-6-5-13-21-29': true,
    '4-12-20-28-27-26': true
  }

  static readonly SteelArmsWords: Record<string, boolean> = {
    '26-25-24': true,
    '63-55-47-46-45-44-43': true,
    '51-52-53-54': true,
    '42-50-58-59-60-61-62': true,
    '7-6-5-4-3': true,
    '57-49-41-33-34-35': true,
    '32-40-48-56': true,
    '12-13-14-15-23-31': true,
    '39-38-37-36': true,
    '27-28-29-30': true,
    '22-21-20-19-18-17': true,
    '2-1-0-8-16': true,
    '9-10-11': true
  }

  static readonly BirdsWords: Record<string, boolean> = {
    '0-6-16-24-32': true,
    '4-3-2-1-9-17-25-33': true,
    '5-6-7': true,
    '59-58-57-56': true,
    '55-47-39-31-30-29-28': true,
    '20-21-22-23': true,
    '27-19-11-12-13-14': true,
    '57-49-41-33-34-35': true,
    '40-41-42-34-26-18-10': true,
    '35-43-51-50-49-48': true,
    '36-37-38-46-54': true,
    '45-53-61-62-63': true,
    '44-52-60': true
  }

  static readonly SportEquipmentsWords: Record<string, boolean> = {
    '0-1-2-3-11-19': true,
    '34-33-32-24-16-8': true,
    '10-18-26-27-28-36-44': true,
    '55-54-53-52': true,
    '60-61-63-63': true,
    '57-58-59': true,
    '42-41-40-48-56': true,
    '57-49-41-33-34-35': true,
    '49-50-51-43-35': true,
    '9-17-25': true,
    '21-29-37-45-46-47': true,
    '13-14-15-23-31-39': true,
    '38-30-22': true
  }

  static readonly MusicalInstrumentsWords: Record<string, boolean> = {
    '35-43-51-59-58-57-56': true,
    '3-4-5-6-7': true,
    '14-22-30-38-46': true,
    '53-54-55-47-39-31-23-15': true,
    '60-61-63-63': true,
    '45-37-29-21-13': true,
    '52-44-36-28-27-26': true,
    '34-42-50-49-48': true,
    '41-33-25-17-18-19-20': true,
    '2-1-0-8-16-24-32-40': true,
    '9-10-11-12': true
  }

  static readonly FurnitureGameMap = [
    ['F', 'F', 'E', 'T', 'K', 'S', 'E', 'D'],
    ['U', 'A', 'F', 'O', 'S', 'R', 'I', 'A'],
    ['B', 'C', 'O', 'N', 'D', 'E', 'B', 'H'],
    ['M', 'R', 'A', 'S', 'T', 'E', 'P', 'C'],
    ['O', 'P', 'K', 'O', 'L', 'E', 'R', 'L'],
    ['I', 'M', 'C', 'W', 'T', 'E', 'A', 'A'],
    ['R', 'A', 'A', 'E', 'S', 'B', 'C', 'M'],
    ['E', 'L', 'R', 'P', 'E', 'H', 'C', 'P'],
  ]

  static readonly FruitsGameMap = [
    ['M', 'E', 'L', 'I', 'W', 'I', 'K', 'O'],
    ['C', 'P', 'O', 'P', 'G', 'I', 'F', 'R'],
    ['H', 'E', 'N', 'A', 'E', 'G', 'N', 'A'],
    ['E', 'A', 'R', 'P', 'O', 'M', 'E', 'L'],
    ['R', 'R', 'Y', 'A', 'N', 'A', 'N', 'A'],
    ['M', 'E', 'A', 'Y', 'M', 'A', 'N', 'N'],
    ['I', 'E', 'P', 'L', 'U', 'M', 'G', 'A'],
    ['L', 'C', 'N', 'I', 'U', 'Q', 'O', 'B']
  ]
  
  static readonly InsectsGameMap = [
    ['D', 'I', 'H', 'D', 'M', 'E', 'E', 'W'],
    ['C', 'T', 'P', 'O', 'O', 'V', 'C', 'P'],
    ['I', 'N', 'A', 'R', 'R', 'I', 'R', 'S'],
    ['C', 'A', 'O', 'H', 'P', 'L', 'I', 'A'],
    ['A', 'D', 'A', 'T', 'E', 'K', 'C', 'W'],
    ['Y', 'G', 'B', 'E', 'E', 'P', 'I', 'R'],
    ['L', 'N', 'E', 'G', 'D', 'I', 'M', 'H'],
    ['F', 'I', 'W', 'E', 'C', 'A', 'L', 'T']
  ]

  static readonly SteelArmsGameMap = [
    ['N', 'A', 'L', 'L', 'I', 'A', 'L', 'F'],
    ['C', 'B', 'A', 'T', 'K', 'A', 'T', 'A'],
    ['E', 'E', 'H', 'T', 'Y', 'C', 'S', 'N'],
    ['E', 'X', 'A', 'P', 'I', 'K', 'E', 'A'],
    ['M', 'G', 'E', 'L', 'L', 'U', 'A', 'M'],
    ['A', 'D', 'B', 'S', 'S', 'A', 'L', 'T'],
    ['C', 'U', 'A', 'K', 'R', 'I', 'S', 'U'],
    ['E', 'C', 'Y', 'O', 'N', 'E', 'T', 'C']
  ]

  static readonly BirdsGameMap = [
    ['E', 'O', 'B', 'O', 'B', 'E', 'M', 'U'],
    ['A', 'L', 'N', 'T', 'R', 'I', 'C', 'H'],
    ['G', 'I', 'A', 'S', 'M', 'Y', 'N', 'A'],
    ['L', 'N', 'C', 'O', 'N', 'I', 'K', 'P'],
    ['E', 'K', 'I', 'P', 'R', 'A', 'V', 'M'],
    ['P', 'E', 'L', 'U', 'J', 'E', 'E', 'I'],
    ['N', 'I', 'F', 'F', 'A', 'I', 'N', 'L'],
    ['K', 'W', 'A', 'H', 'Y', 'D', 'E', 'R']
  ]

  static readonly SportEquipmentGameMap = [
    ['R', 'A', 'C', 'K', 'D', 'D', 'L', 'E'],
    ['S', 'B', 'B', 'E', 'A', 'M', 'A', 'L'],
    ['E', 'O', 'I', 'T', 'S', 'H', 'R', 'L'],
    ['T', 'W', 'C', 'Y', 'C', 'E', 'A', 'E'],
    ['A', 'K', 'S', 'W', 'L', 'L', 'O', 'T'],
    ['O', 'L', 'G', 'O', 'E', 'M', 'E', 'T'],
    ['V', 'A', 'R', 'R', 'L', 'L', 'A', 'B'],
    ['E', 'T', 'E', 'E', 'P', 'U', 'C', 'K']
  ]

  static readonly MusicalInstrumentsGameMap = [
    ['M', 'I', 'C', 'B', 'A', 'N', 'J', 'O'],
    ['B', 'D', 'R', 'U', 'M', 'N', 'F', 'T'],
    ['A', 'P', 'I', 'P', 'E', 'A', 'L', 'E'],
    ['L', 'G', 'N', 'I', 'L', 'G', 'U', 'N'],
    ['O', 'A', 'S', 'B', 'O', 'R', 'T', 'I'],
    ['M', 'B', 'I', 'A', 'I', 'O', 'E', 'R'],
    ['R', 'A', 'T', 'N', 'V', 'C', 'L', 'A'],
    ['A', 'R', 'U', 'D', 'L', 'Y', 'R', 'E']
  ]

  private static readonly FurnitureMap: GameMap = new GameMap("Furniture", MapHolder.FurnitureGameMap, MapHolder.FurnitureWords);
  private static readonly FruitMap: GameMap = new GameMap("Fruits", MapHolder.FruitsGameMap, MapHolder.FruitsWords);
  private static readonly InsectMap: GameMap = new GameMap("Insects", MapHolder.InsectsGameMap, MapHolder.InsectsWords);
  private static readonly ColdSteelArmsMap: GameMap = new GameMap("Cold steel arms", MapHolder.SteelArmsGameMap, MapHolder.SteelArmsWords);
  private static readonly BirdsMap: GameMap = new GameMap("Birds", MapHolder.BirdsGameMap, MapHolder.BirdsWords);
  private static readonly SportsEquipmentsMap: GameMap = new GameMap("Sports equipment", MapHolder.SportEquipmentGameMap, MapHolder.SportEquipmentsWords);
  private static readonly MusicalInstrumentsMap: GameMap = new GameMap("Musical instruments", MapHolder.MusicalInstrumentsGameMap, MapHolder.MusicalInstrumentsWords);
  
  static constructMap(){
    switch (MapHolder.getRandomInt(1, 8)){
      case 1: return MapHolder.FurnitureMap;
      case 2: return MapHolder.FruitMap;
      case 3: return MapHolder.InsectMap;
      case 4:  return MapHolder.ColdSteelArmsMap;
      case 5:  return MapHolder.BirdsMap;
      case 6:  return MapHolder.SportsEquipmentsMap;
      case 7:  return MapHolder.MusicalInstrumentsMap;
    }
    throw new Error("map creating exception");
  }

  static getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
