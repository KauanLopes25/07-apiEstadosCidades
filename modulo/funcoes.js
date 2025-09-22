'use strict'

/********************************************************************************************
* Objetivo: Arquivo de funções para gerenciar a API de estados e cidades.
* Autor: Kauan Lopes Pereira
* Data: 15/09/2025
* Versão: 1.1.09.25
********************************************************************************************/

/* Comentário em bloco */
// Comentário em linha

/********************************************************************************************
********************************* COMANDOS UTILIZADOS ***************************************
* forEach - Método de um array que percorre todos os indices.
* push - Método de um array para adicionar elementos dentro de um array.
* find - Método de um array para procurar um elemento especifico pelo conteudo.
************************************** OBSERVAÇÕES ******************************************
* Todo array possui um indice, e para acessar um indice devemos dizer qual a sua posição [0],
[3] ou [n], seria a posição em que aquele elemento se encontra dentro de todo array.
* Todo Json pode ser acessado com ".nomeAtributo".
******************************** BIBLIOTECAS UTILIZADAS *************************************

********************************************************************************************/
// Mensagem de erro
const MESSAGE_ERRO = { status: false, status_code: 500, development: "Kauan Lopes Pereira" }

// Importação dos dados de estados e cidades
const dados = require('./estados_cidades.js')

// Retorna todos os estados
function getAllEstados() {
    // Variável de base para o cabeçalho da API
    // Criação do json de resposta da função
    let message = { status: true, status_code: 200, development: "Kauan Lopes Pereira", uf: [] }
    // Loop
    // Comando para analisar os dados e retornar as siglas presentes no json listaDeEstados
    dados.listaDeEstados.estados.forEach(function (item) {
        message.uf.push(item.sigla)
    })
    // Criação do atributo quantidade no json message
    message.quantidade = message.uf.length
    //
    if (message.uf.length > 0) {
        return message
    } else {
        return MESSAGE_ERRO
    }

}

// Retorna um estado pesquisando pela sigla
function getEstadoBySigla(sigla) {
    let uf = sigla.toUpperCase()
    let message = { status: true, status_code: 200, development: "Kauan Lopes Pereira" }
    // Busca pela sigla no banco da dados
    let estado = dados.listaDeEstados.estados.find(estado => estado.sigla === uf)
    // Criação da mensagem de resposta
    if (estado) {
        message.uf = estado.sigla
        message.descricao = estado.nome
        message.capital = estado.capital
        message.regiao = estado.regiao
    }
    // Envio da mensagem de resposta
    if (estado) {
        return message
    } else {
        return MESSAGE_ERRO
    }
}

// Retorna a capital referente a um estado pesquisando pela sigla
function getCapitalBySigla(sigla) {
    let uf = sigla.toUpperCase()
    let message = { status: true, status_code: 200, development: "Kauan Lopes Pereira" }
    // Busca pela sigla no banco da dados
    let estado = dados.listaDeEstados.estados.find(estado => estado.sigla === uf)
    // Criação da mensagem de resposta
    if (estado) {
        message.uf = estado.sigla
        message.descricao = estado.nome
        message.capital = estado.capital
    }
    // Envio da mensagem de resposta
    if (estado) {
        return message
    } else {
        return MESSAGE_ERRO
    }
}
// Retorna todos os estados presentes em uma localidade pesquisando pela região
function getEstadosByRegiao(regiao) {
    // Formatando a região para o padrão do atributo regiao do banco de dados
    let area = regiao
    let message = { status: true, status_code: 200, development: "Kauan Lopes Pereira" }
    // Busca pela regiao no banco da dados
    let estado = dados.listaDeEstados.estados.filter(estado => estado.regiao === area)
    // Criação da mensagem de resposta
    if (estado.length > 0) {
        message.regiao = area
        message.estados = []
        for (let i = 0; i < estado.length; i++){
            let estadoRegiao = {}
            estadoRegiao.uf = estado[i].sigla
            estadoRegiao.descricao = estado[i].nome
            message.estados.push(estadoRegiao)
        }   
    }
    // Envio da mensagem de resposta
    if (estado != []) {
        return message
    } else {
        return MESSAGE_ERRO
    }
}
console.log(getEstadosByRegiao('Centro-Oeste'))
// Retorna uma lista de estados referenta as capitais do pais
function getVerifyCapitaisDoPais() {

}

// Retorna uma lista de cidades pesquisando pela sigla do estado
function getCidadesBySigla(sigla) {

}

module.exports = {
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla
}
