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
## Build

Para compilar a aplicação utilize
```
$ yarn build
```


## Suporte

Para suporte [abra uma issue](https://github.com/SelecaoSerasaConsumidor/joaquim-medeiros/issues/new) neste repositório.

## Contato

Para entrar em contato, envie um e-mail para johnboxcodes@gmail.com ou me procure na Philips de Blumenau/SC ;)