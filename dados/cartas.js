/* ============================================================
   DESCUBRA A VERDADE · v1 · Banco de imagens PADRÃO
   ------------------------------------------------------------
   Este arquivo é o conteúdo de fábrica. Ele é usado quando:
     - o Firebase ainda não foi configurado; ou
     - o banco online ainda não foi publicado pelo administrador.
   Depois que o administrador publica o banco no painel, o que
   vale para os participantes é a versão online (Firestore).

   Campos de cada carta:
     id         número único da pauta
     titulo     título exibido
     icon       emoji usado se a imagem falhar ou estiver vazia
     image      imagem mostrada na checagem: caminho RELATIVO
                dentro do repositório (img/arquivo.jpg) ou URL https
     credito    crédito da foto (da foto de origem, se alterada)
     legenda    legenda que acompanha a imagem (a real, ou a falsa
                que sustentaria a imagem alterada)
     alterada   true = alterada por IA | false = foto real
     nivel      só para alteradas: facil | medio | dificil
     original   só para alteradas: foto original, mostrada ao lado
                da alterada na revelação
     dica       pista opcional (reduz a pontuação do acerto)
     revelacao  explicação mostrada depois da resposta
     fontes     lista de { titulo, url }
     ativa      false retira a carta do sorteio sem apagá-la
   ============================================================ */
