export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  content: {
    summary: string
    keyPoints: string[]
  }
}

export const posts: BlogPost[] = [
  {
    slug: 'o-malabarismo-de-brian-dyson',
    title: 'O Malabarismo de Brian Dyson: as 5 Bolas que Todo Líder Precisa Aprender a Não Deixar Cair',
    excerpt: 'Brian Dyson, ex-vice-presidente da Coca-Cola, comparou a vida a um malabarismo com cinco bolas. Veja o preço que líderes de alta performance pagam ao não saber qual bola é de vidro.',
    category: 'Negócios',
    date: '2026-07-15',
    readTime: '7 min',
    content: {
      summary: 'Brian Dyson, ex-vice-presidente da Coca-Cola, comparou a vida a um malabarismo com cinco bolas: trabalho, família, saúde, amigos e vida espiritual. Uma delas é de borracha — pode cair e quicar de volta. As outras quatro são de vidro. Este artigo usa essa metáfora para mostrar como líderes de alta performance costumam confundir qual bola é qual, e o preço que pagam por isso.',
      keyPoints: [
        'A diferença entre a bola de borracha (trabalho) e as bolas de vidro (família, saúde, amigos, vida espiritual).',
        'Por que o sucesso profissional, sozinho, não repõe o que se perde nas outras áreas.',
        'Sinais de que você está sacrificando bolas de vidro sem perceber (a escolha "inconsciente" que a maioria faz).',
        'Um exercício prático de auto-checagem semanal para líderes reavaliarem prioridades antes que "a vida cobre a conta".'
      ]
    }
  },
  {
    slug: 'o-que-e-kairos',
    title: 'O Que É Kairós — e Por Que Ignorar o Momento Certo Custa Mais Caro do Que Você Imagina',
    excerpt: 'Kairós é a palavra grega para "o momento oportuno". Líderes que só enxergam o tempo como agenda tendem a adiar decisões até que a vida force a mudança.',
    category: 'Método',
    date: '2026-07-10',
    readTime: '6 min',
    content: {
      summary: 'Kairós é a palavra grega para "o momento oportuno" — diferente de Kronos, o tempo cronológico e linear. Líderes que só enxergam o tempo como agenda (Kronos) tendem a adiar decisões importantes até que a vida force a mudança. Este artigo explora como reconhecer o momento Kairós antes que ele se torne uma crise.',
      keyPoints: [
        'Kronos vs. Kairós: tempo quantitativo x tempo qualitativo/decisivo.',
        'Por que agendas cheias escondem os sinais de que "é hora de mudar algo".',
        'Exemplos de decisões de liderança, família e negócio que só fazem sentido quando vistas pela lente do momento certo, não da urgência.',
        'Como treinar a percepção para identificar o próprio Kairós antes que ele vire arrependimento.'
      ]
    }
  },
  {
    slug: 'a-escada-invisivel',
    title: 'A Escada Invisível: Por Que Competência Sozinha Não Constrói Carreira',
    excerpt: 'Existe uma escada invisível no mundo corporativo, construída por posicionamento, percepção, influência e decisões silenciosas — e ela pesa tanto quanto a competência.',
    category: 'Legado',
    date: '2026-07-05',
    readTime: '9 min',
    content: {
      summary: 'Baseado no livro de lançamento de Patrick Teixeira, este artigo desenvolve a ideia central da obra: existe uma escada invisível no mundo corporativo, construída por posicionamento, percepção, influência e decisões silenciosas — e ela pesa tanto quanto (ou mais que) a competência técnica.',
      keyPoints: [
        'A cena que inspirou o livro: profissionais preparados sendo ignorados enquanto outros avançam.',
        'Por que "trabalhar muito e crescer pouco" é sintoma de não enxergar a escada invisível.',
        'Os cinco elementos da escada: posicionamento, percepção, influência, estratégia, decisões silenciosas.',
        'Como o jogo muda de empresa para empresa, mas as regras raramente mudam.',
        'Convite para o leitor: "parar de subir no automático" e escolher conscientemente a próxima jogada.'
      ]
    }
  },
  {
    slug: 'lideranca-que-ninguem-ve',
    title: 'A Liderança Que Ninguém Vê: Como Saber Se Você Está Ganhando no Trabalho e Perdendo em Casa',
    excerpt: 'Cruza os temas sobre o custo do sucesso profissional e a observação de líderes que sobem na carreira enquanto a vida pessoal vive no automático.',
    category: 'Família',
    date: '2026-06-25',
    readTime: '8 min',
    content: {
      summary: 'Cruza os temas dos dois posts: o alerta de Brian Dyson sobre o custo do sucesso profissional e a observação de Patrick sobre líderes que sobem na carreira enquanto a vida pessoal "vive no automático". O artigo foca em como identificar essa troca silenciosa antes que ela se torne irreversível.',
      keyPoints: [
        '"Uma reunião aqui, um compromisso ali, um fim de semana trabalhando" — como a troca acontece aos poucos, sem decisão consciente.',
        'Por que ninguém escolhe deliberadamente negligenciar a família — e por que isso não torna o resultado menos real.',
        'Perguntas de autoavaliação: quando foi a última vez que você acompanhou de perto o crescimento dos filhos, teve uma conversa real com o cônjuge, cuidou da própria saúde?',
        'Como recuperar o equilíbrio sem abandonar a ambição profissional.'
      ]
    }
  },
  {
    slug: 'sucesso-sem-preco-escondido',
    title: 'Sucesso Sem Preço Escondido: Revendo Prioridades Antes que a Vida Cobre a Conta',
    excerpt: 'Inspirado na frase "não espere a vida cobrar a conta para rever suas prioridades", este artigo propõe uma rotina de revisão periódica de prioridades.',
    category: 'Performance',
    date: '2026-06-15',
    readTime: '7 min',
    content: {
      summary: 'Inspirado diretamente na frase de fechamento do post sobre Kairós — "não espere a vida cobrar a conta para rever suas prioridades" — este artigo propõe uma rotina de revisão periódica de prioridades como prática de alta performance real, não performática.',
      keyPoints: [
        'O que significa "o sucesso profissional custando exatamente aquilo que fez você começar".',
        'Por que revisar prioridades não é sinal de fraqueza, mas de maturidade de liderança.',
        'Um framework simples de revisão trimestral: trabalho, família, saúde, amigos, vida espiritual.',
        'Diferença entre ambição saudável e ambição que corrói silenciosamente as áreas que mais importam.'
      ]
    }
  }
];
