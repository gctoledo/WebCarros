# WebCarros

Projeto de anuncios de veículos, podendo realizar cadastrado e fazer login, dando acesso ao Dashboard que terá disponível o formulário para cadastrar um anúncio novo de veículo.

## 🔥 Introdução

O projeto consiste em um site de anúncio de veículos, onde você pode cadastrar uma conta e fazer login, utilizando o sistema de autenticação por e-mail/senha do Firebase, e assim anunciar qualquer veículo, podendo fazer upload de imagens, onde tudo ficará salvo no banco de dados do Firebase (Firestore). O sistema de roteamento foi feito utilizando o React Router DOM, criando também rotas seguras para o dashboard, que só é acessível para usuários logados. O formulário de cadastro de veículos é gerenciado pelo React Hook Form, onde o schema com validações e máscara foi criado usando Zod. Para o gerenciamento de estados foi utilizado o próprio Context API, fornecido pelo React. A estilização dos componentes foram feitas através do Tailwind CSS.

### 🔨 Guia de instalação

Para visualizar o projeto é necessário possuir o NodeJS instalado em sua máquina. Você pode fazer um clone do repositório e executar os seguintes comandos no terminal para visualizar o projeto:

Passo 1:

```
npm i
```

Passo 2:

```
npm run dev
```

## 📦 Tecnologias usadas:

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
- ![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)
