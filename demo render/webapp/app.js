const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

// Serve i file statici (HTML, CSS, JS) dalla cartella "public"
app.use(express.static(path.join(__dirname, "public")));

// Rotta principale per servire la mappa
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/API/", (req, res) => {
     const risposta={
        "auth": process.env.AUTHOR,
        "message": process.env.MESSAGE
     };
     res.send(JSON.stringify(risposta));   
    }
);
// Avvia il server
app.listen(process.env.PORT, () => {
    console.log(`Server raggiungibile all'indirizzo http://localhost:${process.env.PORT}`);
    console.log(`${process.env.MESSAGE}`);
});
