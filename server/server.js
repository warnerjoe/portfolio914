const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {origin: ["http://localhost:3000"],};

const port = 5000;

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({"fruits": ["apple", "orange", "mango"]})
})

app.listen(port, () => {
    console.log(`server started on ${port}`)
});