
let amigos = []

//função adicionar amigo
function adicionarAmigo() {
    let nomes = document.querySelector('input').value;
    if (nomes == '') {
        alert("Por favor, insira um nome");
    } else {
        amigos.push(nomes);
        document.querySelector('input').value = '';
        atualizarAmigos(); // Atualizar amigos
    }
}

// Função atualizar amigos
function atualizarAmigos(){
let lista = document.querySelector("#listaAmigos");
lista.innerHTML = '';

for (let i = 0; i < amigos.length; i++) {
  let itemListaAmigos = document.createElement('li');
  itemListaAmigos.textContent = amigos[i];
  lista.appendChild(itemListaAmigos);
  }
}

//Função sortear amigo
function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.querySelector('#resultado').innerHTML = 'O amigo sorteado foi:' + amigoSorteado;
}