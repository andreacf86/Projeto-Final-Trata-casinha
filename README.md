<h1 align="center">
    <br>
    <p align="center">Projeto Final {Reprograma}<p>
</h1>
<p align="center">
<img src="./assets\casinha corel.png" />
</p>
<br>

## 💻 Sobre o projeto

<br>
<p align="justify">Um problema ainda muito presente e antigo no Brasil é o das favelas/moradias, que apresentam déficit de infraestrutura adequada e saneamento básico ainda escasso, que corrobora para tantos casos de doenças dentre a população mencionada por residirem em ambientes tão insalubres. Em Recife, já existem projetos que ajudam a amparar e sanar problemas construtivos e infraestruturas, como o instituto Shopping Recife e o escritório Arquitetura Faz Bem(escritório de meu colega e amigo da faculdade, Neto).

<p align="justify">Sou arquiteta de formação e, portanto, resolvi fazer algo dentro da minha área em 11 anos de carreira de projetos de edificações e, como desenvolvedora, pensei em dar uma contribuição para tais projetos, através de um cadastro de moradores de comunidades carentes para que indiquem as patologias das edificações em que moram, a fim de identificar e quantificar o quanto há de deficiente nessas moradias.

<p align="justify">Assim surgiu a ideia da “trata casinha”, na qual o morador se cadastra, indica quais os problemas que existem em sua casa, para que instituições possam coletar estes dados e futuramente ter sua casa reformada, tratada.

<p align="justify">Dessa forma, se algum órgão ou empresa tiver acesso a esta aplicação, será mais prático realizar um planejamento para orçamento de produtos ou mesmo arrecadação de materiais e poder tratar da casa dessas pessoas, resgatando a dignidade, autoestima e, além de tudo, saúde.

<br><br>

## 🚀 Descrição da API Trata Casinha

<br>

<p align="justify">O projeto é uma API REST que permite que moradores das comunidades, as ZEIS(Zonas Especiais de Interesse Social), possam informar as patologias de suas edificações através de um cadastro, para que num futuro empresas, ONGs e outros órgãos governamentais possam analisar e poder planejar sanar tais problemas.

<p align="justify">A interface é um CRUD completo integrado com o banco de dados, na qual se pode listar os bairros e patologias, atualização de cadastro, caso haja uma alteração mediante estudo de levantamento da moradia,remoção de cadastros de pessoas que não sejam desse tipo de moradia ou que já obtiveram respaldo de alguma entidade.

API desenvolvida como Projeto Final para a conclusão do curso de Backend [{Reprograma}](https://reprograma.com.br/)

<br>

## ⚙️ Funcionalidades/Objetivos

- Cadastro dos autores e seus livros para maior visibilidade;
- Disponibilidade dos livros gratuitamente para acesso dos usuários;
- Avaliação dos livros através de like ou dislike e comentários dos usuários;
- Simplificar a vida dos escritores independentes e dos usuários;

<br>

## 📚 Aprendizados

> ⚠️ O projeto final consiste em uma API fundamentada no CRUD. O CRUD é um acrônimo para Create(CRIAR), Read(LER-CONSULTAR), Update(ATUALIZAR) e Delete(DELETAR).

    São as 4 operações principais em um banco de dados. No MongoDB, usando o Mongoose aqui estão algumas formas de fazer:

<br>

| OPERAÇÃO | MONGODB     | MONGOOSE |
| -------- | ----------- | -------- |
| C`REATE` | insertOne() | save()   |
| R`EAD`   | find()      | find()   |
| U`PDATE` | updateOne() | save()   |
| D`ELETE` | deleteOne() | remove() |

<br>

<br>

## 🛠️ Tecnologias utilizadas nesse projeto

<br>

As seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)

