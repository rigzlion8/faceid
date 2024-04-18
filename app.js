const express = require('express')
const dotenv = require('dotenv').config()

const app = express()

const PORT = process.env.PORT;

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.render('pages/index')
})

app.listen(PORT, () => console.log(`app running on port ${PORT}`));