import e from "express";
import "dotenv/config";
import product_router from "./routes/productRoute.js";


const app = e();

app.use(e.json());

app.use("/product", product_router);

app.listen(process.env.API_PORT, () => console.log("Servidor executando na porta " + process.env.API_PORT));