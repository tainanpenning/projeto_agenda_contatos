const form = document.getElementById('formulario')
const nomes = []
const numeros = []
let linhas = ''
let quantidadeContatos = 0

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    attQuantidadeContatos()
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nomeContato')
    const inputNumeroContato = document.getElementById('numeroContato')

    if (nomes.includes(inputNomeContato.value)) {
        alert ('Este contato já foi inserido!')
    } else {
        nomes.push(inputNomeContato.value)
        numeros.push(parseFloat(inputNumeroContato.value))

        let linha = '<tr>'

        linha += `<td>${inputNomeContato.value}</td>`
        linha += `<td>${inputNumeroContato.value}</td>`
        linha += '</tr>'

        linhas += linha

        quantidadeContatos ++

    inputNomeContato.value = ''
    inputNumeroContato.value = ''
    }
}

function atualizaTabela() {
    const tabelaContatos = document.querySelector('tbody')
    tabelaContatos.innerHTML = linhas
}

function attQuantidadeContatos() {
    const contatosTotais = document.getElementById('quantidade-contados')
    contatosTotais.textContent = `Quantidade de Contatos: ${quantidadeContatos}`
}

