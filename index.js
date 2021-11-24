const express = require('express')
const cityRouter = require('./routes/cityRoute')
const app = express()
const PORT = process.env.PORT || 8000
app.use(express.json())

app.listen(PORT, () => {
    console.log('server listening on port: ' + PORT);
})


app.use(cityRouter)