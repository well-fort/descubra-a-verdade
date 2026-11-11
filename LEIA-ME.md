# Descubra a Verdade · versão 1

Experiência interativa de letramento crítico em IA. A pessoa ou a equipe vê uma foto de reportagem e decide: é **foto real** ou foi **alterada por IA**? Esta pasta é o site completo: basta enviá-la ao GitHub.

O site usa a mesma estrutura do Caça-IA v4 (mesmas telas, mesma lógica de pontos, mesmo painel e mesmo fluxo de Firebase e GitHub). O que muda é o conteúdo e a identidade visual, agora de redação e checagem de fatos.

## Situação em 10/11/2026: versão parcial

Esta versão foi publicada **só com as 8 fotos reais ativas**. As 8 imagens alteradas por IA ainda não foram geradas, então as cartas correspondentes estão no banco como **inativas** e não entram no sorteio. Enquanto isso, a resposta certa de toda imagem é "Foto real": a versão serve para testar a publicação, o login e o registro de turmas, mas ainda não funciona como atividade.

Para completar:

1. Gere as 8 imagens seguindo `_producao/ROTEIRO-ALTERACOES.html` e salve em `_producao/alteradas` (nomes `02`, `04`, `06`, `08`, `10`, `12`, `14`, `16`).
2. Peça ao Claude para conferir e montar os arquivos `img/foto-NN.jpg`, ou monte você: mesma largura e proporção da foto original correspondente.
3. Envie os arquivos novos à pasta `img/` do GitHub.
4. No painel, aba *Imagens e pistas*, abra cada carta alterada, confira a revelação com o que foi gerado, marque **Imagem ativa** e salve.

## O que há de diferente do Caça-IA

| Recurso | Como funciona |
|---|---|
| Foto em destaque | A imagem ocupa o centro da tela. O botão **Ampliar** abre a lupa em tela cheia. A lupa não pausa o cronômetro. |
| Veredito | **Foto real** ou **Alterada por IA**. |
| Legenda e crédito | Cada imagem aparece com legenda e crédito, como em um site de notícias. Nas alteradas, a legenda é a que sustentaria a imagem falsa. |
| Comparação na revelação | Nas alteradas, a revelação mostra a versão alterada ao lado da foto original. Na lupa, o botão **Alternar original / alterada** troca uma pela outra no mesmo lugar, o que deixa a mudança evidente. |
| Níveis | Cada alteração tem nível fácil (evidente), médio (plausível) ou difícil (sutil), informado só na revelação. |
| Fontes | Cada caso aponta para a página da foto original na Wikimedia Commons e, quando existe, para a galeria da Agência Brasil. |

O restante é igual: modo individual e duas equipes, pistas (acerto com pista vale menos), cronômetro opcional, relatório final para imprimir, retomada da partida, área do professor com login, perfil de professor por turma, resultados por turma com exportação em CSV e backup do banco.

## Estrutura da pasta

```
index.html            o site (tela, estilo e lógica)
firebase-config.js    chaves do projeto Firebase (preencher)
firestore.rules       regras de segurança (colar no console do Firebase)
dados/cartas.js       banco de imagens padrão, de fábrica
img/                  fotos da atividade + fotos originais para comparação
LEIA-ME.md            este arquivo
```

## Publicar no GitHub

1. Crie um repositório (sugestão: `descubra-a-verdade`) e envie **todo o conteúdo desta pasta**, mantendo as subpastas `img/` e `dados/`.
2. O arquivo principal precisa se chamar `index.html` e ficar na raiz do repositório.
3. Em *Settings* → *Pages*, escolha a branch `main` e a pasta `/ (root)`.
4. Não renomeie arquivos de imagem. O GitHub diferencia maiúsculas de minúsculas.

Sem configurar o Firebase, o site já funciona por completo em **modo demonstração**: a Área do professor abre sem senha e as edições ficam salvas só no navegador de quem editou.

## Ativar o login e o banco online (Firebase, plano gratuito)

> Situação em 10/11/2026: o projeto `descubra-a-verdade` já foi criado, com login por e-mail/senha ativado, banco em São Paulo, regras publicadas e chaves preenchidas em `firebase-config.js`. Os passos abaixo ficam como referência.

Use um projeto Firebase **separado** do Caça-IA. Os nomes dos menus podem variar um pouco conforme o console é atualizado.

1. **Criar o projeto.** Em `console.firebase.google.com`, crie um projeto (o Google Analytics pode ficar desligado).
2. **Ativar o login.** Em *Authentication* → *Sign-in method*, ative **E-mail/senha**. Em *Users*, clique em *Add user* e crie a sua conta de administrador. Copie o **UID**.
3. **Criar o banco.** Em *Firestore Database* → *Create database*, escolha o modo de produção e a região `southamerica-east1` (São Paulo).
4. **Colar as regras.** Na aba *Rules* do Firestore, apague o conteúdo, cole o arquivo `firestore.rules` e clique em *Publish*.
5. **Dar permissão de administrador.** Na aba *Data*, crie a coleção `admins`. O ID do documento deve ser o **UID** do passo 2. Adicione um campo qualquer, por exemplo `papel` = `admin`.
6. **Copiar as chaves.** Em *Project settings* → *Your apps*, registre um app Web (ícone `</>`). Copie os valores de `firebaseConfig` para `firebase-config.js`.
7. **Publicar.** Envie o `firebase-config.js` atualizado ao GitHub, abra o site, entre na Área do professor e clique em **Publicar banco agora**.

