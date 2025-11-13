import { ProgressionLevel, DetailedMealPlan, ProgressionLevelDetails, AgeGroup } from './types';

export const TERMS_OF_SERVICE_TITLE = "Termo de Responsabilidade e Consentimento";
export const TERMS_OF_SERVICE_TEXT = `
  <p class="mb-4">Bem-vindo(a) ao Larica Marcial. Antes de prosseguir, é fundamental que você leia e concorde com os seguintes termos:</p>
  <ol class="list-decimal list-inside space-y-3 mb-4">
    <li><strong>Natureza do Serviço:</strong> Este sistema possui caráter exclusivamente educativo e de orientação nutricional. As informações e planos gerados são sugestões baseadas nos dados fornecidos por você e não substituem, em hipótese alguma, uma avaliação clínica e prescrição individualizada por um nutricionista ou médico habilitado.</li>
    <li><strong>Consulta Profissional:</strong> Recomendamos enfaticamente que você consulte um profissional de nutrição registrado e um médico antes de iniciar qualquer programa alimentar ou de suplementação, especialmente se possuir condições de saúde preexistentes. As decisões sobre sua saúde são de sua inteira responsabilidade.</li>
    <li><strong>Uso e Proteção de Dados (LGPD):</strong> Ao aceitar este termo, você consente de forma explícita com a coleta, processamento e armazenamento de seus dados pessoais e de saúde, conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Seus dados serão utilizados para personalizar sua experiência na plataforma e poderão ser compartilhados de forma anônima para fins de pesquisa.</li>
    <li><strong>Responsabilidade do Usuário:</strong> Você é responsável pela veracidade e precisão das informações fornecidas. Dados incorretos podem levar a recomendações inadequadas.</li>
    <li><strong>Cancelamento e Exclusão de Dados:</strong> Você tem o direito de solicitar o cancelamento de sua conta e a exclusão de seus dados a qualquer momento, conforme nossos procedimentos de privacidade.</li>
  </ol>
  <p>O Larica Marcial atua em conformidade com as diretrizes do Conselho Federal de Nutricionistas (CFN) e da ANVISA, mas reitera que é uma ferramenta de suporte e não um provedor de serviços de saúde.</p>
`;

export const MOTIVATIONAL_MESSAGES: Record<ProgressionLevel, string[]> = {
  [ProgressionLevel.INICIANTE]: [
    "O primeiro passo é o mais importante. A disciplina começa no prato.",
    "Cada refeição é um tijolo na construção do seu templo. Continue firme.",
    "A jornada de mil milhas começa com uma única refeição. Você está no caminho certo.",
    "Hidrate-se. A água é o seu primeiro golpe contra a fadiga.",
  ],
  [ProgressionLevel.INTERMEDIARIO]: [
    "Sincronize sua nutrição com seu treino. O poder vem da precisão.",
    "Você está aprendendo a linguagem do seu corpo. Escute-o e nutra-o.",
    "A consistência transforma esforço em resultado. Não pare agora.",
    "O tatame testa seu corpo, a dieta testa sua mente. Domine ambos.",
  ],
  [ProgressionLevel.AVANCADO]: [
    "A recuperação é tão crucial quanto o treino. Seus micronutrientes são seus aliados.",
    "Você está refinando sua máquina. Cada detalhe nutricional conta para a performance.",
    "O foco de um mestre se aplica a tudo, inclusive à sua alimentação. Mantenha a excelência.",
    "Adapte-se e supere. Sua dieta agora é uma estratégia de combate.",
  ],
  [ProgressionLevel.ELITE]: [
    "Você alcançou a maestria nutricional. Seu corpo é um reflexo da sua disciplina.",
    "No seu nível, a nutrição não é hábito, é instinto. Confie no seu preparo.",
    "A resiliência é forjada com treino e nutrida com perfeição. Você é a prova disso.",
    "Continue inspirando. Sua jornada mostra que o impossível é apenas uma questão de planejamento.",
  ],
};

