document.getElementById('addNovoItem').addEventListener('click', adicionarItem);
document.getElementById('inputNovoItem').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        adicionarItem();
    }
});

function adicionarItem() {
    var novoItemTexto = document.getElementById('inputNovoItem').value.trim(); // coletar o texto do input e aparar os espaços em branco se existirem
    if (novoItemTexto !== '') { // Verifica se o texto não está vazio
        var listaAtividades = document.getElementById('listaAtividades');
        var novoItem = document.createElement('li'); // novo elemento li
        novoItem.innerHTML = '<div class="inputs"><input type="checkbox" class="checkbox"/><span class="txtItem">' + novoItemTexto + '</span></div><button class="remover">X</button>'; //estutura novo li
        listaAtividades.appendChild(novoItem); // novo item lista
        document.getElementById('inputNovoItem').value = ''; // limpar o campo de texto
        
        // botao de remover
        novoItem.querySelector('.remover').addEventListener('click', removerItem);

        //modificar para traçado quando clicar no check
        novoItem.querySelector('.checkbox').addEventListener('change', function() {
            if (this.checked) {
                novoItem.classList.add('checked');
            } else {
                novoItem.classList.remove('checked');
            }
        });

    }
}

//funcao para remover elementos da list
function removerItem() {
    var listItem = this.parentNode; 
    listItem.parentNode.removeChild(listItem);
}

