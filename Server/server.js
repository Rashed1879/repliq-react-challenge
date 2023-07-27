const auth = require('json-server-auth');
const jsonServer = require('json-server');
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

// Bind the router db to the app
app.db = router.db;
app.use(auth);
app.use(router);
app.use(middlewares);

server.listen(port);