export const JOKES: string[] = [
    "Por que o lutador de Jiu-Jitsu não come fast food? Porque ele prefere finalizar o prato.",
    "Qual o cúmulo da fome para um judoca? É ter uma queda por doces.",
    "O que o tomate foi fazer no tatame? Foi lutar no peso-pena.",
    "Por que a galinha foi treinar Karatê? Para defender seus ovos na base do 'co-có-ricó-pó'.",
    "Sabe por que a balança foi treinar boxe? Para aprender a não roubar no peso.",
    "Um grão de arroz disse para o outro: 'Cuidado com o golpe do frango xadrez!'",
    "Qual a diferença entre um filme de terror e o dia de perna? O filme de terror uma hora acaba.",
    "Status de relacionamento: em um relacionamento sério com a dor pós-leg day.",
    "Você sabe que o treino de perna foi bom quando você precisa usar o corrimão para sentar no vaso sanitário.",
    "Instrutor: 'Fez perna hoje?' / Eu: 'Não, só estou andando igual a um pinguim porque gosto do estilo.'",
    "Dois 'marombeiros' se encontram: – E aí, firme? – Não, cara. Fiz perna ontem.",
    "Meu maior medo não é o fantasma. É a escada depois do agachamento.",
    "Por que o 'marombeiro' não usa o modo avião no celular? Porque ele tem medo de pular o dia de perna.",
    "Hoje vi um cara na academia tentando usar o leg press para fazer abdominal. A NASA precisa estudar a criatividade do iniciante.",
    "Instrutor: 'Qual seu objetivo?' / Iniciante: 'Quero ficar grande, mas sem parecer muito forte.'",
    "Vi um cara fazendo supino só com a barra e gritando mais que o Arnold. Achei que ele estava sendo assaltado.",
    "Iniciante na academia é igual Wi-Fi grátis: todo mundo olha, mas ninguém sabe se pode confiar.",
    "O 'frango' perguntou se o 'whey' era antes ou depois do pastel.",
    "Dois meses de academia e o braço do cara continua com 28cm. Mas agora ele tem 15 shakers e 4 regatas cavadas.",
    "Meu frango com batata doce me olhou hoje e disse: 'De novo, sério?'",
    "Qual o dia mais forte da semana para o 'marombeiro'? O 'Dia do Lixo'. Ele aguenta comer uma pizza inteira sozinho.",
    "Você sabe que está namorando um 'marombeiro' quando a sua casa cheira 50% a whey de baunilha e 50% a ovo cozido.",
    "Nutricionista: 'Você pode comer de tudo, com moderação.' / Eu: 'Entendido. Um frango inteiro e uma bacia de batata doce.'",
    "Abri a geladeira e os ovos gritaram: 'NÃÃÃO! DE NOVO, NÃO!'",
    "Estado civil: esperando ansiosamente pela refeição livre.",
    "Eu: 'Tá pesado!' / Instrutor: 'Tá nada! Na minha época isso aí era aquecimento pro aquecimento.'",
    "Instrutor de academia é igual suporte técnico: quando você mais precisa dele, ele tá ocupado no celular.",
    "Eu fazendo o exercício: quase morrendo / O instrutor lá do outro lado da academia: 'AUMENTA O PESO! TÁ LEVE!'",
    "A contagem do instrutor: 'Falta só 3... 2... 1... Boa! Agora mais 5 de verdade.'",
    "Eu: 'Não aguento mais!' / Instrutor: 'Claro que aguenta! Pensa no seu ex com outra pessoa!'",
    "Paguei o personal R$ 300 para ele ficar 1 hora gritando comigo: 'VAMOS! SÓ MAIS UMA! VOCÊ CONSEGUE!' Basicamente, paguei por um coach motivacional sádico.",
    "Se você foi na academia e não postou uma foto no espelho escrito 'Tá pago', você realmente treinou?",
    "Tem gente que treina bíceps. E tem gente que só checa no espelho se o bíceps ainda está lá a cada 5 segundos.",
    "O cara gritou tão alto no supino que achei que o peso tinha pedido ele em casamento.",
    "Academia em janeiro é igual show de graça: lotada de gente que você nunca mais vai ver no resto do ano.",
    "Minha maior motivação para ir à academia é que a fatura do cartão já chegou.",
    "Tem gente que vai na academia para treinar. Eu vou para ficar revezando a máquina com alguém enquanto mexo no celular.",
    "Vi um cara largar os pesos no chão com tanta força que um dinossauro saiu correndo no México. (Crossfit mandou lembranças).",
    "Treinar peito na segunda-feira é mais sagrado que missa de domingo."
];

