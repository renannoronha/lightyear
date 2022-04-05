# Lightyear - Buzz Lightyear

API criada como parte do projeto Buzz Lightyear, que exibe os lançamentos de foguetes da SpaceX, passados e futuros.

## Uso

No momento, esta API esta hospedada no link: [https://buzzlightyear-lightyear.herokuapp.com/](https://buzzlightyear-lightyear.herokuapp.com/lancamentos/ultimo)

### Endpoints

```http
GET https://buzzlightyear-lightyear.herokuapp.com/lancamentos/ultimo
```

```http
GET https://buzzlightyear-lightyear.herokuapp.com/lancamentos/proximo
```

```http
GET https://buzzlightyear-lightyear.herokuapp.com/lancamentos/passados
```

```http
GET https://buzzlightyear-lightyear.herokuapp.com/lancamentos/proximos
```

### Respostas

Para os endpoints  `/ultimo` e `/proximo`, espere objetos como o descrito abaixo, `/passados` e `/proximos` retornam arrays contendo os objetos a seguir.

```json
{
    "id": "5eb87d46ffd86e000604b388",
    "nome": "CCtCap Demo Mission 2",
    "detalhes": "SpaceX will launch the second demonstration mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Transportation Capability Program (CCtCap), carrying two NASA astronauts to the International Space Station. Barring unexpected developments, this mission will be the first crewed flight to launch from the United States since the end of the Space Shuttle program in 2011. DM-2 demonstrates the Falcon 9 and Crew Dragon's ability to safely transport crew to the space station and back to Earth and it is the last major milestone for certification of Crew Dragon. Initially the mission duration was planned to be no longer than two weeks, however NASA has been considering an extension to as much as six weeks or three months. The astronauts have been undergoing additional training for the possible longer mission.",
    "data_lancamento": "2020-05-22T17:39:00.000Z",
    "sucesso": true,
    "transmissao": "https://youtu.be/xY96v0OIcK4",
    "transmissao_id": "xY96v0OIcK4",
    "imagens": [
        "https://live.staticflickr.com/65535/49927519643_b43c6d4c44_o.jpg",
        "https://live.staticflickr.com/65535/49927519588_8a39a3994f_o.jpg",
    ],
    "patch": {
        "small": "https://images2.imgbox.com/eb/0f/Vev7xkUX_o.png",
        "large": "https://images2.imgbox.com/ab/79/Wyc9K7fv_o.png"
    },
    "numero_voo": 94,
}
```

## Instalação

Este app foi desenvolvido em node.js [v12.14.2](https://nodejs.org/dist/v16.14.2/node-v16.14.2-x64.msi)

Faça um `git clone` do projeto para sua máquina, rode o comando `npm install` no terminal para instalar as dependências e inicialize o projeto com o comando `npm start`. Para rodar o servidor de desenvolvimento com nodemon utilize o comando `npm run startdev`.

## Desenvolvimento

Este projeto tem por objetivo principal consumir os dados da [SpaceX-API](https://github.com/r-spacex/SpaceX-API), e apresentar esses dados para o Frontend, a segunda parte desse projeto, carinhosamente denominada de [Buzz](https://github.com/renannoronha/buzz).

Devido a pequena ampitude da aplicação, sua estrutura é simplificada. Exitem proteções contra Cross Site Scripting e contra métodos não autorizados. No momento a única rota existente é a `/lançamentos`, onde se encontra todas as informações sobre os lançamentos da SpaceX
