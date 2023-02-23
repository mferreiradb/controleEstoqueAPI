<h1 align="center">Controle de Estoque API</h1>

<p align="center">Projeto backend para controle de estoque</p>

![Badge](https://img.shields.io/badge/Version-1.0.0-yellow?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/Typescript-^4.9.5-blue?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/Prisma-4.10.1-blue?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/Prisma_Client-^4.10.1-blue?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/Express-^4.18.2-lightgrey?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/JWT-^9.0.0-ff69b4?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/License-ISC-brightgreen?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/Status-In_progress-%237159c1?style=for-the-badge&logo=ghost)

<p align="center">O projeto tem o objetivo de solucionar as dificuldades no gerenciamento de estoque dos mais diversos tipos de produtos, de forma simples e eficaz</p>

## Instalação de dependências

- Typescript

        npm i -D typescript
    
    - Iniciar ts.config

        ```
        tsc --init
        ```

- Ts Node Dev

        npm i -D ts-node-dev

- Express

        npm i express

- Tipagem para express

        npm i -D @types/express

- Prisma

        npm install prisma --save-dev

- Prisma Client

        npm install @prisma/client

- JWT

        npm i --save jsonwebtoken

## Rotas da aplicação

**Usuários**

- POST /create/
    - Criação de usuário
        - Obrigatório o envio dos dados `login` e `password` pelo body da aplicação
            - O campo `login` é único. Logo, não será possível realizar a criação de um usuário que já possui um login existente

- POST /login/
    - Realiza o login, retornando o token `JWT` para uso nas autenticações
        - Obrigatório o envio dos dados `login` e `password` pelo body da aplicação

- PATCH /update/:idUser/
    - Altera os dados do usuário
        - Obrigatório o envio de ao menos um dos dados: `login` e `password` pelo body da aplicação
            - Caso não seja passado nenhum dos dados, retorna um erro
        - Obrigatória a validação do token JWT nos headers da aplicação

- DELETE /delete/:idUser/
    - Exclui o usuário informado nos parametros da rota
        - Deve ser informado no parametro da rota o `id` do usuário que deve ser excluído
        - Obrigatória a validação do token JWT nos headers da aplicação


**Produtos**

- POST /products/create/

    - Criação de produtos
        - Obrigatório o envio dos dados `name_product`, `purchase_price`, `sale_price` pelo body da aplicação
        - Opcional o envio do dado `amount` pelo body da aplicação
            - Caso não seja enviado, o valor de `amount` será definido como 0
        - Obrigatória a validação do token JWT nos headers da aplicação

- GET /products/
    - Retorna todos os produtos
        - Obrigatória a validação do token JWT nos headers da aplicação

- GET /products/
    - Retorna os itens que possuem nos quais nome começa com o valor digitado no atributo name
        - Deve ser enviado na rota como `query param` o atributo `name` do produto
        - Obrigatória a validação do token JWT nos headers da aplicação

- PATCH /products/update/stock/:idProduct/
    - Altera a quantidade do estoque para a quantidade definida no atributo `amount`
        - Obrigatório o envio do dado `amount` pelo body da aplicação
        - Obrigatória a validação do token JWT nos headers da aplicação

- PUT /products/update/:idProduct/
    - Altera os dados do produto informado nos parametros da rota
        - Deve ser informado no parametro da rota o `id` do produto que deve ser alterado
        - Obrigatório o envio dos dados `name_product`, `purchase_price`, `sale_price` pelo body da aplicação
        - Obrigatória a validação do token JWT nos headers da aplicação


- DELETE /products/delete/:idProduct/
    - Exclui o produto informado nos parametros da rota
        - Deve ser informado no parametro da rota o `id` do produto que deve ser excluído
        - Obrigatória a validação do token JWT nos headers da aplicação


## Features

**Usuários**

- [x] Deve ser possível criar um usuário

- [x] Deve ser possível realizar o Login do usuário e gerar o token JWT

- [x] Deve ser possível alterar os dados do usuário

- [x] Deve ser possível excluir um usuário

- [] Implementação de Hash de senha

**Produtos**

- [x] Deve ser possível criar um produto

- [x] Deve ser possível editar todos os dados de um produto

- [x] Deve ser possível alterar a quantidade de um produto

- [x] Deve ser possível listar todos os produtos

- [x] Deve ser possível pesquisar produtos por nome

- [x] Deve ser possível excluir um produto


## Validações

**Produtos**

- [x] Não deve ser possível criar um produto com o nome já existente

- [x] Não deve ser possível criar um produto sem que o usuário esteja autenticado

- [x] Não deve ser possível alterar todos os dados do produto sem que o usuário esteja autenticado

- [x] Não deve ser possível listar os produtos sem que o usuário esteja autenticado

- [x] Não deve ser possível pesquisar produtos pelo nome sem que o usuário esteja autenticado

- [x] Não deve ser possível alterar a quantidade de estoque do produto sem que o usuário esteja autenticado

- [x] Não deve ser possível excluir um produto sem que o usuário esteja autenticado

**Usuários**

- [x] Não deve ser possível criar um usuário com um login já existente

- [x] Não deve ser possível alterar os dados do usuário sem que o usuário esteja autenticado

- [x] Não deve ser possível alterar os dados do usuário se nenhuma das informações for enviadas

- [x] Não deve ser possível excluir um usuário sem que o usuário esteja autenticado
