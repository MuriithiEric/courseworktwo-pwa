const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const http = require("http");
const app = express();
const port = process.env.PORT || 3000;


// MIDDLEWARES
// use Parser Middleware
app.use(express.json())