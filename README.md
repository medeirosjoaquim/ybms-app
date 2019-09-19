### Desafio SERASA CONSUMIDOR - Vaga Front-end developer

### App React para listar discografia de um artista.

O desafio proposto consistia em desenvolver uma aplicação em ReacJS que cumprisse os requisitos apresentados, implementando o layout navegável.</br>

A tarefa foi realizada em 6 dias, início no dia 3 de abril, porém devido ao curto tempo disponível por conta das responsabilidades de trabalho, os primeiros dias foram dedicados a leituras via celular nos horários livres.</br>

###### Um apanhado geral do desenvolvimento pode ser encontrado em [minhas notas](https://github.com/SelecaoSerasaConsumidor/joaquim-medeiros/blob/master/my-project-notes.md)

## Acesso rápido

- [Qual API?](#api)
- [Instalação](#instalação)
- [Uso](#uso)
- [Flow tests](#flow)
- [Build](#build)
- [Todo](#todo)
- [Suporte](#suporte)
- [Contato](#contato)


### API

Como dispunha de pouco tempo para o projeto, um dos nortes adotados foi o de evitar o uso do tempo em tarefas que não avançassem o desenvolvimento. De início, a busca de resultados na API iTunes não funcionou por causa da política de CORS. Para não gastar tempo com isso, resolvi usar a API do last fm.</br>

Acredito que foi uma decisão acertada por segui dia-a-dia avançando no projeto e depois, paralelamente em um estudo, entendi que para fazer as chamadas na API iTunes precisaria usar uma função callback e receber os resultados em JSONP. Cheguei a iniciar a implementação do uso dessa API mas dado o avançado do projeto preferi seguir e concluir com o que já estava em andamento. </br>

É possível conferir a implementação da API iTunes nos seguintes commits (que depois foram revertidos):
 
-  https://github.com/SelecaoSerasaConsumidor/joaquimmedeiros/commit/7a6a39981c3e8362e00cb2b1f89b07d1195c48fa

- https://github.com/SelecaoSerasaConsumidor/joaquim-medeiros/commit/772d3c9c3bc34e29b93eaad74e58b26929ad633d

- https://github.com/SelecaoSerasaConsumidor/joaquim-medeiros/commit/0b85dbc24ac624f80ef8f2b38a282079cfb66896

- https://github.com/SelecaoSerasaConsumidor/joaquim-medeiros/commit/5d4fbd94a80f4d8c481e2d94b579dae71b8ccf03



## Instalação

Após clonar o projeto, na pasta raíz, usar o comando yarn para instalar as dependências
```
$ yarn
```
## Uso

Inicie o projeto, servindo a aplicação localmente com o comando
```
$ yarn start
```
## Flow

Se você não tem o flow instalado:
```
$ yarn global add flow-typed
```
ou
```
$ npm install -g flow-typed
```
Para executar a verificação de tipos com o flow:
```
$ yarn flow
```
## Build

Para compilar a aplicação utilize
```
$ yarn build
```

## Todo

- Após estudar melhor as tecnologias utilizadas, refatorar o código, principalmente separando 
melhor os componentes (ex: separar os flow-types e as variáveis de SCSS).
- Implementar os testes unitários, testando o acesso aos end-points. Como referência, aliás, é possível usar o [texto do Luiz da Serasa Consumidor] (https://medium.com/serasa-consumidor/parte-1-introdu%C3%A7%C3%A3o-e-requisi%C3%A7%C3%B5es-get-6c7ec9c7c778)

## Suporte

Para suporte [abra uma issue](https://github.com/SelecaoSerasaConsumidor/joaquim-medeiros/issues/new) neste repositório.

## Contato

Para entrar em contato, envie um e-mail para johnboxcodes@gmail.com ou me procure na Serasa Consumidor de Blumenau/SC ;)


# Olá, Joaquim!

Aqui na SerasaConsumidor, nós avaliamos diversos fatores do teste apresentado. Elabore com calma e sinta-se na liberdade de questionar e realizar da melhor maneira que avaliar como correta. As instruções, materiais e alertas serão informados abaixo. 

Ah, por último e não menos importante, lembre-se: Um código limpo e bem organizado é a chave para a felicidade! (E em alguns casos, garante até um chopp :D)

### Instruções
1. Crie um HTML/CSS responsivo com base no layout navegável;
2. Utilize o conceito de Mobile First;
3. Deverá ser desenvolvido em React;
4. Utilizar **Redux** juntamente com **[Redux Saga](https://redux-saga.js.org/)**.
5. Deverá conter a listagem de álbuns do artista;
6. Deverá conter uma listagem de músicas referente aos álbuns do artista;
7. Para as funcionalidades pode ser utilizada a [API do iTunes](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/).


### Material 
As imagens do layout que será convertido estão anexadas a este repositório.

* [Desktop](desktop.jpg)
* [Mobile](mobile.jpg)

### Dicas
* A utilização de um pré-processador é considerado um diferencial (SASS, LESS, ...);
* Não é obrigatório que a fonte seja exatamente a mesma usada na arte. Pode utilizar a "Lato", gostamos bastante também ;);
* É permitido usar qualquer editor de código e consultar a internet;
* Suporte cross-browsers;
* Alterações no layout são permitidas, desde que tragam um sentido e relevância. É interessante a apresentação de justificativa em caso de alteração.

### Extras
* Teste unitário;
* [Flow + React](https://flow.org/en/docs/react/);


Em caso de dúvidas, envie um e-mail para o recrutador que entrou em contato com você.

Aguarde a avaliação do seu teste e feedback do recrutador.

**Boa sorte!**
