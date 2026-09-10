import { pedidos } from "pedidosModel";

export async function criarPedido (req, res) {
    try {
        const pedido = await pedidoService.criar(req.body);
        pedidos.push(pedido)
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
