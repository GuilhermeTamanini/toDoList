let listaCompras = [
    
]
document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        const btn = document.querySelector("#btnAdd");
      
      btn.click();
      
    
    }
  });

  function itemRemoved(){
     const removed = document.getElementsByTagName('li').setAttribute('checked').remove();
  }

function alternarItem(item) {
    const valor = listaCompras.find( (i) => i === item)
    valor.removido = !valor.removido
    renderListaCompras()
}

function addItemUL(item) {
    const inputItem = document.createElement('input')
    inputItem.setAttribute('type', 'checkbox')
    inputItem.addEventListener('click', () => alternarItem(item))
    
    const labelItem = document.createElement('label')
    labelItem.appendChild(inputItem)
    labelItem.appendChild(document.createTextNode(item.item))
    
    const itemLista = document.createElement('li')
    itemLista.appendChild(labelItem)
    if (item.removido) {
        itemLista.setAttribute('class', 'removed')
        inputItem.setAttribute('checked', true)
    }
    
    const lista = document.getElementById('lista-compra')
    lista.appendChild(itemLista)
}

function renderListaCompras() {
    document.getElementById('lista-compra').innerHTML = ''

    for (const item of listaCompras) {
        addItemUL(item)
    }
}

function addItem() {
    const newItemText = document.getElementById('new-item').value
    if (newItemText != '') {
        const newItem = {id: 1, item: newItemText}
        listaCompras.push(newItem)
        addItemUL(newItem)
    }
}

renderListaCompras()