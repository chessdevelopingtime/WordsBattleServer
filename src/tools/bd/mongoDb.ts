import mongoose, { Connection } from 'mongoose'

export async function mongoDbConnect(onConnect: (db: Connection) => void) {
  const uri = `mongodb+srv://admin:${process.env.MongoDbAdminPassword}@cluster0.brmj1.mongodb.net/mainDb?retryWrites=true&w=majority`

  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  const db = mongoose.connection

  onConnect(db)
}
