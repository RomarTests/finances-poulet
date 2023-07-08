const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo! C\'est les finances Poulet  qui vous parle.')
})
app.listen(process.env.PORT || 3000)
