const express = require("express")
const { send } = require("express/lib/response");
const router = express.Router();

const clientsController = require ("../Controllers/clients")

router.get("/", (req, res, next) => {
    clientsController.getAll(req, res)
    });

    router.post("/", (req,res, next) => {
        clientsController.create(req, res)
    });

/*router.get("/:clientID", (req, res, next) => {
    const id_aluno = req.params.clientID

    if (id_aluno === "especifico"){
        res.status(200).send({
            message: "id especifico",
            id_aluno: id_aluno
        })
        } else {
            res.status(200).send({
                message: "Cliente especifico"
            })
        }
})*/

router.patch("/:id", (req, res, next) => {
    clientsController.update(req, res)
});

router.delete("/:id", (req, res, next) => {
   clientsController.delete(req, res)
})

module.exports = router;
