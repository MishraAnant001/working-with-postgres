import { Sequelize } from "sequelize"
import config from "config"

const user: string = config.get("DB_USER")
const host: string = config.get("DB_HOST")
const database: string = config.get("DB_NAME")
const password: string = config.get("DB_PASSWORD")
const port: number = config.get("DB_PORT")
// console.log(user,host,database,password,port)
export const sequelize = new Sequelize(database,user,password,{
    host: host,
    port: port,
    dialect: "postgres",
    logging:false
})

export const connectdb = async () => {

    sequelize.authenticate()
    console.log("Connection has been established successfully.")
    sequelize.sync({alter:true})
    console.log("Database synchronized")
}
