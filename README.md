# eduick

## Pré-requisitos para o setup:

Baixe na sua máquina as seguintes dependências:

- NodeJS
- MongoDB

## Ambiente

- O BackEnd será executado na porta 3003

- O FrontEnd será executado na porta 300

## Aplicação

A aplicação consiste em duas telas (landindg, dashboard). A página de landing simula um login e a
dashboard consume dados de uma api para exibir seus produtos num catálogo.

## Instalação

- FrontEnd

1. Baixe o repositório para sua máquina usando git clone ou sua chave ssh

2. Use yarn install no projeto para baixar as dependências

3. use yarn start para executar o projeto

- BackEnd

1. Baixe o repositório para sua máquina usando git clone ou sua chave ssh no link https://github.com/carlos-504/eduick-api

2. Use npm install no projeto para baixar as dependências

3. use npm start para executar o projeto

4. Popular o banco usando o seguinte json {"name": "Master English: Improve Your Speaking",
   "lessons": 10}

5. Registre os mesmos dados mais de uma vez para que possa vizualizar o grid no FrontEnd

## REST API

O sistema conta com uma API para realizar os CRUDS.
A API segue o protocolo Rest de comunicação, onde é possível realizar uma comunicação com o servidor para obter, incluir ou remover os dados do banco.

### API Endpoints

| Ação              | Método de requisição | Endpoint     | Request Body  | Retorno                          |
| ----------------- | -------------------- | ------------ | ------------- | -------------------------------- |
| Registro de curso | POST                 | course/store | name, lessons | id, name, lessons                |
| Todas os cursos   | GET                  | courses      |               | Objetos JSON com todas os cursos |
