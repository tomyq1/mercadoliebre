const express = require('express');

const path = require('path'); 

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.static('views'))

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto '+PORT);
});

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'));
});

