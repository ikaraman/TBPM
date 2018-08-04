const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/getFile", (req, res) => {
    const getFile = require("./getFile");
    const fileContent = getFile();
    res.send(fileContent);
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));