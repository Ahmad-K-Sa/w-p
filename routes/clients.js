const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { ClientList, validate } = require("../models/client");

router.get("/", async (req, res) => {
  const clients = await ClientList.find().sort("name");
  res.send(clients);
});

router.get("/:id", async (req, res) => {
  const client = await ClientList.findById(req.params.id);
  //const client = clients.find(c => c.id === parseInt(req.params.id));
  if (!client) return res.status(404).send("the client was not found");
  res.send(client);
});

router.post("", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error);

  let client = new ClientList({
    name: req.body.name
  });
  client = await client.save();

  res.send(client);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error);

  const client = await ClientList.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );

  if (!client) return res.status(404).send("the client was not found");

  res.send(client);
  //look up the client
  // if not existing return 404
  // const client = clients.find(c => c.id === parseInt(req.params.id));
  // if(!client) return res.status(404).send("the client was not found");
  //validate
  //if invalid return 400 - bad request

  // const {error}  = validateClient(req.body);
  // if(error) return res.status(400).send(error);

  // //update the client
  // client.name = req.body.name;
  // //return the updated request
  // res.send(client);
});

router.get("/getEdit", (req, res) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false
  });
});

router.delete("/:id", async (req, res) => {
  const client = await ClientList.findByIdAndRemove(req.params.id);
  if (!client) return res.status(404).send("the client was not found");
  res.send(client);
  // //look up the client
  // //Not existing return 404
  // const client = clients.find(c => c.id === parseInt(req.params.id));
  // if(!client) return res.status(404).send("the client was not found");
  // //delete
  // const index = clients.indexOf(client);
  // clients.splice(index,1);
  // //return the same client
  // res.send(client);
});
module.exports = router;
