const Server = require("./src/models/server");

require('dotenv').config({
  path: "src/env/.env",
});

const server = new Server();

server.execute();


