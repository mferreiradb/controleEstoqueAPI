<h1 align="center">Controle de Estoque API</h1>

<p align="center">Projeto backend para controle de estoque de produtos</p>

![Badge](https://img.shields.io/badge/Version-1.0.0-yellow?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/Typescript-^4.9.5-blue?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/Prisma-4.10.1-blue?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/Prisma_Client-^4.10.1-blue?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/Express-^4.18.2-lightgrey?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/JWT-^9.0.0-ff69b4?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/License-ISC-brightgreen?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/Status-In_progress-%237159c1?style=for-the-badge&logo=ghost)

**Features**

*Usuários*

- [x] Deve ser possível criar um usuário

- [x] Deve ser possível realizar o Login do usuário e gerar o token JWT

- [] Deve ser possível alterar os dados do usuário

- [] Deve ser possível excluir um usuário

*Produtos*

- [x] Deve ser possível criar um produto

- [] Deve ser possível editar todos os dados de um produto

- [x] Deve ser possível alterar a quantidade de um produto

- [x] Deve ser possível listar todos os produtos

- [] Deve ser possível pesquisar produtos por nome

- [] Deve ser possível excluir um produto


**Validações**

*Produtos*

- [x] Não deve ser possível criar um produto com o nome já existente

- [x] Não deve ser possível criar um produto sem que o usuário esteja autenticado

- [] Não deve ser possível alterar todos os dados do produto sem que o usuário esteja autenticado

- [x] Não deve ser possível listar os produtos sem que o usuário esteja autenticado

- [] Não deve ser possível pesquisar produtos pelo nome sem que o usuário esteja autenticado

- [x] Não deve ser possível alterar a quantidade de estoque do produto sem que o usuário esteja autenticado

- [] Não deve ser possível excluir um produto sem que o usuário esteja autenticado

*Usuários*

- [x] Não deve ser possível criar um usuário com um login já existente

- [] Não deve ser possível alterar os dados do usuário sem que o usuário esteja autenticado

- [] Não deve ser possível excluir um usuário sem que o usuário esteja autenticado