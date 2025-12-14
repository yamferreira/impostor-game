export interface Theme {
  name: string;
  hint: string;
  words: string[];
}

export const themes: Theme[] = [
  {
    name: "Comidas",
    hint: "é algo que você come",
    words: ["Pizza", "Hambúrguer", "Sushi", "Lasanha", "Churrasco", "Feijoada", "Coxinha", "Açaí", "Tapioca", "Pastel"]
  },
  {
    name: "Filmes",
    hint: "é um filme famoso",
    words: ["Titanic", "Avatar", "Matrix", "Vingadores", "Interestelar", "Coringa", "Batman", "Homem-Aranha", "Frozen", "Shrek"]
  },
  {
    name: "Séries",
    hint: "é uma série de TV",
    words: ["Friends", "Breaking Bad", "Stranger Things", "Game of Thrones", "The Office", "La Casa de Papel", "Grey's Anatomy", "Peaky Blinders", "The Mandalorian", "Narcos"]
  },
  {
    name: "Clash Royale",
    hint: "é algo do Clash Royale",
    words: ["Príncipe", "Dragão Infernal", "Golem", "Bruxa", "Megacavaleiro", "Espelho", "Raio", "Balão", "P.E.K.K.A", "Esqueleto Gigante"]
  },
  {
    name: "Carros",
    hint: "é uma marca ou modelo de carro",
    words: ["Ferrari", "Lamborghini", "Fusca", "Corolla", "Civic", "Mustang", "Porsche", "BMW", "Uno", "Gol"]
  },
  {
    name: "Bebidas",
    hint: "é algo que você bebe",
    words: ["Coca-Cola", "Cerveja", "Café", "Suco de Laranja", "Água de Coco", "Caipirinha", "Vinho", "Guaraná", "Chá", "Refrigerante"]
  },
  {
    name: "Atores",
    hint: "é um ator ou atriz famoso(a)",
    words: ["Leonardo DiCaprio", "Brad Pitt", "Fernanda Montenegro", "Wagner Moura", "Scarlett Johansson", "Robert Downey Jr.", "Tom Hanks", "Meryl Streep", "Lázaro Ramos", "Taís Araújo"]
  },
  {
    name: "Eletrônicos",
    hint: "é um aparelho eletrônico",
    words: ["iPhone", "PlayStation", "Notebook", "Smart TV", "AirPods", "Kindle", "Nintendo Switch", "Alexa", "Drone", "GoPro"]
  },
  {
    name: "Sabores",
    hint: "é um sabor de algo",
    words: ["Chocolate", "Morango", "Baunilha", "Limão", "Menta", "Coco", "Maracujá", "Caramelo", "Café", "Pistache"]
  },
  {
    name: "Eletrodomésticos",
    hint: "é um eletrodoméstico",
    words: ["Geladeira", "Microondas", "Máquina de Lavar", "Aspirador", "Liquidificador", "Air Fryer", "Cafeteira", "Ventilador", "Ar Condicionado", "Ferro de Passar"]
  },
  {
    name: "Países",
    hint: "é um país",
    words: ["Brasil", "Estados Unidos", "Japão", "França", "Argentina", "Itália", "Portugal", "Alemanha", "Egito", "Austrália"]
  },
  {
    name: "Esportes",
    hint: "é um esporte",
    words: ["Futebol", "Basquete", "Vôlei", "Tênis", "Natação", "Surfe", "Skate", "MMA", "Fórmula 1", "Golfe"]
  },
  {
    name: "Animais",
    hint: "é um animal",
    words: ["Cachorro", "Gato", "Leão", "Elefante", "Tubarão", "Águia", "Cobra", "Golfinho", "Urso", "Papagaio"]
  },
  {
    name: "Instrumentos Musicais",
    hint: "é um instrumento musical",
    words: ["Violão", "Piano", "Bateria", "Violino", "Saxofone", "Flauta", "Guitarra", "Baixo", "Ukulele", "Acordeão"]
  },
  {
    name: "Profissões",
    hint: "é uma profissão",
    words: ["Médico", "Advogado", "Professor", "Engenheiro", "Programador", "Cozinheiro", "Bombeiro", "Piloto", "Dentista", "Arquiteto"]
  }
];

export function getRandomTheme(): Theme {
  return themes[Math.floor(Math.random() * themes.length)];
}

export function getRandomWord(theme: Theme): string {
  return theme.words[Math.floor(Math.random() * theme.words.length)];
}

export function getRandomImpostor(totalPlayers: number): number {
  return Math.floor(Math.random() * totalPlayers);
}