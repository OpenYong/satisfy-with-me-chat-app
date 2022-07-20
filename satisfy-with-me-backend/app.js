const path = require("path");

const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const port = 8080;

// const publicDirectoryPath = path.join(__dirname, "../public");

const io = new Server(httpServer, {
  /* options */
});

io.on("connection", (socket) => {
  socket.emit("connect", "Welcome to Satisfy with me!");
  socket.on("chatMessage", (msg) => {
    io.emit("sendCheck", msg);
  });
});

// app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
