import app from './src/server'

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})