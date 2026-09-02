import { pedidos } from "pedidosModel";

export async function criarPedido (req, res) {
    try {
        const pedido = await pedidoService.criar(req.body);
        return res.status(201).json({
            mensagem: "O pedido foi criado com sucesso.",
            pedido: pedido
        });
        pedidos.push(pedido)
    } catch (erro) {
        return res.status(400).json({
            mensagem: "Erro ao criar pedido.",
            erro: erro.message
        });
    }
}
