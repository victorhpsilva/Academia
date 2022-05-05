const { Sequelize, where } = require("sequelize");
const sequelize = require("../db/db")
const Clients = require("../Models/clients")

module.exports = {
    async getAll(req, res) {
        const sequelize = new Sequelize("academia", "root", "senac",{
            host: "localhost",
            dialect: "mysql"
        });
        const clients = await Clients(sequelize, Sequelize.DataTypes).findAll()
        res.status(200).send(clients)
    },

    async create (req, res){
        const sequelize = new Sequelize ("academia", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await Clients(sequelize, Sequelize.DataTypes).create(
            {
                nome_aluno: req.body.nome_aluno,
                data_nascimento: req.body.data_nascimento,
                altura_aluno: req.body.altura_aluno,
                peso_aluno: req.body.peso_aluno,
                forma_pagamento: req.body.forma_pagamento,
                email_aluno: req.body.email_aluno,
                senha_aluno: req.body.senha_aluno
            })
            res.status(200).send({
                message: "Cliente cadastrado com sucesso"
            })
        
    },

    async update(req, res){
        const sequelize = new Sequelize("academia", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await Clients(sequelize, Sequelize.DataTypes).update
        (
            {
                nome_aluno: req.body.nome_aluno,
                data_nascimento: req.body.data_nascimento,
                altura_aluno: req.body.altura_aluno,
                peso_aluno: req.body.peso_aluno,
                forma_pagamento: req.body.forma_pagamento,
                email_aluno: req.body.email_aluno,
                senha_aluno: req.body.senha_aluno
            },
            {
                where: { id: req.params.id }
           }
        );
        res.status(200).send("Cliente atualizado com sucesso")
    },

    async delete(req, res){
        const sequelize = new Sequelize("academia", "root", "senac", {
            host: "localhost",
            dialect: "mysql"
        });
        await Clients(sequelize, Sequelize.DataTypes).destroy
        (
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).send("Cliente deletado com sucesso")
    },
}