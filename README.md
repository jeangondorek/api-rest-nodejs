
## API Nodejs

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![MIT](https://img.shields.io/github/license/jeangondorek/api-rest-nodejs?style=for-the-badge)

Desenvolvido usando o codespaces do github.

API com CRUD completo para o objeto `person`, utilizando node, nodemon e moongose.
Instacia do banco de dados do mongodb atlas.

Front end completo porém sem estilização em:

[Front End Api Node](https://github.com/jeangondorek/front-end-api-rest-nodejs)

## Instalando api

- ```npm install```
- ```npm install nodemon```
## Rodando api
- ```npm start```

#### Retorna todos os itens

```
  GET /person/
  example
  http://localhost:3001/person
```
#### Retorna um item

```
  GET /person/${id}
  example
  http://localhost:3001/person/{id}
```
#### Deleta um dos itens

```
  DELETE /person/${id}
  example
  http://localhost:3001/person/{id}
```

#### Cria um iten
```
  POST /person/
  example
  http://localhost:3001/person/{id}
```
  #### No JSON strutcutre example to POST


  ```
  {       
    "name": "myname",
    "salary": 500.5,
}
  ```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string`   | **Obrigatório**. O NOME nesse item          |
| `salary`    | `number`   | **Obrigatório**. O SALÁRIO nesse item       |
