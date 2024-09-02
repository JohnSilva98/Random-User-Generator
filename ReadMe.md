Projeto: Gerador Aleatório de Usuários

Este projeto demonstra como buscar dados aleatórios de usuários a partir de uma API externa, o Random User Generator (https://randomuser.me/), e exibi-los em uma página web. Ele fornece uma interface amigável com informações claras e um botão para atualizar os dados.

Funcionalidades:

Busca dados de usuários aleatórios: Utiliza a API fetch do JavaScript para buscar informações como nome, email, idade, localização, telefone e senha de um usuário aleatório.
Exibe informações do usuário: Apresenta os dados do usuário em uma página web com um design visualmente atraente.
Botão de atualização: Permite gerar novos dados de usuário a cada clique.
Ícones representativos: Emprega ícones para representar diferentes detalhes do usuário.
Destaque de informações: Ao passar o mouse sobre um ícone, as informações correspondentes são destacadas.
API Utilizada:

Random User Generator (https://randomuser.me/)
Essa API gratuita e de código aberto fornece uma maneira conveniente de gerar dados de usuários realistas para fins de desenvolvimento e testes.
Buscando Dados de Usuários:

Endpoint da API: O projeto utiliza o seguinte endpoint da API para buscar dados de usuários aleatórios:

https://randomuser.me/api/?nat=BR,US,CH
Este endpoint retorna dados de usuários do Brasil (BR), Estados Unidos (US) e Suíça (CH). Você pode modificar o parâmetro nat para especificar outras nacionalidades.
Código JavaScript: A função callAPI no script index.js é responsável pela chamada à API:

JavaScript
async function callAPI() {
try {
const res = await fetch(URL);
// ... processa a resposta bem-sucedida e extrai os dados do usuário
} catch (error) {
// ... trata erros
}
}
Use o código com cuidado.

A API fetch é usada para buscar os dados da URL especificada de forma assíncrona.
O código verifica se a resposta foi bem-sucedida (código de status 200) e então analisa a resposta JSON para extrair as informações relevantes do usuário.
Exibição dos Dados:

Os dados do usuário recuperados são usados para atualizar dinamicamente o conteúdo HTML de vários elementos na página web.
Elementos como #usrPhoto (foto do usuário), .userName (nome do usuário) e itens de lista com detalhes do usuário são preenchidos com os dados correspondentes.
Executando o Projeto:

Pré-requisitos:

Um navegador web moderno com JavaScript habilitado.
Passos:

Clone este repositório ou baixe os arquivos do projeto.
Certifique-se de que os ícones necessários (icons/circle-user.svg, etc.) estejam localizados no diretório correto.
Abra o arquivo index.html em seu navegador.
