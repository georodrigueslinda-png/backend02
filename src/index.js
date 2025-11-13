import express, { request, response } from "express"
import cors from "cors"
import mysql from "mysql2"
import { people } from "./people.js"
const {DATABASE_HOST, DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD} = process.env
const app = express()
const port = 3333

app.use(cors())
app.use(express.json())
app.get("/", (request, response) => {
    response.json(people)
})
  
app.post("/cadastrar", (request, response) => {
    const { name, email, age, password } = request.body.user

    const insertComand = `
    INSERT INTO geovanna_rodrigues(name, email, age, password)
    VALUES(?, ?, ?, ?)
    `
    database.query(insertComand, [name, email, age, password], (error) => {
        if (error) {
            console.log(error)
            return
        }
         response.status(201).json({ message: "Usuário cadastrado com sucesso!"})
})
})
       


app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
    
})

const database = mysql.createPool({
    database: "DATABASE_NAME",
    host: "DATABASE_HOST",
    user: "DATABASE_USER",
    password: "DATABASE_PASSWORD",
    connectionLimit: 10
})