**Para cadastrar um professor:** no painel, aba *Professores*, informe nome, e-mail, senha provisória e os códigos das turmas. Para isso funcionar, a criação de contas precisa continuar permitida em *Authentication* → *Configurações* → *Ações do usuário*.

**Se o login disser "conta sem permissão":** a mensagem mostra o UID. Crie o documento `admins/<esse UID>` (passo 5).

### Sobre segurança

- As chaves do `firebase-config.js` identificam o projeto e podem ficar públicas. Quem protege os dados são as regras do Firestore e a senha.
- Nunca escreva senhas em arquivos do repositório.
- Participantes só conseguem **ler** o banco de imagens e **criar** um registro de resultado no formato exato. Editar e excluir é exclusivo do administrador; o professor apenas lê os resultados das próprias turmas.
- A resposta de cada imagem está no arquivo `dados/cartas.js`, que é público, como no Caça-IA. Um estudante curioso consegue abrir o arquivo e ver o gabarito. Para uso em sala isso costuma bastar; não use a pontuação como nota de prova.

## Uso do painel

- **Imagens e pistas:** criar, editar, desativar (sai do sorteio sem apagar) e excluir. Campos de cada imagem: título, veredito (real ou alterada), imagem mostrada, crédito, foto original e nível (só para alteradas), legenda, pista, revelação e fontes.
- **Perguntas finais:** uma é sorteada no encerramento. Use `**texto**` para negrito.
- **Regras:** pontos por acerto, acerto com pista, erro, meta das equipes (60), número de imagens do modo individual (10) e cronômetro padrão.
- **Resultados**, **Professores** e **Backup:** iguais aos do Caça-IA.

Para incluir uma imagem nova, envie os arquivos para a pasta `img/` do GitHub (nome em minúsculas, sem acento e sem espaço) e depois digite os caminhos no painel, por exemplo `img/foto-17.jpg` e `img/foto-17-original.jpg`. Prefira arquivos com o mesmo tamanho e enquadramento, para a comparação ficar alinhada.

## Créditos e licenças das imagens

Todas as fotos são da **Agência Brasil** e foram obtidas na **Wikimedia Commons**, onde estão registradas sob a licença **Creative Commons Atribuição 3.0 Brasil (CC BY 3.0 BR)**. Essa licença permite copiar e adaptar, desde que haja crédito e indicação das mudanças. O site cumpre isso mostrando o crédito sob cada imagem e avisando, na revelação e no relatório, quais foram alteradas.

