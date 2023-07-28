const auth = require('json-server-auth');
const jsonServer = require('json-server');
const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

app.use(cors());

// Bind the router db to the app
app.db = router.db;
app.use(auth);
app.use(router);
app.use(middlewares);

const rules = auth.rewriter({
	users: 640,
	products: 660,
	carts: 660,
});

app.use(rules);

server.listen(port);
