const filmes = [
  // AÇÃO
  {
    id: 0,
    nome: 'Alpha',
    cartaz: require('../../assets/Ação/Alfa.jpg'),
    genero: 'Ação',
    ano: 2018,
    idade_recomendada: 12,
    duracao: '1h 36m',
    sinopse: 'Após cair de um penhasco e se perder do seu grupo, o jovem Keda (Kodi Smit-McPhee) precisa sobreviver em meio a paisagens selvagens e encontrar o caminho de casa. Atacado por uma matilha, ele consegue ferir um dos lobos, mas decide não matar o animal. O jovem cuida dele e os dois começam uma relação de amizade.',
    elenco: ['Kodi Smit-McPhee', 'Jóhannes Haukur Jóhannesson'],
    trailer: 'https://www.youtube.com/watch?v=uIxnTi4GmCo' //Trailer Original
  },
  {
    id: 1,
    nome: 'O Sistema',
    cartaz: require('../../assets/Ação/Sistem.jpg'),
    genero: 'Ação',
    ano: 2022,
    idade_recomendada: 16,
    duracao: '1h 45m',
    sinopse: 'Um ex-militar se infiltra em uma prisão de alta segurança para derrubar uma rede criminosa de dentro.',
    elenco: ['Tyrese Gibson', 'Jeremy Piven'],
    trailer: 'https://youtube.com/watch?v=AFoflf-hass' //Trailer Original
  },
  {
    id: 2,
    nome: 'Beekeeper',
    cartaz: require('../../assets/Ação/BeeKeeper.jpg'),
    genero: 'Ação',
    ano: 2023,
    idade_recomendada: 14,
    duracao: '1h 50m',
    sinopse: 'Um agente disfarçado se torna um apicultor e luta contra criminosos para proteger sua nova comunidade.',
    elenco: ['Jason Statham', 'Charlize Theron'],
    trailer: 'https://www.youtube.com/watch?v=SzINZZ6iqxY' //Trailer Original
  },
  {
    id: 3,
    nome: 'Godzilla e Kong',
    cartaz: require('../../assets/Ação/Godzilla e Kong.jpg'),
    genero: 'Ação',
    ano: 2024,
    idade_recomendada: 12,
    duracao: '1h 55m',
    sinopse: 'Godzilla e o todo-poderoso Kong enfrentam uma ameaça colossal escondida nas profundezas do planeta, desafiando a sua própria existência e a sobrevivência da raça humana.',
    elenco: ['Kaylee Hottle', 'Rebecca Hall'],
    trailer: 'https://www.youtube.com/watch?v=va-7FEpUHVQ' //Trailer Original
  },

  // COMÉDIA
  {
    id: 4,
    nome: 'Vizinhos',
    cartaz: require('../../assets/Comédia/Vizinhos.jpg'),
    genero: 'Comédia',
    ano: 2022,
    idade_recomendada: 12,
    duracao: '1h 50m',
    sinopse: 'Walter tem um colapso nervoso e decide trocar a cidade grande pelo campo. Mas seus vizinhos barulhentos acabam com seu sonho de paz e tranquilidade.',
    elenco: ['Julia Foti, Marlei Cevada, Paulinho Gogó, Leandro Hassum, Julia Rabello, Lucas Leto'],
    trailer: 'https://www.youtube.com/watch?v=IaV-OO-Mwx0' //Trailer Original
  },
  {
    id: 5,
    nome: 'Os Parças 2',
    cartaz: require('../../assets/Comédia/Os Parças 2.jpg'),
    genero: 'Comédia',
    ano: 2019,
    idade_recomendada: 12,
    duracao: '1h 40m',
    sinopse: 'Após se meterem em uma enrascada, quatro amigos precisam organizar uma grande festa para se safarem das dívidas.',
    elenco: ['Whindersson Nunes', 'Tom Cavalcante'],
    trailer: 'https://www.youtube.com/watch?v=vvcEDll428c&t=3s' //Trailer Original
  },
  {
    id: 6,
    nome: 'O Porteiro',
    cartaz: require('../../assets/Comédia/O Porteiro.jpg'),
    genero: 'Comédia',
    ano: 2021,
    idade_recomendada: 10,
    duracao: '1h 35m',
    sinopse: 'Um porteiro de um prédio de luxo se envolve em diversas situações cômicas ao tentar ajudar os moradores.',
    elenco: ['Leandro Hassum', 'Ingrid Guimarães'],
    trailer: 'https://www.youtube.com/watch?v=DbDHK8I1aQw' //Trailer Original
  },
  {
    id: 7,
    nome: 'Kung Fu Panda 4',
    cartaz: require('../../assets/Comédia/Kung Fu Panda 4.jpg'),
    genero: 'Comédia',
    ano: 2024,
    idade_recomendada: 'Livre',
    duracao: '1h 34m',
    sinopse: 'Uma poderosa feiticeira que muda de forma coloca os olhos no Cajado da Sabedoria. Po de repente percebe que precisa de ajuda e logo descobre que heróis podem ser encontrados nos lugares mais inesperados.',
    elenco: ['Awkwafina, Jack Black, Jack Black, , Ian McShane'],
    trailer: 'https://www.youtube.com/watch?v=yzXz9r5EyxU' //Trailer Original
  },
  // TERROR
  {
    id: 8,
    nome: 'Maligno',
    cartaz: require('../../assets/Terror/Maligno.jpg'),
    genero: 'Terror',
    ano: 2021,
    idade_recomendada: 18,
    duracao: '1h 51m',
    sinopse: 'Uma mulher é assombrada por visões de assassinatos enquanto descobre segredos perturbadores sobre seu passado.',
    elenco: ['Annabelle Wallis', 'Maddie Hasson'],
    trailer: 'https://www.youtube.com/watch?v=0nw1ZWHNd4c' //Trailer Original
  },
  {
    id: 9,
    nome: 'Ma',
    cartaz: require('../../assets/Terror/Ma.jpg'),
    genero: 'Terror',
    ano: 2019,
    idade_recomendada: 16,
    duracao: '1h 39m',
    sinopse: 'Uma mulher solitária faz amizade com um grupo de adolescentes, mas sua hospitalidade rapidamente se torna uma obsessão mortal.',
    elenco: ['Octavia Spencer', 'Diana Silvers'],
    trailer: 'https://www.youtube.com/watch?v=eIvbEC8N3cA' //Trailer Original
  },
  {
    id: 10,
    nome: 'Annabelle',
    cartaz: require('../../assets/Terror/Annabelle.jpg'),
    genero: 'Terror',
    ano: 2014,
    idade_recomendada: 18,
    duracao: '1h 39m',
    sinopse: 'Uma boneca possuída causa terror em uma família após ser comprada por um colecionador.',
    elenco: ['Annabelle Wallis', 'Ward Horton'],
    trailer: 'https://www.youtube.com/watch?v=paFgQNPGlsg' //Trailer Original
  },
  {
    id: 11,
    nome: 'M3GAN',
    cartaz: require('../../assets/Terror/M3GAN.jpg'),
    genero: 'Terror',
    ano: 2022,
    idade_recomendada: 14,
    duracao: '1h 42m',
    sinopse: 'Uma mulher solitária faz amizade com um grupo de adolescentes, mas sua hospitalidade rapidamente se torna uma obsessão mortalM3GAN é uma maravilha da inteligência artificial, uma boneca realista programada para ser a melhor amiga de uma criança. Uma robótica brilhante dá a sua jovem sobrinha um protótipo M3GAN, mas a máquina logo se torna violenta.',
    elenco: ['Jenna Davis', 'Amie Donald'],
    trailer: 'https://www.youtube.com/watch?v=JcKRaUGJcqY' //Trailer Original
  },
  // NENHUM
  {
    id: 12,
    nome: 'Nenhum',
    cartaz: require('../../assets/NoMovie.png'),
    genero: 'Nenhum',
    ano: null,
    idade_recomendada: null,
    duracao: null,
    sinopse: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium corporis recusandae iusto commodi voluptas dignissimos quidem, distinctio esse sint possimus est necessitatibus officia quaerat voluptatem facere maxime ipsa doloremque!',
    elenco: [],
    trailer: ''
  },
  {
    id: 13,
    nome: 'Nenhum',
    cartaz: require('../../assets/NoMovie.png'),
    genero: 'Nenhum',
    ano: null,
    idade_recomendada: null,
    duracao: null,
    sinopse: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium corporis recusandae iusto commodi voluptas dignissimos quidem, distinctio esse sint possimus est necessitatibus officia quaerat voluptatem facere maxime ipsa doloremque!',
    elenco: [],
    trailer: ''
  },
  {
    id: 14,
    nome: 'Nenhum',
    cartaz: require('../../assets/NoMovie.png'),
    genero: 'Nenhum',
    ano: null,
    idade_recomendada: null,
    duracao: null,
    sinopse: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium corporis recusandae iusto commodi voluptas dignissimos quidem, distinctio esse sint possimus est necessitatibus officia quaerat voluptatem facere maxime ipsa doloremque!',
    elenco: [],
    trailer: ''
  },
];

// Converter todos os nomes para maiúsculas
const filmesComNomesMaiusculos = filmes.map(filme => ({
  ...filme,
  nome: filme.nome.toUpperCase()
}));

export default filmesComNomesMaiusculos;