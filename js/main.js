
let addProductCart = document.getElementById('first');

let texto = document.createElement('ul');
let list = document.getElementById('productCart');


let valor = document.getElementById('product_name1').innerHTML;
let price = document.getElementById('product_price1').innerHTML;


addProductCart.onclick = () => {
    texto.innerHTML += `<li>${valor} - ${price}</li>`;
    list.appendChild(texto);

};

