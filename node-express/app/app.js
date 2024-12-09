const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
res.send("Hello, welcome to my NodeJS app!");
});

app.listen(port, () => {
console.log(`myapp is listening on port ${port}!`);
})