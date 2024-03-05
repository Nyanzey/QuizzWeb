const express = require("express");

const PORT = process.env.PORT || 3000;
const ADDR = "localhost";
const app = express();

app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/home.html");
});

app.listen(PORT, ADDR, () => console.log(`Server running on http://${ADDR}:${PORT}`));
