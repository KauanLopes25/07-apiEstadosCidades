'use strict'

/********************************************************************************************
* Objetivo: Arquivo de funções para gerenciar a API de estados e cidades.
* Autor: Kauan Lopes Pereira
* Data: 15/09/2025
* Versão: 1.0.0.0
********************************************************************************************/

/* Comentário em bloco */
// Comentário em linha

/********************************************************************************************
********************************* COMANDOS UTILIZADOS ***************************************
* forEach - Método de um array que percorre todos os indices.
* push - Método de um array para adicionar elementos dentro de um array.

************************************** OBSERVAÇÕES ******************************************
* Todo array possui um indice, e para acessar um indice devemos dizer qual a sua posição [0],
[3] ou [n], seria a posição em que aquele elemento se encontra dentro de todo array.
* Todo Json pode ser acessado com ".nomeAtributo", 

******************************** BIBLIOTECAS UTILIZADAS *************************************

********************************************************************************************/
// Mensagem de erro
const MESSAGE_ERRO = { status: false, status_code: 500, development: "Kauan Lopes Pereira" }

// Importação dos dados de estados e cidades
const dados = require('./estados_cidades.js')

// Retorna todos os estados
function getAllEstados() {
    let message = {
        status: true, status_code: 200, development: "Kauan Lopes Pereira", uf: []}

    dados.listaDeEstados.estados.forEach(function (item) {
        message.uf.push(item.sigla)
    })
    message.quantidade = message.uf.length
    console.log(message)
}

// Retorna um estado pesquisando pela sigla
function getEstadoBySigla(sigla) {

}

// Retorna a capital referente a um estado pesquisando pela sigla
function getCapitalBySigla(sigla) {

}

// Retorna todos os estados presentes em uma localidade pesquisando pela região
function getEstadosByRegiao(regiao) {

}

// Retorna uma lista de estados referenta as capitais do pais
function getVerifyCapitaisDoPais() {

}

// Retorna uma lista de cidades pesquisando pela sigla do estado
function getCidadesBySigla(sigla) {

}

getAllEstados()