export const PROGRESSION_LEVEL_INFO: Record<ProgressionLevel, ProgressionLevelDetails> = {
    [ProgressionLevel.INICIANTE]: {
        name: "Faixa Branca: O Início",
        description: "Introdução à alimentação balanceada, foco em hábitos básicos e consumo de macronutrientes.",
        personaName: "Lucas, O Desbravador",
        personaImageUrl: "https://source.unsplash.com/150x150/?man,fighter,determined"
    },
    [ProgressionLevel.INTERMEDIARIO]: {
        name: "Faixa Azul: A Estrutura",
        description: "Estruturação de macronutrientes por treino, janelas de refeição e hidratação otimizada.",
        personaName: "Sofia, A Estrategista",
        personaImageUrl: "https://source.unsplash.com/150x150/?woman,fighter,focused"
    },
    [ProgressionLevel.AVANCADO]: {
        name: "Faixa Roxa: O Refinamento",
        description: "Dieta adaptada às fases de treino, com ajuste fino de calorias e micronutrientes para recuperação.",
        personaName: "Rafael, O Refinado",
        personaImageUrl: "https://source.unsplash.com/150x150/?martial-arts,athlete,strong"
    },
    [ProgressionLevel.ELITE]: {
        name: "Faixa Preta: A Maestria",
        description: "Personalização avançada, suplementação orientada e acompanhamento de alta performance.",
        personaName: "Mestra Helena, A Lenda",
        personaImageUrl: "https://source.unsplash.com/150x150/?master,fighter,wise,woman"
    }
}

