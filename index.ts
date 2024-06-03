import express from "express"
import cookieParser from "cookie-parser"
import { connectdb } from "./src/db/connect"
import config from "config"
import { mainRouter } from "./src/routes/main.route"
import { errorHandler } from "./src/middlewares/error_handler.middleware"
const app = express()

app.use(express.json())
app.use(cookieParser());
app.use(mainRouter)

app.use(errorHandler)
connectdb()
.then(()=>{
    const port = config.get("SERVER_PORT")
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`)
    })
})

