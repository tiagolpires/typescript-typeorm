import express from 'express'

const app = express()

app.get('/', (req,res) => {
    res.send('sucesss')
})

app.listen(3001)