export const DETAILED_MEAL_PLANS: DetailedMealPlan[] = [
  // =================================================================
  // == CRIANÇA
  // =================================================================
  {
    ageGroup: AgeGroup.CRIANCA,
    level: ProgressionLevel.INICIANTE,
    title: "Plano Jovem Samurai: A Base de Tudo",
    principles: [
      "Comer alimentos coloridos todos os dias!",
      "Beber bastante água para ter energia de campeão.",
      "Proteínas (carnes, ovos, leite) para músculos fortes.",
      "Evitar doces e refrigerantes antes do treino.",
    ],
    meals: [
      {
        name: "Café da Manhã do Dragão",
        options: [
          { description: "Vitamina de frutas (banana e mamão) com leite e 1 colher de aveia.", imageUrl: `https://source.unsplash.com/300x200/?fruit-smoothie,kids`, notes: "Energia rápida para começar o dia com tudo." },
          { description: "Pão integral com queijo branco e um copo de suco de laranja natural.", imageUrl: `https://source.unsplash.com/300x200/?cheese-sandwich,orange-juice`, notes: "Cálcio para ossos fortes e vitamina C." },
          { description: "Ovos mexidos com tomatinhos e um copo de iogurte.", imageUrl: `https://source.unsplash.com/300x200/?scrambled-eggs,kids,breakfast`, notes: "Proteína para o cérebro e para os músculos." },
        ],
      },
      {
        name: "Almoço do Tigre",
        options: [
          { description: "Arroz, feijão, franguinho desfiado e uma salada de alface e cenoura ralada.", imageUrl: `https://source.unsplash.com/300x200/?kids-meal,chicken,rice`, notes: "O prato clássico que dá força para crescer." },
          { description: "Macarrão com carne moída e molho de tomate caseiro. Brócolis de acompanhamento.", imageUrl: `https://source.unsplash.com/300x200/?pasta-bolognese,kids`, notes: "Energia para o treino e ferro para o sangue." },
          { description: "Peixinho assado com purê de batata e legumes cozidos.", imageUrl: `https://source.unsplash.com/300x200/?fish,mashed-potatoes,kids`, notes: "Ômega 3, bom para a memória e para o coração." },
        ],
      },
      {
        name: "Lanche da Tarde",
        options: [
          { description: "Frutas picadas (maçã, uva, morango).", imageUrl: `https://source.unsplash.com/300x200/?fruit-salad,kids` },
          { description: "Sanduíche pequeno de pão integral com patê de frango.", imageUrl: `https://source.unsplash.com/300x200/?small-sandwich` },
          { description: "Um potinho de iogurte natural com mel.", imageUrl: `https://source.unsplash.com/300x200/?yogurt,honey,kids` },
        ],
      },
      {
        name: "Jantar do Urso",
        options: [
          { description: "Sopa de legumes quentinha com pedacinhos de carne.", imageUrl: `https://source.unsplash.com/300x200/?vegetable-soup,kids`, notes: "Leve e nutritivo para uma boa noite de sono." },
          { description: "Omelete colorida com queijo, presunto e ervilhas.", imageUrl: `https://source.unsplash.com/300x200/?omelette,kids`, notes: "Rápido, gostoso e cheio de proteína." },
          { description: "Panqueca de frango com salada de tomate.", imageUrl: `https://source.unsplash.com/300x200/?pancakes,chicken`, notes: "Uma janta divertida e que sustenta." },
        ],
      },
    ],
  },
  // =================================================================
  // == JOVEM
  // =================================================================
  {
    ageGroup: AgeGroup.JOVEM,
    level: ProgressionLevel.INTERMEDIARIO,
    title: "Plano Jovem Guerreiro: Força e Foco",
    principles: [
      "Carboidratos são seu combustível: consuma antes e depois dos treinos.",
      "Proteína é essencial para recuperação e crescimento muscular: inclua em todas as refeições.",
      "Gorduras boas (castanhas, abacate) são importantes para os hormônios.",
      "Hidratação é fundamental. Leve sempre uma garrafa de água.",
    ],
    meals: [
      {
        name: "Café da Manhã",
        options: [
          { description: "Crepioca (1 ovo + 2 col. de tapioca) com queijo minas.", imageUrl: `https://source.unsplash.com/300x200/?crepioca,cheese`, notes: "Combinação de carboidrato e proteína de rápida absorção." },
          { description: "Vitamina com 200ml de leite, 1 banana, 1 col. de aveia e 1 scoop de whey.", imageUrl: `https://source.unsplash.com/300x200/?protein-smoothie,teen`, notes: "Refeição líquida completa para quem tem pouco tempo." },
          { description: "2 fatias de pão integral com 2 ovos mexidos e 1 fatia de mamão.", imageUrl: `https://source.unsplash.com/300x200/?toast-eggs,papaya`, notes: "Fibras, proteínas e vitaminas para começar bem." },
        ],
      },
      {
        name: "Almoço",
        options: [
          { description: "150g de frango grelhado, arroz integral, feijão e salada à vontade.", imageUrl: `https://source.unsplash.com/300x200/?chicken-rice-beans`, notes: "Refeição balanceada para repor as energias do dia." },
          { description: "150g de patinho moído, purê de batata doce e brócolis.", imageUrl: `https://source.unsplash.com/300x200/?ground-beef,sweet-potato-mash`, notes: "Ferro da carne vermelha e carboidrato de baixo IG." },
          { description: "Macarronada integral com almôndegas de frango e molho de tomate caseiro.", imageUrl: `https://source.unsplash.com/300x200/?pasta-meatballs`, notes: "Uma opção saborosa e energética para os treinos." },
        ],
      },
       {
        name: "Lanche Pré-Treino",
        options: [
          { description: "Banana com 2 colheres de pasta de amendoim.", imageUrl: `https://source.unsplash.com/300x200/?banana-peanut-butter`, notes: "Energia rápida e sustentada para o treino." },
          { description: "Açaí (sem xarope) com granola e fruta.", imageUrl: `https://source.unsplash.com/300x200/?acai-bowl`, notes: "Antioxidante e energético. Cuidado com o excesso de açúcar." },
          { description: "Iogurte natural com 30g de aveia e mel.", imageUrl: `https://source.unsplash.com/300x200/?yogurt-oats-honey` },
        ],
      },
      {
        name: "Jantar / Pós-Treino",
        options: [
          { description: "Omelete com 3 ovos, frango desfiado e salada.", imageUrl: `https://source.unsplash.com/300x200/?chicken-omelette-salad`, notes: "Foco em proteína para recuperação muscular." },
          { description: "Batata doce cozida com 2 latas de atum em água.", imageUrl: `https://source.unsplash.com/300x200/?sweet-potato,canned-tuna`, notes: "Carboidrato para repor o glicogênio e proteína de alta qualidade." },
          { description: "Wrap integral com carne desfiada, alface e tomate.", imageUrl: `https://source.unsplash.com/300x200/?beef-wrap`, notes: "Prático e completo para depois do treino." },
        ],
      },
    ],
  },
  // =================================================================
  // == ADULTO
  // =================================================================
   {
    ageGroup: AgeGroup.ADULTO,
    level: ProgressionLevel.AVANCADO,
    title: "Plano Faixa Roxa Adulto: Refinamento Total",
    principles: [
      "Periodização de carboidratos: mais em dias de treino intenso, menos em dias leves ou de descanso.",
      "Foco em alimentos anti-inflamatórios: peixes, azeite, cúrcuma, gengibre.",
      "A qualidade da proteína é chave. Varie entre fontes animais e vegetais.",
      "Timing de nutrientes: otimize as janelas anabólicas pós-treino e o suporte noturno para recuperação.",
    ],
    meals: [
      {
        name: "Café da Manhã",
        options: [
          { description: "Mingau de aveia proteico (30g aveia, 1 scoop de whey, água, canela) com frutas vermelhas e amêndoas.", imageUrl: `https://source.unsplash.com/300x200/?protein-oatmeal`, notes: "Liberação lenta de energia e alto valor biológico." },
          { description: "Ovos mexidos com espinafre e cogumelos, servido com uma fatia de abacate.", imageUrl: `https://source.unsplash.com/300x200/?eggs-spinach-avocado`, notes: "Rico em gorduras boas, fibras e micronutrientes." },
        ],
      },
      {
        name: "Almoço",
        options: [
          { description: "200g de salmão grelhado, quinoa e aspargos com azeite de oliva.", imageUrl: `https://source.unsplash.com/300x200/?salmon-quinoa`, notes: "Rico em Ômega-3 (anti-inflamatório) e proteína completa." },
          { description: "200g de filé de frango, 150g de batata baroa (mandioquinha) e salada de folhas escuras.", imageUrl: `https://source.unsplash.com/300x200/?chicken-cassava`, notes: "Carboidrato de fácil digestão e proteína magra." },
        ],
      },
      {
        name: "Lanche da Tarde",
        options: [
          { description: "Iogurte grego natural (sem açúcar) com um punhado de nozes.", imageUrl: `https://source.unsplash.com/300x200/?greek-yogurt-nuts`, notes: "Proteína de digestão lenta (caseína) e gorduras saudáveis." },
          { description: "Shake de whey protein com água de coco.", imageUrl: `https://source.unsplash.com/300x200/?whey-coconut-water`, notes: "Hidratação com eletrólitos e proteína de rápida absorção." },
        ],
      },
      {
        name: "Jantar (Pós-Treino)",
        options: [
          { description: "180g de tilápia assada com brócolis e couve-flor no vapor.", imageUrl: `https://source.unsplash.com/300x200/?tilapia-broccoli`, notes: "Refeição leve, rica em proteína e baixa em carboidratos para otimizar a recuperação noturna." },
          { description: "Sopa de lentilha com frango desfiado e vegetais.", imageUrl: `https://source.unsplash.com/300x200/?lentil-soup`, notes: "Rica em fibras e de fácil digestão, excelente para o intestino." },
          { description: "Carne vermelha magra (200g de patinho) e purê de abóbora.", imageUrl: `https://source.unsplash.com/300x200/?beef-pumpkin-puree`, notes: "Fonte de creatina e ferro para recuperação avançada." },
        ],
      },
    ],
  },
  {
    ageGroup: AgeGroup.ADULTO,
    level: ProgressionLevel.ELITE,
    title: "Plano Faixa Preta: Maestria Nutricional",
    principles: [
      "Ciclo de macronutrientes alinhado com a periodização do treino (força, resistência, deload).",
      "Foco total em densidade nutricional para otimizar cada caloria consumida.",
      "Uso estratégico de suplementos (beta-alanina, citrulina, HMB) com base em evidências e objetivos.",
      "Controle do ambiente hormonal através da dieta: alimentos que suportam a testostona e controlam o cortisol.",
    ],
    meals: [
      {
        name: "Refeição 1 (Jejum Quebrado)",
        options: [
          { description: "Omelete de 5 claras e 1 gema com espinafre, cogumelos, cúrcuma e pimenta preta. Acompanha abacate.", imageUrl: `https://source.unsplash.com/300x200/?egg-white-omelette,turmeric`, notes: "Ação anti-inflamatória da cúrcuma e gorduras de alta qualidade." },
          { description: "Carne moída magra (150g) refogada com vegetais (pimentão, cebola).", imageUrl: `https://source.unsplash.com/300x200/?ground-beef,vegetables`, notes: "Começar o dia com proteína de alto valor para máxima saciedade e síntese proteica." },
        ],
      },
      {
        name: "Refeição 2 (Pré-Treino)",
        options: [
          { description: "200g de batata doce com 150g de filé de tilápia.", imageUrl: `https://source.unsplash.com/300x200/?tilapia-sweet-potato`, notes: "Combinação de digestão fácil e energia sustentada." },
          { description: "Arroz branco (100g) com mel e uma pitada de sal, 30 min antes do treino.", imageUrl: `https://source.unsplash.com/300x200/?white-rice-honey`, notes: "Estratégia para pico de energia rápido e retenção hídrica intra-muscular." },
        ],
      },
      {
        name: "Refeição 3 (Pós-Treino Imediato)",
        options: [
          { description: "Shake com Whey Hidrolisado/Isolado, e uma fonte de carboidrato de alto IG como Dextrose ou Waxy Maize.", imageUrl: `https://source.unsplash.com/300x200/?post-workout-shake`, notes: "Reposição de glicogênio e início da sinalização anabólica o mais rápido possível." },
        ],
      },
      {
        name: "Refeição 4 (1-2h Pós-Treino)",
        options: [
          { description: "200g de peito de frango grelhado com grande porção de arroz branco e salada.", imageUrl: `https://source.unsplash.com/300x200/?chicken,white-rice,big-salad`, notes: "Refeição sólida para continuar a recuperação e repor estoques de energia." },
          { description: "250g de filé mignon com purê de aipim e aspargos.", imageUrl: `https://source.unsplash.com/300x200/?filet-mignon,yucca`, notes: "Fonte de creatina natural, ferro heme e carboidratos de qualidade." },
        ],
      },
      {
        name: "Última Refeição",
        options: [
          { description: "Salada com 200g de salmão, nozes, sementes de abóbora e azeite.", imageUrl: `https://source.unsplash.com/300x200/?salmon-salad-nuts`, notes: "Foco em gorduras saudáveis e proteína para recuperação noturna sem impacto glicêmico." },
          { description: "Ovos mexidos com abacate e uma porção de brócolis.", imageUrl: `https://source.unsplash.com/300x200/?eggs-avocado-broccoli`, notes: "Nutrientes que suportam a produção hormonal durante o sono." },
        ],
      },
    ],
  },
];