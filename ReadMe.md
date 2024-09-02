# Random User Generator

Este projeto é uma aplicação web simples que consome uma API para gerar e exibir dados aleatórios de usuários. O objetivo é apresentar um exemplo prático de como utilizar uma API para buscar informações e exibi-las de maneira interativa em uma interface web.

## Objetivo

O principal objetivo deste projeto é demonstrar como integrar uma API externa para buscar dados e exibi-los na interface do usuário. No caso, o projeto utiliza a [Random User Generator API](https://randomuser.me) para gerar dados de usuários fictícios, que incluem nome, e-mail, idade, endereço, telefone e senha.

## API Utilizada

O projeto utiliza a [Random User Generator API](https://randomuser.me), que fornece dados aleatórios de usuários em formato JSON. A API é acessível através da URL:

### Parâmetros da API

- `nat`: Define a nacionalidade dos usuários gerados. No projeto, foram incluídos Brasil (BR), Estados Unidos (US) e Suíça (CH).

## Como os Dados São Buscados

1. **Carregamento da Página:**

   - Quando a página é carregada (`DOMContentLoaded`), o JavaScript faz uma solicitação para a API usando a função `fetch()`.

2. **Requisição para a API:**

   - A função `callAPI()` faz a chamada assíncrona para a API e aguarda a resposta.

3. **Processamento da Resposta:**

   - Quando a resposta é recebida e o status é 200 (sucesso), os dados do usuário são extraídos do JSON retornado pela API.
   - A imagem do usuário, nome, e-mail, idade, endereço, telefone e senha são extraídos e exibidos na interface.

4. **Atualização da Interface:**

   - A imagem do usuário é exibida dentro de um elemento `<div>` com a classe `userPhoto`.
   - As informações do usuário são atualizadas dinamicamente em uma lista dentro do elemento `<ul>` com a classe `info`.
   - O nome do usuário é exibido em um parágrafo `<p>` com a classe `userName`.

5. **Interatividade:**

   - A lista de informações (`info`) permite que o usuário passe o mouse sobre diferentes itens para exibir detalhes relacionados.

6. **Botão de Atualização:**
   - O botão "refresh page" permite recarregar a página e gerar um novo usuário aleatório.

## Estrutura dos Arquivos

- `index.html`: Contém a estrutura HTML da página.
- `styles.css`: Define os estilos para a página e os elementos da interface.
- `index.js`: Contém o código JavaScript que faz a chamada à API, processa os dados e atualiza a interface.

## Como Executar

1. Clone o repositório ou baixe os arquivos para o seu computador.
2. Abra o arquivo `index.html` em um navegador web.
3. A página exibirá um usuário aleatório e suas informações. Clique no botão "refresh page" para gerar um novo usuário.

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, por favor, faça um fork do repositório e envie um pull request com suas alterações.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Obrigado por conferir este projeto! Se você tiver alguma dúvida ou sugestão, por favor, entre em contato.
