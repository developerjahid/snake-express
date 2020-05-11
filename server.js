const express = require('express')

const app = express()

//store all js and css
app.use(express.static(__dirname + '/src/public'))

//server sendHtmlFile
app.use('/', function (req, res) {
    res.sendFile(__dirname + '/src/index.html')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))
