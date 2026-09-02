import express from "express";
const router = express.Router();

import { criarPedido, listarPedidos, buscarPedido } from "../controllers/pedidosController.js";

router.post("/pedidos", criarPedido);
router.get("/pedidos", listarPedidos);
router.get("/pedidos:id", buscarPedido);

export default router;