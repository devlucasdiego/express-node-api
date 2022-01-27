const sequence = {
  // Objeto sequence interno (não visível fora do módulo)
  _id: 1,
  get id() {
    return this._id++;
  },
};

const produtos = {};

function salvarProduto(produto) {
  if (!produto.id) produto.id = sequence.id; // Se não existe, adiciona um novo elemento dentro de produtos
  produtos[produto.id] = produto; // Se o produto existe, será substituído pela verão mais nova
  return produto;
}

function getProduto(id) {
  return produtos[id] || {}; // Caso não encontre (null ou undefined), retorna um objeto vazio
}

function getProdutos() {
  return Object.values(produtos); // Retorna todos os valores do objeto Produtos.
}

module.exports = { salvarProduto, getProduto, getProdutos }; // Funções visíveis fora do arquivo.
