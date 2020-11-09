const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {conectDB} = require('./db')
const app = express();

const port = 3000

app.use(cors());
app.use(bodyParser.json())

conectDB()

require('./routes/blog')(app);
require('./routes/user')(app);

app.listen(port,()=>{
    console.log('Nos conectamos en el puerto', port);
    console.log('Servidor levantado correctamente!')
})