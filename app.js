import express from "express" // importa express
import "dotenv/config" //importa dotenv para usar váriaveis do arquivo .env
import {dataBase}  from "./database.js" //importa a instância do sequelize para conectar com o banco de dados
import  "./model/relacionamentos.js" //importa os relacionamentos entre os modelos

const app = new express() //cria uma instância do express

// await dataBase.sync() //<--Sincroniza o banco de dados(atualiza o banco de dados com as alterações feitas no modelo)

app.listen(3000, () => {console.log("Servidor rodando na porta 3000")}) //inicia o servidor na porta 3000
