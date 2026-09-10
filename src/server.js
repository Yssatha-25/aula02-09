
import express from "express";
import pedidosRoutes from "./routes/pedidosRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(pedidosRoutes);

app.get("/", (req, res) => {
    return res.status(200).json({
        mensagem: "API de pedidos funcionando."
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

