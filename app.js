const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

const UserController =require("./controller/user");
const productController = require("./controller/product");

const authentication = require("./middleware/authentication");
const authorization = require("./middleware/authorization");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/login',UserController.userLogin);
app.post("/user",UserController.createUser);

app.use(authentication);

app.get("/products", productController.getAllProduct);
app.use("/products/:id", authorization);
app.get("/products/:id", productController.getAllProduct);

app.listen(PORT,()=>{
    console.log(`server running http://localhost:${PORT}`)
});