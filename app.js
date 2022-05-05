const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const clientRoute = require("./Routes/clientRoute")

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/clients", clientRoute)

app.use((req, res, next) => {
    const erro = new Error("Rota não encontrada")
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro:{
            message: error.message
        }
    })
})

module.exports = app;