### Pacotes Utilizados

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)
- [modemon](https://www.npmjs.com/package/nodemon)

<br>

## 📁 Arquitetura MVC

```
PROJETOFINAL   |
   |-  📁 src
   |    |
   |    |- 📁 controller
   |         |- 📑 TrataCasinhaController.js
   |
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |    |- 📁 models
   |         |- 📑 TrataCasinhaSchema.js
   |
   |
   |    |- 📁 routes
   |         |- 📑 TrataCasinhaRotas.js
   |
   |
   |    |- 📑 app.js
   |
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js

```

<br>

## ⚙️ Como rodar o projeto localmente

Siga os passos e inclua as informações abaixo:

| Passo                                            | Comando/informação |
| ------------------------------------------------ | ------------------ |
| Faça o fork                                      | `botão de forkar`  |
| Faça o clone                                     | `git clone`        |
| Instale as dependências                          | `npm i`            |
| Crie seu .env e inclua as variáveis e os valores | `MONGODB_URL`      |
| utilize o script de dev                          | `npm dev`          |

MONGODB_URL = URL do `MongoDb Atlas` Banco de dados orientado a documentos e interface na nuvem.

<br>

## 🔃 Rotas

- local: http://localhost:7590

- Heroku: https://dashboard.heroku.com/apps/trata-casinha/deploy/github

  - Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

<br>

## 🔃 Manipulação das Rotas:

| Método HTTP | Endpoint           | Descrição                                                 |
| ----------- | ------------------ | --------------------------------------------------------- |
| GET         | `/all`             | Retorna todos os cadastrados                              |
| GET         | `/bairro`          | Retorna bairro específico por nome                        |
| GET         | `/reforma`         | Retorna cadastrados que necessitam de reforma no banheiro |
| GET         | `/telhado`         | Retorna cadastrados que tem problemas de telhado          |
| POST        | `/cadastros`       | Cria/cadastra um novo morador                             |
| PATCH       | `/atualização/:id` | Altera informações de um morador                          |
| DELETE      | `/delete/:id`      | Remove um morador específico                              |

<br>

## 📊 Dados para Collection ProjetoFinalAndrea

<br>

- id: autogerado e obrigatório
- nome: texto e obrigatório
- profissão: texto e obrigatório
- idade: texto e obrigatório
- bairro: texto e obrigatório
- telefone: texto e obrigatório
- se existe problemas no telhado: sim/não
- se existe necessidade de reforma no banheiro: sim/não
- criadoEm: data gerada automaticamente e obrigatório

<br>

## ✔️ API deve retornar seguinte JSON:

```jsx
{"name": "Maria José Alves de Freitas",
"profissao":"costureira",
"idade":"75",
"bairro":"Guabiraba",
"telefone":"44455566",
"telhado":"true",
"reformaBanheiro":"true"}

```

🚧 Projeto em Construção (futuras melhorias)

<br>

- Autenticação das Rotas;
- Sistema de login;
- Mais rotas de patologias, como problemas hidrossanitários, de eletricidade, etc;
- Uma rota para que os moradores possam resumir em poucas palavras suas impressões a respeito da moradia e região;
- Ranking;
- Implantação de código HTML e CSS para criação de uma interface capaz de possibilitar a interação do usuário com aplicação.

<br>

## Algumas referências

<br>

- [Saneamento em Recife](https://cidades.ibge.gov.br/brasil/pe/recife/pesquisa/30/84366)
- [Falta de esgoto em Casa Amarela](http://g1.globo.com/pernambuco/noticia/2011/12/no-recife-moradores-de-casa-amarela-sofrem-com-falta-de-esgoto.html)
- [Arquitetura faz Bem](https://www.arquiteturafazbem.com.br/)
- [API Estante de Histórias](https://github.com/elisabetealves/reprograma-estante-de-historias)
- [API Pretitudes](https://github.com/priscilaestevao/pretitudes-project-reprograma)

# Agradecimentos

<p align="justify">E pensar que por acaso eu entrei no {Reprograma} e estou aqui fazendo projeto de uma rede social de cadastros. Trabalho como arquiteta há 11 anos e estava/estou me sentindo estagnada na minha profissão, não me sentia valorizada e meu trabalho não me dava o que eu gostaria.Uma amiga(maravilhosa, Jade Ariane) sugeriu que fizesse este curso. 
<br>
<p align="justify">No começo fiz mais pela curiosidade e  me deparei com o termo "transição de carreira" e passei a refletir sobre isso e como seria uma mudança enorme na minha vida. O Reprograma me fez ver que a rede de apoio é genuína entre mulheres. É fascinante ver o quanto tive ajuda de mulheres de todas as idades, de cidades e profissões diferentes em prol de algo muito maior, que é prover essa união e entrar no mercado de trabalho majoritariamente masculino.Mais que mulheres, são amigas, colegas que te respeitam e são admiráveis.

<p align="justify">Gostaria de agradecer a todas elas, não citarei porque cada uma mesmo de forma pequena, me ajudaram bastante, tanto as alunas (minha turma On14) e as facilitadoras, acolhedoras e detentoras de habilidades de ensino com empatia que dificilmente encontraria em outro lugar.
<br>

<p align="justify">Meu namorado, Alvaro, que me apoiou desde o começo e é desenvolvedor. Ele acredita mais em mim do que eu mesma: foi meu amparo psicológico e amoroso nos momentos de ansiedade e estresse com o curso, além de ser muito compreensivo e paciente.

<p align="justify">Aos meus pais que sempre serão meu porto seguro, meu alicerce, minha base de valores que levo para minha vida: sempre ir buscar o que quero e fazer o meu melhor. Espero que eles estejam orgulhosos.
<br>

<p align="justify">Às minhas amigas e amigos, que por um tempo renunciei encontros por conta das aulas, trabalho e situação financeira, mesmo assim torcem sempre por mim e me querem bem. Especialmente para:
<br>

- Beta: que me motiva e incentiva, além de ser um exemplo de vencedora;
- Jade: mulher forte e "arretada". Se não fosse por ela, não conheceria o {Reprograma};
- Lu Galvão: pela franqueza, olhar objetivo e pela torcida sempre;
- Gaby: sempre torce por mim à distância.
- Lu Reithler: amiga e colega de trabalho, pela inspiração e paciência.
- Minhas amigas e amigos da faculdade de arquitetura, dos quais me orgulho de ser amiga: Rafa Luz, Rosália, Ju, Rebeca e Carol. São pessoas que estão presentes e que posso contar sempre.
- Antonio Neto: arquiteto e idealizador do "Arquitetura faz Bem", projeto que serviu de inspiração para minha API.
- Joelma: mulher preta, periférica, nascida na adversidade, perdeu um filho para a violência urbana, mas não deixou de praticar o bem e lutar por sua comunidade. Não a conheço pessoalmente, mas contribuiu bastante neste trabalho.

<br>
<p align="justify">Todes fazem parte desse projeto, e meu coração se enche de alegria e gratidão em ter tantas pessoas maravilhosas que vibram a cada vitória minha e querem me ver evoluindo sempre.<p>

<br>Que a mudança para o melhor esteja sempre presente em nossas vidas. Que se faça uma nova história.

<br>

# Sobre a autora

<img src="./assets\perfil.jpg" />

### Links para me encontrarem por aí!

- [LinkedIn](https://www.linkedin.com/in/andrea-carvalho-53942623/)
- [GitHub](https://github.com/andreacf86)

### Feito com carinho, por Andréa Carvalho

<br>
