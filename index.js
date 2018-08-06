const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Nothing to see here!"));

app.get("/getFile", (req, res) => {
    return new Promise(() => {
        const getter = require("./getFile");
        getter.getFile()
            .then((result) => {
                res.send(result);
            })
            .catch((error) => {
                res.send(error);
            });
    });
});

app.listen(3000, () => console.log("TBPM is listening on port 3000!"));