window.DV_PADRAO = {
  "versao": 1,
  "config": {
    "pontosAcerto": 10,
    "pontosAcertoComDica": 5,
    "pontosErro": -10,
    "metaEquipes": 60,
    "casosIndividual": 10,
    "tempoPadrao": 0
  },
  "cartas": [
    {
      "id": 1,
      "titulo": "Barco encalhado no leito seco do lago",
      "icon": "⛵",
      "image": "img/foto-01.jpg",
      "credito": "Foto: Marcello Casal Jr/Agência Brasil (CC BY 3.0 BR)",
      "legenda": "Remanso (BA) — Com a falta de chuva na nascente do Rio São Francisco, o reservatório de Sobradinho vive a maior seca de sua história.",
      "alterada": false,
      "nivel": "",
      "original": "",
      "dica": "Olhe a sombra do barco e as rachaduras do chão embaixo dele. Elas combinam com a direção da luz no resto da cena?",
      "revelacao": "Foto real. Foi publicada pela Agência Brasil em dezembro de 2015, na cobertura da seca do reservatório de Sobradinho, na Bahia. A cena parece montada, mas sombra, rachaduras e desgaste do casco são coerentes entre si. E o principal: a foto tem autor, data e veículo que podem ser conferidos. Cena estranha não é sinônimo de imagem falsa.",
      "fontes": [
        {
          "titulo": "Foto original e licença — Wikimedia Commons",
          "url": "https://commons.wikimedia.org/wiki/File:Seca_em_Sobradinho_05.jpg"
        },
        {
          "titulo": "Galeria “Reservatório de Sobradinho chega ao mais baixo nível” — Agência Brasil",
          "url": "https://agenciabrasil.ebc.com.br/geral/foto/2015-12/reservatorio-de-sobradinho-chega-ao-mais-baixo-nivel"
        }
      ],
      "ativa": true
    },
    {
      "id": 2,
      "titulo": "Neve nos Saltos do Rio Preto",
      "icon": "❄️",
      "image": "img/foto-02.jpg",
      "credito": "Foto: Marcelo Camargo/Agência Brasil (CC BY 3.0 BR)",
      "legenda": "Alto Paraíso (GO) — Frente fria histórica cobre de neve os Saltos do Rio Preto, na Chapada dos Veadeiros.",
      "alterada": true,
      "nivel": "facil",
      "original": "img/foto-02-original.jpg",
      "dica": "Antes de olhar os pixels, pense no mapa: que clima tem o interior de Goiás? Algum outro veículo noticiou esse fenômeno?",
      "revelacao": "Alterada por IA. A foto original, de dezembro de 2016, mostra a mata verde em volta das quedas d’água; a neve foi acrescentada com IA generativa. A Chapada dos Veadeiros fica no Cerrado, em região de clima tropical, e dezembro é mês de calor e chuva por lá. Um fenômeno assim estaria em todos os jornais. Quando a legenda anuncia algo extraordinário, a primeira checagem é procurar a mesma notícia em outras fontes.",
      "fontes": [
        {
          "titulo": "Foto original (sem neve) — Wikimedia Commons",
          "url": "https://commons.wikimedia.org/wiki/File:Chapada_dos_Veadeiros_18.jpg"
        },
        {
          "titulo": "Galeria “Parque Nacional da Chapada dos Veadeiros - I” — Agência Brasil",
          "url": "https://agenciabrasil.ebc.com.br/geral/foto/2016-12/parque-nacional-da-chapada-dos-veadeiros-i"
        }
      ],
      "ativa": false
    },
    {
      "id": 3,
      "titulo": "Ministérios iluminados de amarelo",
      "icon": "🏛️",
      "image": "img/foto-03.jpg",
      "credito": "Foto: Valter Campanato/Agência Brasil (CC BY 3.0 BR)",
      "legenda": "Brasília — Prédios da Esplanada dos Ministérios são iluminados de amarelo na abertura da campanha Maio Amarelo, que chama a atenção para as mortes e os feridos no trânsito.",
      "alterada": false,
      "nivel": "",
      "original": "",
      "dica": "Cores fortes em prédios públicos costumam ter um motivo. Existe alguma campanha associada a essa cor e a essa época do ano?",
      "revelacao": "Foto real, de abril de 2015. A iluminação amarela marcou a abertura da campanha Maio Amarelo, de prevenção de acidentes de trânsito. O amarelo saturado contra o fundo muito escuro lembra imagem feita por computador, mas é efeito da fotografia noturna. O contexto (qual campanha, em que data) é o que confirma a cena.",
      "fontes": [
        {
          "titulo": "Foto original e licença — Wikimedia Commons",
          "url": "https://commons.wikimedia.org/wiki/File:Esplanada_dos_Minist%C3%A9rios_Campanha_Internacional_Maio_Amarelo.jpg"
        },
        {
          "titulo": "Galeria “Campanha internacional Maio Amarelo” — Agência Brasil",
          "url": "https://agenciabrasil.ebc.com.br/geral/foto/2015-04/campanha-nacional-maio-amarelo"
        }
      ],
      "ativa": true
    },
    {
      "id": 4,
      "titulo": "Anéis olímpicos na entrada do Maracanã",
      "icon": "🏟️",
      "image": "img/foto-04.jpg",
      "credito": "Foto: Fernando Frazão/Agência Brasil (CC BY 3.0 BR)",
      "legenda": "Rio de Janeiro — Anéis olímpicos decoram o Estádio do Maracanã para a cerimônia de abertura dos Jogos Rio 2016.",
      "alterada": true,
      "nivel": "facil",
      "original": "img/foto-04-original.jpg",
      "dica": "Conte. Símbolos muito conhecidos têm forma, número e cores fixos.",
      "revelacao": "Alterada por IA. O símbolo olímpico tem cinco anéis (azul, amarelo, preto, verde e vermelho); nesta versão a IA acrescentou um sexto. A legenda é a verdadeira, copiada da foto original de agosto de 2016: uma legenda correta não garante que a imagem esteja intacta. Conferir detalhes que você já conhece é um dos testes mais rápidos.",
      "fontes": [
        {
          "titulo": "Foto original (cinco anéis) — Wikimedia Commons",
          "url": "https://commons.wikimedia.org/wiki/File:2016_Summer_Olympics_opening_ceremony_1035303-05082016-_v9a1860_04.08.16.jpg"
        },
        {
          "titulo": "Galeria “Cerimônia de abertura dos Jogos Olímpicos Rio 2016” — Agência Brasil",
          "url": "https://agenciabrasil.ebc.com.br/rio-2016/foto/2016-08/movimento-na-entrada-do-maracana-para-abertura-dos-jogos"
        }
      ],
      "ativa": false
    },
    {
      "id": 5,
      "titulo": "Globo gigante no Museu do Amanhã",
      "icon": "🌍",
      "image": "img/foto-05.jpg",
      "credito": "Foto: Tomaz Silva/Agência Brasil (CC BY 3.0 BR)",
      "legenda": "Rio de Janeiro — Público lota o Museu do Amanhã, na Praça Mauá, no fim de semana de inauguração, durante o Viradão do Amanhã.",
      "alterada": false,
      "nivel": "",
      "original": "",
      "dica": "Museus de ciência costumam ter instalações que parecem efeito especial. Há fotos do mesmo lugar feitas por outras pessoas?",
      "revelacao": "Foto real, de 20 de dezembro de 2015, fim de semana de abertura do Museu do Amanhã, no Rio. O globo suspenso que exibe imagens da Terra é uma instalação do próprio museu. Parece montagem porque a esfera brilha mais que o ambiente, mas ela aparece em muitas outras fotos do local. Procurar outras imagens do mesmo lugar é um bom caminho de checagem.",
      "fontes": [
        {
          "titulo": "Foto original e licença — Wikimedia Commons",
          "url": "https://commons.wikimedia.org/wiki/File:Museu_do_Amanh%C3%A3_em_sua_inaugura%C3%A7%C3%A3o_01.jpg"
        },
        {
          "titulo": "Galeria “Viradão celebra a abertura do Museu do Amanhã” — Agência Brasil",
          "url": "https://agenciabrasil.ebc.com.br/cultura/foto/2015-12/viradao-celebra-abertura-do-museu-do-amanha"
        }
      ],
      "ativa": true
    },
    {
      "id": 6,
      "titulo": "Avião combate queimada no Cerrado",
      "icon": "🔥",
      "image": "img/foto-06.jpg",
      "credito": "Foto: José Cruz/Agência Brasil (CC BY 3.0 BR)",
      "legenda": "Brasília — Avião lança água sobre queimada em área de Cerrado durante o período de estiagem no Distrito Federal.",
      "alterada": true,
      "nivel": "medio",
      "original": "img/foto-06-original.jpg",
      "dica": "Compare o avião com o resto da cena: a fumaça passa na frente dele? A água que cai tem a mesma luz do fogo e do céu?",
      "revelacao": "Alterada por IA. A foto original, de setembro de 2015, mostra a queimada sem aeronave alguma; o avião e a água foram acrescentados. A cena é plausível, porque aviões são mesmo usados contra incêndios florestais, e por isso engana. O que resolve é a origem: a foto publicada pela Agência Brasil não tem o avião. Quando a imagem é plausível, olhar não basta; é preciso achar a versão original.",
      "fontes": [
        {
          "titulo": "Foto original (sem avião) — Wikimedia Commons",
          "url": "https://commons.wikimedia.org/wiki/File:Seca_e_queimada_no_cerrado_03.jpg"
        },
        {
          "titulo": "Galeria “Seca leva Distrito Federal a declarar estado de emergência” — Agência Brasil",
          "url": "https://agenciabrasil.ebc.com.br/geral/foto/2015-09/baixa-umidade-leva-distrito-federal-estado-de-emergencia"
        }
      ],
      "ativa": false
    },
    {
      "id": 7,
      "titulo": "Avenida deserta em Brasília",
      "icon": "🛣️",
      "image": "img/foto-07.jpg",
      "credito": "Foto: Renato Araujo/Agência Brasil (CC BY 3.0 BR)",
      "legenda": "Brasília — Ruas desertas do Plano Piloto durante a estreia do Brasil na Copa do Mundo.",
      "alterada": false,
      "nivel": "",
      "original": "",
      "dica": "Uma avenida larga quase sem carros, em dia claro. Que acontecimento esvazia as ruas de uma capital por duas horas?",
      "revelacao": "Foto real, de 15 de junho de 2010, dia da estreia do Brasil na Copa do Mundo da África do Sul. As ruas ficaram vazias na hora do jogo. Pistas desertas e fumaça ao fundo podem lembrar cena de filme, mas a data explica o que se vê. Saber quando e por que uma foto foi feita muda o sentido dela.",
      "fontes": [
        {
          "titulo": "Foto original e licença — Wikimedia Commons",
          "url": "https://commons.wikimedia.org/wiki/File:Empty_streets_in_Brasilia_during_Brazil_%26_North_Korea_match_at_World_Cup_2010-06-15_2.jpg"
        }
      ],
      "ativa": true
    },
    {
      "id": 8,
      "titulo": "Urso-polar perto da estação brasileira na Antártica",
      "icon": "🐻‍❄️",
      "image": "img/foto-08.jpg",
      "credito": "Foto: Agência Brasil (CC BY 3.0 BR)",
      "legenda": "Antártica — Urso-polar é flagrado nas proximidades da Estação Comandante Ferraz, base brasileira na Ilha Rei George.",
      "alterada": true,
      "nivel": "medio",
      "original": "img/foto-08-original.jpg",
      "dica": "A imagem pode até parecer perfeita. A pergunta é outra: esse animal vive nesse lugar?",
      "revelacao": "Alterada por IA. Ursos-polares vivem no Ártico, no extremo norte do planeta. Na Antártica, no extremo sul, eles não existem; lá vivem pinguins, focas e aves marinhas. O animal foi inserido com IA em uma foto de arquivo da Estação Comandante Ferraz. Aqui o olho ajuda pouco: quem resolve é o conhecimento sobre o assunto e uma busca rápida em fonte confiável.",
      "fontes": [
        {
          "titulo": "Foto original (sem urso) — Wikimedia Commons",
          "url": "https://commons.wikimedia.org/wiki/File:Comandante_ferraz.jpg"
        }
      ],
      "ativa": false
    },
    {
      "id": 9,
      "titulo": "Boi Garantido no Festival de Parintins",
      "icon": "🎭",
      "image": "img/foto-09.jpg",
      "credito": "Foto: Bianca Paiva/Agência Brasil (CC BY 3.0 BR)",
      "legenda": "Parintins (AM) — Apresentação do Boi Garantido no Festival Folclórico de Parintins de 2016.",
      "alterada": false,
      "nivel": "",
      "original": "",
      "dica": "Muita cor, muita gente, estruturas enormes. Excesso de detalhe é sinal de IA ou de festa popular?",
      "revelacao": "Foto real, de junho de 2016. O Festival de Parintins, no Amazonas, reúne alegorias gigantes e arquibancadas tomadas pelas cores dos bois Garantido (vermelho) e Caprichoso (azul). A imagem parece exagerada porque a festa é exagerada. Desconfiar de tudo o que é grandioso leva a errar tanto quanto acreditar em tudo.",
      "fontes": [
        {
          "titulo": "Foto original e licença — Wikimedia Commons",
          "url": "https://commons.wikimedia.org/wiki/File:Boi_Garantido_2016.jpg"
        },
        {
          "titulo": "“Boi Garantido abre primeira noite do Festival Folclórico de Parintins” — Agência Brasil",
          "url": "https://agenciabrasil.ebc.com.br/cultura/noticia/2016-06/boi-garantido-abre-primeira-noite-do-festival-folclorico-de-parintins"
        }
      ],
      "ativa": true
    },
    {
      "id": 10,
      "titulo": "Obra do BRT debaixo d’água",
      "icon": "🌧️",
      "image": "img/foto-10.jpg",
      "credito": "Foto: Tânia Rêgo/Agência Brasil (CC BY 3.0 BR)",
      "legenda": "Rio de Janeiro — Temporal alaga a Avenida Brasil no trecho em obras do BRT Transcarioca.",
      "alterada": true,
      "nivel": "medio",
      "original": "img/foto-10-original.jpg",
      "dica": "Observe o encontro da água com os objetos: rodas, pés das pessoas, base dos guindastes. Os reflexos correspondem ao que está acima?",
      "revelacao": "Alterada por IA. A foto original, de abril de 2014, mostra a Avenida Brasil fechada para a obra do BRT Transcarioca, com o asfalto seco. A água foi gerada por IA. Enchentes são frequentes no noticiário, então a cena não causa estranheza, e imagens assim costumam circular em dias de chuva forte. Vale conferir a data, o local exato e se veículos de imprensa publicaram a mesma cena.",
      "fontes": [
        {
          "titulo": "Foto original (pista seca) — Wikimedia Commons",
          "url": "https://commons.wikimedia.org/wiki/File:BRTtranscarioca.jpg"
        },
        {
          "titulo": "Galeria “Avenida Brasil fechada para obras do BRT Transcarioca” — Agência Brasil",
          "url": "https://agenciabrasil.ebc.com.br/geral/foto/2014-04/avenida-brasil-fechada-para-obras-do-brt-transcarioca"
        }
      ],
      "ativa": false
    },
    {
      "id": 11,
      "titulo": "Robô dos bombeiros lança jato d’água",
      "icon": "🤖",
      "image": "img/foto-11.jpg",
      "credito": "Foto: Agência Brasil (CC BY 3.0 BR)",
      "legenda": "Brasília — Robô do Corpo de Bombeiros do Distrito Federal lança jato d’água na Esplanada dos Ministérios.",
      "alterada": false,
      "nivel": "",
      "original": "",
      "dica": "A máquina é incomum. Mas incomum quer dizer falso? Que tipo de registro confirmaria que ela existe?",
      "revelacao": "Foto real, do arquivo da Agência Brasil (2006). O equipamento sobre esteiras, usado pelos bombeiros do Distrito Federal, parece saído de ficção científica, e a aparência não prova nada, nem para um lado nem para o outro. A confirmação vem do registro da foto no acervo da agência. Tecnologia de verdade às vezes parece falsa.",
      "fontes": [
        {
          "titulo": "Foto original e licença — Wikimedia Commons",
          "url": "https://commons.wikimedia.org/wiki/File:Rob%C3%B4bombeiros_distritofederal.jpg"
        }
      ],
      "ativa": true
    },
    {
      "id": 12,
      "titulo": "VLT estacionado na Praça Mauá",
      "icon": "🚋",
      "image": "img/foto-12.jpg",
      "credito": "Foto: Fernando Frazão/Agência Brasil (CC BY 3.0 BR)",
      "legenda": "Rio de Janeiro — O Veículo Leve sobre Trilhos (VLT) estacionado na Praça Mauá, no centro da cidade.",
      "alterada": true,
      "nivel": "dificil",
      "original": "img/foto-12-original.jpg",
      "dica": "Nada parece errado. Então a checagem é outra: como é esse veículo nas fotos de outros dias e de outros fotógrafos?",
      "revelacao": "Alterada por IA. Na foto original, de março de 2016, o VLT carioca é branco; a cor do veículo foi trocada com IA, sem deixar marcas visíveis. Não há erro de sombra, de texto ou de perspectiva para encontrar. Só a comparação com a foto original, ou com outras imagens do mesmo veículo, revela a mudança. Alterações pequenas e discretas são as mais difíceis de notar, e mesmo assim mudam um fato.",
      "fontes": [
        {
          "titulo": "Foto original (VLT branco) — Wikimedia Commons",
          "url": "https://commons.wikimedia.org/wiki/File:VLT_na_Pra%C3%A7a_Mau%C3%A1_02.jpg"
        },
        {
          "titulo": "Galeria “Gilberto Kassab visita veículo leve sobre trilhos no Rio” — Agência Brasil",
          "url": "https://agenciabrasil.ebc.com.br/geral/foto/2016-03/gilberto-kassab-visita-o-veiculo-leve-sobre-trilhos-no-rio"
        }
      ],
      "ativa": false
    },
    {
      "id": 13,
      "titulo": "Reservatório de Sobradinho visto do alto",
      "icon": "🌵",
      "image": "img/foto-13.jpg",
      "credito": "Foto: Marcello Casal Jr/Agência Brasil (CC BY 3.0 BR)",
      "legenda": "Remanso (BA) — Com a falta de chuva na nascente do Rio São Francisco, o reservatório de Sobradinho vive a maior seca de sua história.",
      "alterada": false,
      "nivel": "",
      "original": "",
      "dica": "Cactos em primeiro plano e um lago enorme ao fundo. Essa combinação existe em alguma região do Brasil?",
      "revelacao": "Foto real, de dezembro de 2015. O reservatório de Sobradinho fica no sertão da Bahia, no Rio São Francisco, por isso a vegetação da Caatinga aparece ao lado de tanta água. A legenda fala em seca histórica e a foto mostra um lago azul: o contraste gera dúvida, mas uma imagem mostra só um recorte. A reportagem completa e as outras fotos da série dão o contexto.",
      "fontes": [
        {
          "titulo": "Foto original e licença — Wikimedia Commons",
          "url": "https://commons.wikimedia.org/wiki/File:Seca_em_Sobradinho_01.jpg"
        },
        {
          "titulo": "Galeria “Reservatório de Sobradinho chega ao mais baixo nível” — Agência Brasil",
          "url": "https://agenciabrasil.ebc.com.br/geral/foto/2015-12/reservatorio-de-sobradinho-chega-ao-mais-baixo-nivel"
        }
      ],
      "ativa": true
    },
    {
      "id": 14,
      "titulo": "Arena do Parque Olímpico da Barra",
      "icon": "🏗️",
      "image": "img/foto-14.jpg",
      "credito": "Foto: Fernando Frazão/Agência Brasil (CC BY 3.0 BR)",
      "legenda": "Rio de Janeiro — Arena Carioca 5, no Parque Olímpico da Barra, pronta para os Jogos Rio 2016.",
      "alterada": true,
      "nivel": "dificil",
      "original": "img/foto-14-original.jpg",
      "dica": "Leia a placa com calma e confira o que ela diz. Quantas arenas com esse nome o Parque Olímpico teve?",
      "revelacao": "Alterada por IA. Na foto original, de abril de 2016, a placa diz Arena Carioca 1. O Parque Olímpico da Barra teve três Arenas Cariocas (1, 2 e 3); a de número 5 nunca existiu. A IA trocou só um algarismo, e a legenda falsa repete o erro para dar credibilidade. Textos dentro da imagem também podem ser alterados; nomes, números e placas merecem conferência em fonte oficial.",
      "fontes": [
        {
          "titulo": "Foto original (Arena Carioca 1) — Wikimedia Commons",
          "url": "https://commons.wikimedia.org/wiki/File:Parque_Ol%C3%ADmpico_da_Barra_02.jpg"
        }
      ],
      "ativa": false
    },
    {
      "id": 15,
      "titulo": "Bumbódromo recebe os últimos ajustes",
      "icon": "🎪",
      "image": "img/foto-15.jpg",
      "credito": "Foto: Patrícia Fontoura/Agência Brasil (CC BY 3.0 BR)",
      "legenda": "Parintins (AM) — Trabalhadores fazem os últimos ajustes no Bumbódromo para o 50º Festival Folclórico de Parintins.",
      "alterada": false,
      "nivel": "",
      "original": "",
      "dica": "Um palco gigante, quase vazio, com um letreiro verde. O que a legenda diz sobre o momento em que a foto foi feita?",
      "revelacao": "Foto real, de junho de 2015, feita dias antes do 50º Festival Folclórico de Parintins. O Bumbódromo aparece vazio porque estava em montagem. Fotos de bastidor costumam parecer estranhas por mostrarem um lugar conhecido em um momento pouco visto. Legenda, data e autoria batem com o registro da Agência Brasil.",
      "fontes": [
        {
          "titulo": "Foto original e licença — Wikimedia Commons",
          "url": "https://commons.wikimedia.org/wiki/File:Bumb%C3%B3dromo.jpg"
        },
        {
          "titulo": "Galeria “50ª edição da festa dos bois de Parintins” — Agência Brasil",
          "url": "https://agenciabrasil.ebc.com.br/cultura/foto/2015-06/50a-edicao-da-festa-dos-bois-de-parintins"
        }
      ],
      "ativa": true
    },
    {
      "id": 16,
      "titulo": "Teste no tanque oceânico do LabOceano",
      "icon": "🚢",
      "image": "img/foto-16.jpg",
      "credito": "Foto: Cristina Indio do Brasil/Agência Brasil (CC BY 3.0 BR)",
      "legenda": "Rio de Janeiro — Modelo de navio é testado no tanque de simulação das condições do mar do Laboratório de Tecnologia Oceânica (LabOceano).",
      "alterada": true,
      "nivel": "dificil",
      "original": "img/foto-16-original.jpg",
      "dica": "O objeto na água combina com o laboratório. Ele aparece nas outras fotos da mesma visita?",
      "revelacao": "Alterada por IA. A foto original, de março de 2016, mostra o tanque do LabOceano, no Rio, sem nenhuma embarcação. O modelo de navio foi inserido com IA e faz sentido naquele cenário, pois o laboratório testa mesmo modelos em escala. É o tipo de alteração mais difícil: pequena, coerente com o contexto e com a legenda. Sem a foto original para comparar, quase ninguém perceberia.",
      "fontes": [
        {
          "titulo": "Foto original (tanque vazio) — Wikimedia Commons",
          "url": "https://commons.wikimedia.org/wiki/File:LabOceano.jpg"
        },
        {
          "titulo": "Galeria “Celso Pansera visita centros de pesquisa tecnológica no Rio” — Agência Brasil",
          "url": "https://agenciabrasil.ebc.com.br/pesquisa-e-inovacao/foto/2016-03/celso-pansera-visita-centros-de-pesquisa-tecnologica-no-rio"
        }
      ],
      "ativa": false
    }
  ],
  "perguntasFinais": [
    "Em quais imagens vocês confiaram porque a legenda parecia séria? O que isso ensina sobre **legenda e crédito**?",
    "Algumas fotos reais pareciam falsas. Por que o **estranho** nem sempre é falso, e o **comum** nem sempre é verdadeiro?",
    "Quando o olho não basta, que **outros caminhos** existem para checar uma imagem (fonte original, busca reversa, data, outros veículos)?",
    "Qual alteração foi a mais difícil de perceber? O que a tornava **plausível**?",
    "Antes de compartilhar uma foto que emociona ou revolta, que **três perguntas** vale fazer?",
    "Se as ferramentas de IA continuarem melhorando, o que vai importar mais: **olhar os detalhes** ou **conferir de onde a imagem veio**?",
    "Quem ganha e quem perde quando uma imagem alterada circula como se fosse notícia?"
  ]
};
