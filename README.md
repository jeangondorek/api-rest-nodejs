
## API Nodejs

```
API utilizando node, nodemon e moongose.
```

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
    "approved": false
}
  ```
  ```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string`   | **Obrigatório**. O NOME nesse item          |
| `salary`    | `number`   | **Obrigatório**. O SALÁRIO nesse item       |
| `approved`  | `boolean`  | **Obrigatório**. True ou False nesse item   |
```
## Instalando api

- ```npm install```
- ```npm install nodemon```
## Rodando api
- ```npm start```
