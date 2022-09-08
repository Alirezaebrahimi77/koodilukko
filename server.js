const express = require("express")
const cors = require('cors')
const app = express()
const path = require('path');
require('dotenv').config()

app.use(express.json());
app.use(cors())

// setting up config file
if(process.env.NODE_ENV !== 'PRODUCTION'){

    require("dotenv").config({path: "config/config.env"});
    
}

// Import route
const auth = require("./routes/auth")
app.use("/api", auth)



if(process.env.NODE_ENV == 'PRODUCTION'){
    app.use(express.static(path.join(__dirname, "./frontend/build")))

    app.get('*', (req, res)=> {
        res.sendFile(path.resolve(__dirname, "./frontend/build/index.html"))
    })
}

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on PORT ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})