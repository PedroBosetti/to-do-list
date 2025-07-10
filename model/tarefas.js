import { dataBase }  from "../database.js"
import { DataTypes } from "sequelize"

//Cria a tabela "tarefas" com as colunas id, titulo, descricao, data_fornecida, prioridade, tipo_da_data e situacao_da_tarefa 
const Tarefas = dataBase.define("tarefas", {
    id: {
        primaryKey: true, //<-- Define como chave primária
        type: DataTypes.INTEGER, //<-- Define como inteiro
        autoIncrement: true //<-- Incrementa automaticamente o id
    },
    titulo: {
        type: DataTypes.STRING, //<-- Define como texto
        allowNull: false //<-- Torna obrigatório que o titulo seja fornecido
    },
    descricao: {
        type: DataTypes.STRING //<-- Define como texto
    },
    data_fornecida: {
        type: DataTypes.DATE, //<-- Define como data
        allowNull: false //<-- Torna obrigatório que a data seja fornecida
    },
    prioridade: {
        type: DataTypes.ENUM("baixa", "media", "alta"),//<-- Define valores específicos para prioridade
        allowNull: false, //<-- Torna obrigatório que a prioridade seja fornecida
        defaultValue: "media" //<-- Define o valor padrão como "media"
    },
    tipo_da_data: {
        type: DataTypes.ENUM( "data_prazo"/*fazer tarefa "ATÉ" a data fornecida*/, "data_marcada"/*fazer tarefa "NA" data fornecida */ ),//<-- Define valores específicos
        allowNull: false, //<-- Torna obrigatório que o tipo de data seja fornecida
        defaultValue: "data_prazo"//<-- Define o valor padrão como "data_prazo"
    },
    situacao_da_tarefa: {
        type: DataTypes.ENUM( "fazer", "fazendo", "feita", "cancelada", "adiada"),//<-- Define valores específicos
        allowNull: false, //<-- Torna obrigatório que a situação da tarefa seja fornecida
        defaultValue: "fazer" //<-- Define o valor padrão como "fazer"
    },
    usuarioId: {
        type: DataTypes.INTEGER, //<-- Define como inteiro
        allowNull: false,// <-- Torna obrigatório que o id do usuário seja fornecido
        // Define a chave estrangeira que referencia a tabela de usuários
        references: {
            model: 'Usuarios',
            key: 'id'
        }
    },
})

export default Tarefas