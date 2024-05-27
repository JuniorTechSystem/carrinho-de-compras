let somaTotalProdutos = 0;
limpar()

function adicionar(id){
    let adicionarProduto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let subtotal = quantidade * valorUnitario;

    let listaDeProdutos = document.getElementById('listas-produtos');
    listaDeProdutos.innerHTML = listaDeProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$1400</span>
  </section>`;

  somaTotalProdutos = somaTotalProdutos + preço;

   let campoTotal = documet.getElementById('valor-total');
   campoTotal.textContent = `R$ ${somaTotalProdutos}`;
   document.getElementById('quantidade').value = 0;
}



function limpar(){
  somaTotalProdutos = 0 ;
  document.getElementById('listas-produtos').innerHTML = '';
  documet.getElementById('valor-total').textContent = 'R$ 0';



}



