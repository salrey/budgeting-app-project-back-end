//DEPENDENCIES 
const app = require("./app")

//CONFIGURATION
const dotenv = require("dotenv")
dotenv.config();
const PORT = process.env.PORT

//LISTEN
app.listen(PORT, () => {
    console.log(`💳 Listening to Port ${PORT} 💲`)
})