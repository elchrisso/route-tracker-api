import monk from 'monk'
import monkDebug from 'monk-middleware-debug'

const db = monk('localhost:27017/route-tracker')
db.addMiddleware(monkDebug)

export default db