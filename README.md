# Spotify Clone 🎵

Este projeto foi desenvolvido durante a **Imersão Alura**, onde recriamos uma réplica do Spotify utilizando tecnologias básicas do frontend e consumo de APIs. Posteriormente, o projeto foi adaptado para **React**, tornando-o mais dinâmico e escalável.

## 🚀 Tecnologias Utilizadas

- **HTML** e **CSS Puro** para a estrutura e estilização da interface (versão inicial)
- **JavaScript (ES6+)** para interatividade
- **Fetch API** para consumo de dados
- **JSON Server** para simular uma API
- **React.js** para a versão aprimorada
- **React Hooks** para gerenciamento de estado

## 🤝 Versões do Projeto

- **Versão Inicial**: Criada utilizando apenas HTML, CSS e JavaScript com Fetch API para consumir uma API fake.
- **Versão em React**: Estruturada com componentes reutilizáveis e estados gerenciados dinamicamente.

## 🤦🏻‍♂️ Configuração do Projeto

### 🔧 Instalando o JSON Server

Para criar uma API fake e simular um backend, utilizamos o `json-server`. Para instalá-lo globalmente, basta rodar o comando:

```bash
npm install -g json-server@0.17.4
```

### 📂 Criando um arquivo JSON com dados

Criamos um arquivo `db.json` para armazenar os dados que serão consumidos pelo projeto. Exemplo de estrutura:

```json
{
  "songs": [
    {
      "id": 1,
      "title": "Blinding Lights",
      "artist": "The Weeknd",
      "album": "After Hours",
      "cover": "link_da_imagem.jpg"
    },
    {
      "id": 2,
      "title": "Levitating",
      "artist": "Dua Lipa",
      "album": "Future Nostalgia",
      "cover": "link_da_imagem.jpg"
    }
  ]
}
```

### ▶️ Rodando o Servidor Fake

Para iniciar o `json-server` e servir a API fake, rode o seguinte comando:

```bash
json-server --watch db.json --port 5000
```

Isso fará com que os dados fiquem disponíveis em `http://localhost:5000/songs`.

### 🔄 Consumindo a API com Fetch

No projeto inicial, consumimos a API fake usando `fetch` para obter os dados e exibi-los na interface. Exemplo de requisição:

```javascript
fetch("http://localhost:5000/songs")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Erro ao buscar músicas:", error));
```

## 🔄 Adaptando para React

Na versão aprimorada do projeto, utilizamos **React** para tornar a aplicação mais modular e responsiva. 

### 👨‍💻 Instalando dependências do React

Caso ainda não tenha o React instalado, execute:

```bash
npx create-react-app spotify-clone
cd spotify-clone
npm install
```

## 📌 O que Aprendi

✅ Como estruturar um projeto básico replicando o Spotify
✅ Manipulação de dados utilizando JSON Server
✅ Como consumir APIs utilizando Fetch API
✅ Estilização utilizando apenas CSS puro
✅ Como utilizar React para tornar o projeto dinâmico
✅ Gerenciamento de estado com React Hooks

Com essa adaptação para React, o projeto ficou mais robusto e modular, permitindo futuras melhorias! ✨

