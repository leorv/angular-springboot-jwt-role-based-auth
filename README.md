# 🔐 Full Stack JWT Auth Example — Angular + Spring Boot + Firebase

Este projeto é uma implementação full stack de autenticação baseada em **JWT (JSON Web Token)** com controle de acesso por **papéis (roles)**.

📌 **Tecnologias utilizadas:**
- ⚙️ **Backend:** Java 17, Spring Boot, Maven
- 🧠 **Frontend:** Angular
- ☁️ **Banco de dados:** Firebase Realtime Database
- 🔐 **Segurança:** JWT Token, Autenticação baseada em papéis (ROLE_USER, ROLE_ADMIN)

## 🎯 Objetivo do projeto

Demonstrar de forma clara como construir uma aplicação moderna com autenticação segura, usando JWT para proteger endpoints e controlar o acesso com base no tipo de usuário.

Este projeto pode servir como base para aplicações reais que exigem segurança e separação de acessos por perfil.

## ✅ Funcionalidades principais

- Login com geração de JWT
- Registro de usuários
- Refresh de tokens
- Controle de acesso por perfil (admin e usuário)
- Integração Angular ↔ Spring Boot
- Firebase como persistência remota dos dados

## 🚀 Como rodar o projeto

### 🔧 Backend (Spring Boot)

1. Clone o repositório:

```bash
git clone https://github.com/leorv/angular-springboot-jwt-role-based-auth.git
cd angular-springboot-jwt-role-based-auth/backend
```

2. Configure o Firebase no application.properties com suas credenciais.

3. Execute a aplicação:

```bash
./mvnw spring-boot:run
```

## 🌐 Frontend (Angular)

1. Vá para a pasta do frontend:

```bash
cd ../frontend
```

2. Instale as dependências:

```
npm install
```

3. inicie o Angular:

```
ng serve
```

## 🧠 O que aprendi com este projeto

- Como estruturar uma aplicação segura e escalável com autenticação JWT
- Como separar responsabilidades entre frontend e backend
- Integração de banco NoSQL (Firebase) com Spring Boot
- Controle de roles com @PreAuthorize no backend e guards no Angular

## 🤝 Contribuições

Este projeto foi desenvolvido de forma independente, como forma de estudo e prática. Fico aberto a sugestões e melhorias!

## 📬 Contato

Se quiser conversar sobre este projeto ou tiver oportunidades na área, estou à disposição:
📧 leonardo.rvendramini@gmail.com | [LinkedIn](https://www.linkedin.com/in/leorv/)