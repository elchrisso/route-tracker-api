import app from './src/server'
import cors from 'cors'

const PORT = 3000

app.use(cors())
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})