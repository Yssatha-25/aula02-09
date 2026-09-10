
import { pedidos } from "../models/pedidosModel.js";
import * as pedidoService from "../services/pedidosService.js";

export async function criarPedido(req, res) {

    try {

        const pedido = await pedidoService.criarPedido(req.body);

        pedidos.push(pedido);

        return res.status(201).json({
            mensagem: "O pedido foi criado com sucesso.",
            pedido: pedido
        });

    } catch (erro) {

        return res.status(400).json({
            mensagem: "Erro ao criar pedido.",
            erro: erro.message
        });

    }
}

export async function listarPedidos(req, res) {

    try {

        return res.status(200).json(pedidos);

    } catch (erro) {

        return res.status(400).json({
            mensagem: "Erro ao listar pedidos.",
            erro: erro.message
        });

    }
}

export async function buscarPedido(req, res) {

    try {

        const id = Number(req.params.id);

        const pedido = pedidos.find(p => p.id === id);

        if (!pedido) {

            return res.status(404).json({
                mensagem: "Pedido não encontrado."
            });

        }

        return res.status(200).json(pedido);

    } catch (erro) {

        return res.status(400).json({
            mensagem: "Erro ao buscar pedido.",
            erro: erro.message
        });

    }
}