| # | Título no site | Tipo | Autoria | Arquivos em `img/` | Fonte |
|---|---|---|---|---|---|
| 01 | Barco encalhado no leito seco do lago | real | Marcello Casal Jr/Agência Brasil | `foto-01.jpg` | [Commons](https://commons.wikimedia.org/wiki/File:Seca_em_Sobradinho_05.jpg) |
| 02 | Neve nos Saltos do Rio Preto | alterada por IA (fácil) | Marcelo Camargo/Agência Brasil | `foto-02.jpg` e `foto-02-original.jpg` | [Commons](https://commons.wikimedia.org/wiki/File:Chapada_dos_Veadeiros_18.jpg) |
| 03 | Ministérios iluminados de amarelo | real | Valter Campanato/Agência Brasil | `foto-03.jpg` | [Commons](https://commons.wikimedia.org/wiki/File:Esplanada_dos_Minist%C3%A9rios_Campanha_Internacional_Maio_Amarelo.jpg) |
| 04 | Anéis olímpicos na entrada do Maracanã | alterada por IA (fácil) | Fernando Frazão/Agência Brasil | `foto-04.jpg` e `foto-04-original.jpg` | [Commons](https://commons.wikimedia.org/wiki/File:2016_Summer_Olympics_opening_ceremony_1035303-05082016-_v9a1860_04.08.16.jpg) |
| 05 | Globo gigante no Museu do Amanhã | real | Tomaz Silva/Agência Brasil | `foto-05.jpg` | [Commons](https://commons.wikimedia.org/wiki/File:Museu_do_Amanh%C3%A3_em_sua_inaugura%C3%A7%C3%A3o_01.jpg) |
| 06 | Avião combate queimada no Cerrado | alterada por IA (médio) | José Cruz/Agência Brasil | `foto-06.jpg` e `foto-06-original.jpg` | [Commons](https://commons.wikimedia.org/wiki/File:Seca_e_queimada_no_cerrado_03.jpg) |
| 07 | Avenida deserta em Brasília | real | Renato Araujo/Agência Brasil | `foto-07.jpg` | [Commons](https://commons.wikimedia.org/wiki/File:Empty_streets_in_Brasilia_during_Brazil_%26_North_Korea_match_at_World_Cup_2010-06-15_2.jpg) |
| 08 | Urso-polar perto da estação brasileira na Antártica | alterada por IA (médio) | Agência Brasil | `foto-08.jpg` e `foto-08-original.jpg` | [Commons](https://commons.wikimedia.org/wiki/File:Comandante_ferraz.jpg) |
| 09 | Boi Garantido no Festival de Parintins | real | Bianca Paiva/Agência Brasil | `foto-09.jpg` | [Commons](https://commons.wikimedia.org/wiki/File:Boi_Garantido_2016.jpg) |
| 10 | Obra do BRT debaixo d’água | alterada por IA (médio) | Tânia Rêgo/Agência Brasil | `foto-10.jpg` e `foto-10-original.jpg` | [Commons](https://commons.wikimedia.org/wiki/File:BRTtranscarioca.jpg) |
| 11 | Robô dos bombeiros lança jato d’água | real | Agência Brasil | `foto-11.jpg` | [Commons](https://commons.wikimedia.org/wiki/File:Rob%C3%B4bombeiros_distritofederal.jpg) |
| 12 | VLT estacionado na Praça Mauá | alterada por IA (difícil) | Fernando Frazão/Agência Brasil | `foto-12.jpg` e `foto-12-original.jpg` | [Commons](https://commons.wikimedia.org/wiki/File:VLT_na_Pra%C3%A7a_Mau%C3%A1_02.jpg) |
| 13 | Reservatório de Sobradinho visto do alto | real | Marcello Casal Jr/Agência Brasil | `foto-13.jpg` | [Commons](https://commons.wikimedia.org/wiki/File:Seca_em_Sobradinho_01.jpg) |
| 14 | Arena do Parque Olímpico da Barra | alterada por IA (difícil) | Fernando Frazão/Agência Brasil | `foto-14.jpg` e `foto-14-original.jpg` | [Commons](https://commons.wikimedia.org/wiki/File:Parque_Ol%C3%ADmpico_da_Barra_02.jpg) |
| 15 | Bumbódromo recebe os últimos ajustes | real | Patrícia Fontoura/Agência Brasil | `foto-15.jpg` | [Commons](https://commons.wikimedia.org/wiki/File:Bumb%C3%B3dromo.jpg) |
| 16 | Teste no tanque oceânico do LabOceano | alterada por IA (difícil) | Cristina Indio do Brasil/Agência Brasil | `foto-16.jpg` e `foto-16-original.jpg` | [Commons](https://commons.wikimedia.org/wiki/File:LabOceano.jpg) |

Cuidados adotados:

- Só entraram fotos produzidas **antes de 23/02/2017**. Segundo a Wikimedia Commons, a licença CC BY 3.0 BR da Agência Brasil não vale para o conteúdo produzido depois dessa data. O site atual da Agência Brasil não exibe mais o aviso de licença, então a base é o registro da Commons. Se o projeto for comercializado, vale confirmar o uso com a EBC.
- Nenhuma imagem tem pessoa pública em destaque, e as pessoas que aparecem estão em plano aberto.
- As alterações são benignas (clima, objetos, cores, um algarismo) e não atribuem fatos a pessoas ou instituições.
- Os arquivos alterados levam, nos metadados, o aviso "IMAGEM ALTERADA COM IA GENERATIVA para fins educativos", e não tiveram removida a marca que a ferramenta de IA aplica.
- As imagens alteradas existem para esta atividade. Não as publique fora do site sem o aviso de que são alteradas.

## Dados e privacidade (LGPD)

- Estudantes **não têm conta**. Entram com apelido e, se o professor pedir, um código de turma.
- Sem código de turma, **nada é registrado** fora do aparelho.
- Com código de turma, o registro guarda: apelido, turma, modo, pontuação, acertos, total de imagens, pistas usadas e data. Oriente a turma a usar apelidos.
- Antes de usar com turmas reais, vale alinhar com a escola como esses registros serão informados aos responsáveis e por quanto tempo serão mantidos.

## Limites desta entrega

- O fluxo do site (modos, pontuação, pistas, cronômetro, lupa, comparação, relatório, painel em modo demonstração, celular) foi testado de forma automatizada. A parte do Firebase usa o mesmo código já validado no Caça-IA, mas o primeiro teste com o projeto real acontece quando você concluir o passo 7.
- As fontes tipográficas vêm do Google Fonts. Em redes que bloqueiam esse serviço, o site funciona com fontes padrão do aparelho.
- As datas das fotos 08 e 11 não constam no registro da Commons; a foto 11 é de 2006 segundo o endereço original do arquivo, e a 08 é tratada como "foto de arquivo".
- A lista de fotos é pequena (16). Depois de duas ou três partidas, a turma decora as respostas. Ampliar o banco pelo painel resolve.
