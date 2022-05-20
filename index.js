const express = require("express");
const routerApi = require("./routes/index.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hello to my ToDoList API");
})

routerApi(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
