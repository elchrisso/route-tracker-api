import connections from './connections.json'
import monk from 'monk'
import monkDebug from 'monk-middleware-debug'

const db = monk(connections.monkUrl)
db.addMiddleware(monkDebug)

export default db