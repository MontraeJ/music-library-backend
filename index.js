//imports
const express = require ("express")
const app = express()

//middleware
app.use(express.json())

//endpoints
//http://localhost:5005 (base URL)

//GET
//http://localhost:5005/
app.get("/", (req, res) => {
    console.log (req.headers)
    res.send("This is a reply or response!");
});

//starting a server-server is always listening for requests
const PORT = process.env.PORT || 5005

app.listen(PORT, () => {
    console.log(`Server running, student! On PORT: ${PORT}`);
});