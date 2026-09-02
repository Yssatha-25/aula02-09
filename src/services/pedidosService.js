import { dados } from "../models/pedidosModel.js";

export async function criarPedido(dados) {

    const produto = await Produto.findByPk(dados.produtoId);

    if (!produto) {
        throw new Error("Produto não encontrado");
    }

    if (produto.estoque < dados.quantidade) {
        throw new Error("Estoque insuficiente");
    }

    const total =
        Number(produto.preco) * dados.quantidade;

    const pedido = await Pedido.create({
        dados,
        total
    });

    return pedido;
}
