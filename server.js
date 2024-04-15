const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.static('public'))

const hide_remove = fs.readFileSync("/Users/storm/working/htmx/hyperscript/playground/html/hide_remove.html")
const drag = fs.readFileSync("/Users/storm/working/htmx/hyperscript/playground/html/drag.html")
const modal = fs.readFileSync("/Users/storm/working/htmx/hyperscript/playground/html/modal.html")
const goto = fs.readFileSync("/Users/storm/working/htmx/hyperscript/playground/html/goto.html")
const input_mirroring = fs.readFileSync("/Users/storm/working/htmx/hyperscript/playground/html/input_mirroring.html")
const password_visibility = fs.readFileSync("/Users/storm/working/htmx/hyperscript/playground/html/password_visibility.html")

app.get("/playground/hide_remove", (req, res) => {
    res.send(hide_remove);
})

app.get("/playground/drag", (req, res) => {
    res.send(drag);
})

app.get("/playground/modal", (req, res) => {
    res.send(modal);
})

app.get("/playground/goto", (req, res) => {
    res.send(goto);
})

app.get("/playground/input_mirroring", (req, res) => {
    res.send(input_mirroring);
})

app.get("/playground/password_visibility", (req, res) => {
    res.send(password_visibility);
})

const PORT = process.env.PORT || 1330;

app.listen (PORT, () => {
    console.log(`App is now running on port: ${PORT}`);
})