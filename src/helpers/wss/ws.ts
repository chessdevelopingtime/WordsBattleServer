import type { IWsMessages, TMessage } from './types'
import WebSocket from 'ws'

type TMsgHandler = (data: any) => void
type TSocketMap<T extends IWsMessages> = { [key: string]: TMsgHandler[] }

export class WS<T extends IWsMessages, TMeta = any> {
  private socketMap: TSocketMap<T> = {}
  private ws: WebSocket = null!

  constructor(ws: WebSocket) {
    this.ws = ws
    this.ws.onopen = console.log
    this.ws.on('message', (rawMsg) => {
      const msg = JSON.parse(rawMsg as string) as TMessage
      try {
        this.socketMap[msg.type].forEach((msgHandler) => msgHandler(msg.data))
      } catch (e) {
        this.emit(`${msg.type}:error` as T, `server not listen messages with @type [${msg.type}]`)
      }
    })
  }

  meta = {} as TMeta

  on = (type: T, msgHandler: TMsgHandler) => {
    if (!this.socketMap[type]) this.socketMap[type] = []
    this.socketMap[type].push(msgHandler)
  }

  emit = (type: T, data: any = null) => {
    this.ws.send(JSON.stringify({ type, data }))
  }

  clean = (types: T[]) => types.forEach((type) => delete this.socketMap[type])

  setHost = (wsUrl: string, cb?: () => void) => {
    this.ws = new WebSocket(wsUrl)
    this.ws.onopen = () => cb?.()
  }
}
