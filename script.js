document.getElementById('addNovoItem').addEventListener('click', adicionarItem);
document.getElementById('inputNovoItem').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        adicionarItem();
    }
});

function adicionarItem() {
    let novoItemTexto = document.getElementById('inputNovoItem').value.trim();
    if (novoItemTexto !== '') { 
        let listaAtividades = document.getElementById('listaAtividades');
        let novoItem = document.createElement('li'); 
        novoItem.innerHTML = '<div class="inputs"><input type="checkbox" class="checkbox"/><span class="txtItem">' + novoItemTexto + '</span></div><button class="remover">X</button>'; //estutura novo li
        listaAtividades.appendChild(novoItem); 
        document.getElementById('inputNovoItem').value = ''; 
        
        // botao de remover//
        // novoItem.querySelector('.remover').addEventListener('click', function() {
        //     removerItem(novoItem);
        // });

        const removeButton = novoItem.querySelector('.remover');
        removeButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent button default behavior
            removerItem(novoItem);
        });

        novoItem.querySelector('.checkbox').addEventListener('change', function() {
            if (this.checked) {
                novoItem.classList.add('checked');
            } else {
                novoItem.classList.remove('checked');
            }
        });

        atualizarContador();
    }
}

// function removerItem() {
//     let listItem = this.parentNode; 
//     listItem.parentNode.removeChild(listItem);

//     atualizarContador();
// }

function removerItem(novoItem) {
    const overlay = document.createElement('div');
    overlay.classList.add('body-overlay');
    document.body.appendChild(overlay);
    overlay.style.display = 'block';

    const modal = document.querySelector(".js-modal");
    modal.innerHTML = '<div class="modal-content"><p>Do you want to delete this item?</p><button id="confirmDelete">Yes</button><button id="cancelDelete">No</button></div>';

    modal.style.display = 'block';

    const confirmDeleteBtn = document.getElementById("confirmDelete");
    const cancelDeleteBtn = document.getElementById("cancelDelete");

    confirmDeleteBtn.addEventListener('click', function (event) {
        event.preventDefault(); 

        novoItem.parentNode.removeChild(novoItem);

        modal.style.display = 'none';
        overlay.style.display = 'none';
        atualizarContador();
    });

    cancelDeleteBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });

}




function atualizarContador() {
    let numeroItens = document.getElementById('listaAtividades').getElementsByTagName('li').length;
    document.getElementById('contadorItens').textContent = 'Número de itens: ' + numeroItens;
}