const express = require('express');
const app = express();
const cors = require('cors');
require ("dotenv").config()
const port = process.env.PORT || 3500

app.use(cors())

app.get('/', (req, res) => {
res.send("Hello Omar")	
});


const userRouter=require("./routes/user")
const productRouter=require("./routes/products")
app.use(express.json())
app.use("/users",userRouter)
app.use("/products",productRouter)




app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});