const { Model } = require("sequelize") 
module.exports = (sequelize, DataTypes) => {
    class Clients extends Model {}

    Clients.init({
        nome_aluno: DataTypes.STRING (35),
        data_nascimento: DataTypes.DATE,
        altura_aluno: DataTypes.DECIMAL (3,2),
        peso_aluno: DataTypes.DECIMAL (6,3),
        forma_pagamento: DataTypes.STRING (20),
        email_aluno: DataTypes.STRING (70),
        senha_aluno: DataTypes.STRING (15)
    },
    { sequelize,
        modelName: "clients",
        timestamps: false
    });

    return Clients
}