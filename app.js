const express = require('express')
const app = express()

app.use(express.static(__dirname + '/'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html')
})

const PORT = 3030
app.listen(PORT, () => {
    console.log(`Server Address: http://localhost:${PORT}`);
})