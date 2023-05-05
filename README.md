
## API Nodejs
https://img.shields.io/github/languages/count/jeangondorek/api-rest-nodejs?style=for-the-badge
Desenvolvido usando o codespaces do github.

API com CRUD completo para o objeto `person`, utilizando node, nodemon e moongose.
Instacia do banco de dados do mongodb atlas.

Front end completo porém sem estilização em:

[FRONT END API NODE](https://github.com/jeangondorek/front-end-api-rest-nodejs)

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
