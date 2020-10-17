const port = 3000;
const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))

app.set("view engine", "ejs");

let tasks = [];

app.get("/", (request, response) => {
    console.log(tasks)
    response.render("./index.ejs", { tasks });
})

app.post("/", (request, response) => {
    const text = request.body.add.trim();
    if(text !== '') {
        tasks.push({
            id: Date.now(),
            text,
        })
    }
    response.redirect('/')
})

app.listen(port, () => {
    console.log(`The server has started and is listening on port number: ${port}`);
});