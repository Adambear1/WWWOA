require("dotenv").config();
const express = require("express");
const app = express();
const router = require("express").Router();
const db = require("../../models");
const socketio = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log(socket);
  // socket.on("joinRoom", ({username, room})=>{
  //     const user =
  // })
});

module.exports = router;
