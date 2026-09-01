/* ======================================================
   ZÉ DOS VAPES — configuração da loja
   ====================================================== */

// Número de WhatsApp (formato internacional, sem + nem espaços)
const WHATSAPP_NUMBER = "351966917856";

// Quantas unidades de vape vêm dentro de cada caixa
const UNIDADES_POR_CAIXA = 10;

// Taxa de envio informativa (não é somada ao total automaticamente, é combinada no WhatsApp)
const TAXA_ENVIO = 5;

/* ------------------------------------------------------
   CATÁLOGO
   Edita/adiciona caixas aqui. Cada produto precisa de:
   id (único), marca, nome, puffs (texto do selo), sabores (array), preco (número)
   imagem: caminho para a foto — deixa "" enquanto não tens a foto
   bestseller: true/false — aparece na secção "Mais vendidos"
   ------------------------------------------------------ */
const PRODUTOS = [
  {
    id: "bangbox-blaze-50k-2in1",
    marca: "Bang Box",
    nome: "Caixa de Vapes Bang Blaze 50k 2in1",
    puffs: "50K PUFFS",
    sabores: [
      "Melancia Gelada & Mirtilo com Menta",
      "Melancia & Mirtilo e Cereja",
      "Mirtilo Gelado & Pêssego, Manga e Melancia",
      "Mirtilo Gelado & Pêssego Gelado",
      "Mirtilo e Framboesa & Mistura de Bagas",
      "Mirtilo e Framboesa & Uva Gelada",
      "Red Bull & Morango e Banana",
      "Red Bull & Mirtilo e Melancia",
      "Morango e Manga & Pastilha Elástica de Melancia",
      "Morango e Manga & Morango e Kiwi",
      "Morango e Melancia & Gelo de Dragão Negro",
      "Morango e Melancia & Kiwi, Maracujá e Goiaba"
    ],
    preco: 46.99,
    imagem: "images/vapes/50kbang2in1.png",
    bestseller: false
  },
  {
    id: "bangbox-legend-geek-300k-8in1",
    marca: "Bang Box",
    nome: "Caixa de Vapes Bang Legend Geek 300k 8in1",
    puffs: "300K PUFFS",
    sabores: [
      "Mamba & Pêssego, Manga e Melancia & Bebida Energética & Uva Gelada",
      "Maracujá e Manga & Pêssego e Ananás & Mirtilo e Framboesa & Melancia Gelada",
      "Limão e Laranja Azeda & Manga e Pêssego & Melancia Gelada & Baga Gelada",
      "Maçã e Pera & Morango e Manga & Morango e Melancia & Mirtilo Gelado",
      "Melancia e Baga & Manga, Pêssego e Damasco & Morango e Kiwi & Pêssego, Manga e Melancia",
      "Verão & Manga Gelada & Love 66 & Manga e Ananás Azedo",
      "Kiwi, Maracujá e Goiaba & Uva Gelada & Beijo Apaixonado & Melancia e Pêssego Azedo",
      "Melancia e Fruta do Dragão & Maçã e Pera & Maracujá, Kiwi e Lima & Mirtilo e Pêssego",
      "Morango e Banana & Melancia e Baga & Mirtilo Gelado & Gelo de Maçã Fuji",
      "Ursinho de Goma & Mistura de Bagas & Morango e Melancia & Romance de Lima",
      "Pastilha Elástica de Melancia & Mirtilo e Pêssego Gelado & Meloa e Maçã & Morango e Banana",
      "Melancia e Pêssego Azedo & Mirtilo Gelado & Cereja da Califórnia & Morango e Manga"
    ],
    preco: 49.99,
    imagem: "images/vapes/300k8in1bang.png",
    bestseller: false
  },
  {
    id: "bangbox-leader-110k-6in1",
    marca: "Bang Box",
    nome: "Caixa de Vapes Bang Leader 110k 6in1",
    puffs: "110K PUFFS",
    sabores: [
      "Melancia Gelada & Morango Mamba & Morango e Melancia",
      "Gelo de Maçã Fuji & Maçã e Uva & Cereja e Romã",
      "Mirtilo Gelado & Framboesa e Limão & Pastilha Elástica de Melancia",
      "Mirtilos e Framboesas & Ananás e Laranja Azedos & Framboesa e Melancia",
      "Uva Gelada & Manga e Pêssego & Mirtilo e Melancia",
      "Morango Gelado & Pêssego e Limão & Kiwi, Maracujá e Goiaba",
      "Ananás e Coco & Mirtilo e Red Bull & Melancia Gelada",
      "Morango e Kiwi & Mirtilo e Coco & Mistura de Bagas",
      "Romance de Limão & Mirtilo e Framboesa & Pêssego e Mentol",
      "Pêssego Gelado & Groselha Preta e Ananás Gelado & Maçã Verde e Kiwi"
    ],
    preco: 48.99,
    imagem: "images/vapes/110k6in1bang.png",
    bestseller: false
  },
  {
    id: "bangbox-legend-150k-6in1",
    marca: "Bang Box",
    nome: "Caixa de Vapes Bang Legend 150k 6in1",
    puffs: "150K PUFFS",
    sabores: [],
    preco: 48.99,
    imagem: "images/vapes/150k6in1bang.png",
    bestseller: false,
    disponivel: false
  },
  {
    id: "vapsolo-80k-4in1",
    marca: "VapSolo",
    nome: "Caixa VapeSolo 80k 4in1",
    puffs: "80K PUFFS",
    sabores: [
      "Uva & Mistura de Bagas",
      "Manga e Maracujá & Mistura de Bagas",
      "Maçã, Kiwi e Maracujá & Uva e Baga",
      "Melancia e Uva & Mistura de Bagas",
      "Melancia e Morango & Limão e Baga",
      "Melão e Manga & Mirtilo e Morango",
      "Morango e Kiwi & Mistura de Bagas",
      "Melão e Maçã & Kiwi, Limão e Toranja",
      "Ananás e Coco & Mirtilo, Morango e Limão",
      "Melancia e Uva & Ananás, Morango e Cereja",
      "Cola & Uva, Limão e Framboesa",
      "Melancia e Ananás & Mirtilo, Morango e Cereja"
    ],
    preco: 64.99,
    imagem: "images/vapes/80kvapesolo.png",
    bestseller: true,
    avaliacao: 4.3
  },
  {
    id: "vapsolo-180k-6in1",
    marca: "VapSolo",
    nome: "Caixa VapeSolo 180k 6in1",
    puffs: "180K PUFFS",
    sabores: [
      "Laranja e Coco & Morango e Mirtilo",
      "Banana e Melancia & Fruta do Dragão, Morango e Mirtilo",
      "Manga, Ananás e Coco & Framboesa, Morango e Mirtilo",
      "Uva e Mirtilo & Pêssego, Cereja e Melancia",
      "Kiwi e Limão & Morango e Mirtilo",
      "Melancia e Maracujá & Framboesa, Limão e Mirtilo",
      "Melancia e Melão & Manga, Morango e Mirtilo",
      "Toranja e Kiwi & Melão, Melancia e Coco"
    ],
    preco: 72.99,
    imagem: "images/vapes/180kvapesolo.png",
    bestseller: true,
    avaliacao: 4.8
  },
  {
    id: "vapsolo-40k",
    marca: "VapSolo",
    nome: "Caixa VapeSolo 40k",
    puffs: "40K PUFFS",
    sabores: [
      "Cereja e Limão",
      "Kiwi, Maracujá e Goiaba",
      "Love 66",
      "Gelo de Melancia",
      "Morango e Kiwi",
      "Limão e Lima",
      "Morango e Banana",
      "Fruta do Dragão e Morango com Gelo Negro",
      "Pêssego e Baga",
      "Morango e Melancia",
      "Cereja e Cola",
      "Explosão de Uva",
      "Mistura de Bagas",
      "Mirtilo e Framboesa Azeda",
      "Pêssego, Manga e Ananás",
      "Pina Colada",
      "Sex on the Beach",
      "Cereja Gasosa",
      "Monster Mango",
      "Limonada Rosa"
    ],
    preco: 47.99,
    imagem: "images/vapes/40kvapesolo.png",
    bestseller: false,
    stockBaixo: true
  },
  {
    id: "vapsolo-60k",
    marca: "VapSolo",
    nome: "Caixa VapeSolo 60k",
    puffs: "60K PUFFS",
    sabores: [
      "Kiwi & Uva & Pêssego & Maracujá",
      "Laranja e Limão & Morango e Mirtilo",
      "Kiwi e Maracujá & Uva",
      "Melancia e Limão & Morango e Mirtilo",
      "Fruta do Dragão e Morango & Mirtilo e Pêssego",
      "Fruta do Dragão e Melancia & Mirtilo e Pêssego",
      "Melancia e Banana & Ananás, Morango e Mirtilo",
      "Melancia, Pêssego e Kiwi & Morango e Framboesa",
      "Melancia, Banana e Limão & Morango e Framboesa",
      "Kiwi e Maracujá & Morango e Romã"
    ],
    preco: 54.99,
    imagem: "images/vapes/60kvapesolo.png",
    bestseller: false
  },
  {
    id: "vapsolo-50k-2in1",
    marca: "VapSolo",
    nome: "Caixa VapeSolo 50k 2in1",
    puffs: "50K PUFFS",
    sabores: [
      "Frutos Tropicais Mistos",
      "Melancia, Morango, Framboesa & Fruta do Dragão",
      "Banana",
      "Pêssego, Toranja, Uva & Mirtilo",
      "Mirtilo, Amora & Framboesa",
      "Cola de Pêssego",
      "Mirtilo & Framboesa",
      "Melancia",
      "Maracujá & Cereja",
      "Kiwi, Mirtilo, Framboesa, Maracujá & Uva"
    ],
    preco: 52.99,
    imagem: "images/vapes/vapesolo50k.png",
    bestseller: false,
    stockBaixo: true
  },
  {
    id: "vapsolo-100k-sexonthebeach",
    marca: "VapSolo",
    nome: "Caixa VapeSolo 100k",
    puffs: "100K PUFFS",
    sabores: [
      "Mirtilo e Framboesa Gelados",
      "Framboesa Mirtilo",
      "Coco Ananás & Rum",
      "Coco Ananás",
      "Limão",
      "Maracujá Limão",
      "Bagas Mistas",
      "Manga Ananás",
      "Manga Limão Toranja",
      "Toranja Arando Pêssego"
    ],
    preco: 68.99,
    imagem: "images/vapes/vapesolo100k.png",
    bestseller: true,
    stockBaixo: true,
    avaliacao: 4.4
  },
  {
    id: "vapme-20k-shishapromax",
    marca: "VapME",
    nome: "Caixa VapeME 20k Shisha Pro Max",
    puffs: "20K PUFFS",
    sabores: [
      "Bagas mistas",
      "Melancia com morango",
      "Ponche de uva",
      "Gelo de melancia",
      "Pêssego Manga Ananás",
      "Gelo de morango",
      "Pêssego",
      "Lady Killa",
      "Cereja",
      "Mirtilo Framboesa",
      "Amor 66",
      "Red Bull de melancia",
      "Morango Uva",
      "Rebuçados de morango e framboesa",
      "Mamba branca",
      "Melancia Cereja",
      "Maçã congelada",
      "Hortelã-limão",
      "Gelo de groselha",
      "Batido de ananás",
      "Mirtilo no gelo",
      "Kiwi Maracujá Goiaba",
      "Limonada Razz Azul",
      "Morango Kiwi"
    ],
    preco: 58.99,
    imagem: "images/vapes/20kshishapromax.png",
    bestseller: true,
    avaliacao: 4.7
  },
  {
    id: "vapme-crystal-7k",
    marca: "VapME",
    nome: "Caixa VapeME Crystal 7k",
    puffs: "7000 PUFFS",
    sabores: [],
    preco: 40.25,
    imagem: "images/vapes/vapeme7k.png",
    bestseller: false,
    disponivel: false
  },
  {
    id: "vapme-digital-30k",
    marca: "VapME",
    nome: "Caixa VapeME VAPME DIGITAL 30k",
    puffs: "30K PUFFS",
    sabores: [
      "Mirtilo Framboesa",
      "Cereja Gelada",
      "Kiwi Maracujá Goiaba",
      "Licor de Amora",
      "Morango Kiwi",
      "Red Bull de morango",
      "Morango uva",
      "Melancia Gelada",
      "Pêssego Gelado",
      "Bebida energética",
      "Lady Killa",
      "Amor 66"
    ],
    preco: 44.50,
    imagem: "images/vapes/vapme30kdigital.png",
    bestseller: false
  },
  {
    id: "waspe-aiviou-150k",
    marca: "WASPE",
    nome: "Caixa Vape WASPE AIVIOU 150k",
    puffs: "150K PUFFS",
    sabores: [
      "Gelo de melancia e lima-limão e pêssego-limão",
      "Gelo de mirtilo e Kiwi de morango e Gelo de morango e cereja",
      "Red Bull Gelado & Framboesa Pomp & Manga e Morango Azedo",
      "Melancia com morango e gelo de pêssego e gelo de bagas triplas",
      "Cereja e Cola Gelada & Morango e Red Bull Gelado & Melancia e Framboesa",
      "Gelo de uva e Razz azul Gelo de cereja e morango",
      "Mistura de frutos silvestres e gelo de dragão negro e cola de morango e cereja",
      "Cola Gasosa Gelada & Bebida Energética & Cereja Gelada",
      "Morango Banana e Kiwi Melância e Coco Morango",
      "Red Bull e Cola Gelada & Morango, Framboesa e Cereja & Amora e Fruta do Dragão",
      "Gelo de morango, melancia, chiclete e manga azeda e gelo de morango e uva",
      "Melão, Maracujá, Amora, Gelo e Maçã, Kiwi"
    ],
    preco: 49.50,
    imagem: "images/vapes/waspe150k.png",
    bestseller: false
  },
  {
    id: "waspe-bar-60k",
    marca: "WASPE",
    nome: "Caixa Vape WASPE Bar 60k",
    puffs: "60K PUFFS",
    sabores: [
      "Gelo de mirtilo",
      "Gelo de uva",
      "Lima-limão",
      "Banana com morango",
      "Bagas mistas",
      "Red Bull Gelo",
      "Melancia Kiwi",
      "Melancia com morango",
      "Mirtilo Framboesa Cereja",
      "Amora preta Groselha preta",
      "Gelo Dragão Negro de Morango",
      "Morango Kiwi",
      "Cola de cereja azul",
      "Gelo de melão kiwi",
      "Pêssego Manga Ananás"
    ],
    preco: 46.50,
    imagem: "images/vapes/waspebar60k.png",
    bestseller: false
  },
  {
    id: "waspe-100k-4in1",
    marca: "WASPE",
    nome: "Caixa Vape WASPE 100k 4in1",
    puffs: "100K PUFFS",
    sabores: [
      "Melancia Gelada & Morango e Kiwi & Framboesa e Melancia & Lima e Limão",
      "Melancia com morango & MR.Blue & Gelo de uva & Rebuçados arco-íris",
      "Red Bull gelado & Banana gelada & Ananás e Coco Gelado & Tripla manga gelada",
      "Morango, Framboesa e Cereja & Cereja Louca Gelada & Cereja Azul Gelada & Cola gelada",
      "Banana com morango & Red Bull com morango & Manga com morango & Limonada cor-de-rosa",
      "Gelo de mirtilo & Black Dragon & Gelo de morango & Melancia de morango",
      "Gelo de cola de cereja e gelo de cereja de morango e gelo de cola de morango e pastilha elástica de melancia de morango",
      "Pêssego gelado & Fruta tropical & Explosão de fruta & Baga de pêssego",
      "Uva Gelada & Morango e Kiwi & Morango, Framboesa e Cereja & Black Dragon",
      "Mistura de bagas e gelo duplo de maçã e framboesa de mirtilo e mel de mirtilo",
      "Red Bull de morango & Pastilha elástica de melancia de morango & Red Bull gelado & Cereja cola gelado",
      "Framboesa de mirtilo & Limonada de mirtilo & Mistura de frutos silvestres & Gelo de mel de uva"
    ],
    preco: 48.50,
    imagem: "images/vapes/waspe100k.png",
    bestseller: false
  },
  {
    id: "waspe-crystal-180k",
    marca: "WASPE",
    nome: "Caixa Vape WASPE Crystal 180K",
    puffs: "180K PUFFS",
    sabores: [
      "Gelo de melancia & Gelo de lima & Gelo de manga azeda & Gelo de melão kiwi",
      "Gelo de mirtilo & Cola de cereja & Morango Baunilha & Cereja-limão",
      "Red Bull Gelo & Gelo de morango & Sour Fucking Fab & Cola Gelada",
      "Gelo de uva & Kiwi de morango & Gelo de melancia & Rancheiro azul",
      "Melão Maracujá e Manga Azeda Ananás e Banana Caramelo e Morango Baga",
      "Melancia com morango & Menta fresca & Gelo de Razz Azul & Gelo de groselha preta",
      "Gelo de Amora & Maçã Dupla & Gelo de Dragão Negro & Kiwi de Morango",
      "Red Bull de morango & Cola de cereja & Limão de cereja & Fruta tropical",
      "Mistura de frutos silvestres e limão Lima e mirtilo Framboesa e maçã verde",
      "Morango Framboesa Cereja & Morango Melancia & Kiwi Melância & Lima Limão",
      "Morango, Banana, Manga, Pêssego, Bagas triplas, Morango, Ananás",
      "Limonada Razz Azul & Limão Cereja & Gelo Mirtilo & Pêssego Melancia"
    ],
    preco: 51.50,
    imagem: "images/vapes/waspe180k.png",
    bestseller: false
  },
  {
    id: "stagbar-80k-4in1",
    marca: "Stag Bar",
    nome: "Caixa Vape Stag Bar 4in1 80k",
    puffs: "80K PUFFS",
    sabores: [
      "Gelo de mirtilo & Mistura de bagas & Gelo de Razz Azul & Gelo de mirtilo e framboesa",
      "Gelo de melancia & Melancia de morango & Pastilha elástica de melancia & Gelo de framboesa de melancia",
      "Morango Gelado & Morango e Kiwi & Morango e Uva & Morango, Framboesa e Cereja Gelados",
      "Cereja Gelada & Cereja e Razz Azul & Limonada de Cereja e Pêssego & Cereja e Cola",
      "Gelo de mirtilo & Gelo de morango & Gelo de melancia & Gelo de cereja",
      "Morango Framboesa Cereja Gelo e Triplo Melão e Ananás Banana Morango e Kiwi Maracujá Goiaba",
      "Fusão de Razz Azul & Gelo de Ananás e Coco & Limonada Rosa & Fusão de Morango e Melancia",
      "Pêssego, Manga, Ananás e Pêssego, Limão e Lima e Manga Tripla",
      "Mr Blue & Mirtilo e Framboesa Gelados & Morango e Kiwi & Mirtilo, Cereja e Arando",
      "Banana Morango & Morango Uva & Red Bull & Maçã Dupla",
      "Limão Lima e Morango Kiwi e Menta Gelo e Fruto do Dragão Banana Cereja",
      "Coco Loco & Ananás Banana Melão & Cereja Chupachups & Banana Cereja",
      "Sex on the Beach & Coco Loco & Fruta do Dragão, Banana e Cereja & Limão e Lima",
      "Love 66 & Cereja Chupachups & Melancia e Framboesa Gelada & Morango e Kiwi",
      "Cola Gelada & Red Bull & Sex on the Beach & Ananás, Banana e Melão"
    ],
    preco: 54.50,
    imagem: "images/vapes/stagbar80k.png",
    bestseller: false
  },
  {
    id: "jnr-ragegorilla-55k",
    marca: "JNR",
    nome: "Caixa Vape JNR RAGE GORILLA 55K",
    puffs: "55K PUFFS",
    sabores: [
      "Gelo de morango",
      "Cola de cereja",
      "Gelo de melancia",
      "Azul Razz Cereja",
      "Morango Kiwi",
      "Pêssegos",
      "Gelo de mirtilo",
      "Bagas mistas",
      "Maçã dupla",
      "Cereja",
      "Mirtilo Framboesa Cereja",
      "Gelo de melancia e morango",
      "Gelo de melancia com kiwi",
      "Mirtilo Framboesa Ácida",
      "Pêssego Branco Razz",
      "Manga Maracujá",
      "Pêssego Manga Melancia",
      "Pastilha elástica de melancia",
      "Banana com morango",
      "Kiwi Paixão Goiaba"
    ],
    preco: 46.50,
    imagem: "images/vapes/vapejnr55kgorilla.png",
    bestseller: false
  },
  {
    id: "bangbox-king-500k-8in1",
    marca: "Bang Box",
    nome: "Caixa Vape Bang King 500K 8in1",
    puffs: "500K PUFFS",
    sabores: [
      "Razz Azul Gelado, Pêssego Gelado, Uva Gelada, Manga Gelada",
      "Pêssego, Manga e Melancia, Red Bull, Morango e Red Bull, Morango e Kiwi",
      "Morango e Manga, Gelado de Morango, Banana Gelada, Morango e Lichia",
      "Maçã Dupla, Manga e Pêssego, Morango e Melancia, Morango e Cola de Baunilha",
      "Gelo de Dragão Negro, Love 66, Mr Blue, Limonada de Morango",
      "Kiwi, Maracujá e Goiaba, Ursinho de Goma, Rebuçados Arco-íris, Algodão Doce",
      "Melancia Gelada, Limão e Menta, Morango Gelado, Cereja e Razz Azul",
      "Tripla Baga, Fruta Tropical, Morango e Banana, Limonada Rosa",
      "Melão Triplo, Mirtilo Gelado, Bomba de Cereja, Ananás e Coco",
      "Pastilha Elástica de Melancia, Mirtilos e Framboesas, Framboesa e Melancia, Melancia e Mirtilo",
      "Menta Fresca, Pêssego e Cereja, Pêssego, Baga e Limão, Kiwi e Melancia Gelada",
      "Limão-Lima Gasoso, Mojito de Maçã, Gelo de Ananás, Cola Gelada"
    ],
    preco: 65.99,
    imagem: "images/vapes/bang500k.png",
    bestseller: false,
    colecoes: ["Mais Puffs"]
  },
  {
    id: "bangbox-leader-450k-15in1",
    marca: "Bang Box",
    nome: "Caixa Vape Bang Leader 450K",
    puffs: "450K PUFFS",
    sabores: [
      "Mirtilo com Gelo & Pêssego, Manga, Melancia & Beijo de Maracujá & Melão com Maçã",
      "Mirtilo, framboesa e frutos silvestres, cereja da Califórnia e maracujá com manga",
      "Cola Gelada & Bebida Energética & Cereja Gelada & Melão e Maracujá",
      "Bebida energética & Mirtilo, Melancia & Maçã ácida, Framboesa & Ursinho de goma",
      "Gelo de Pêssego & Gelo de Mirtilo & Doces Arco-íris & Limonada de Limão e Laranja",
      "Ananás, Coco, Razz Azul, Mistura de Frutos Silvestres e Manga com Pêssego",
      "Morango, Manga e Melancia; Pastilha Elástica; Mojito Vermelho; Love 66",
      "Morango, Melancia e Kiwi; Maracujá, Goiaba e Manga; Gelo e Melancia; Pêssego Ácido",
      "Gelo de Melancia & Mirtilo e Cereja & Verão & Manga Ácida e Ananás",
      "Gelo de Melancia & Mirtilo com Menta & Maçã Fuji com Gelo & Romance de Lima",
      "Gelo de melancia, arando, morango e manga",
      "Gelo de Melancia & Red Bull & Morango e Kiwi & Gelo de Mirtilo"
    ],
    preco: 63.99,
    imagem: "images/vapes/bang450kl.png",
    bestseller: false,
    colecoes: ["Mais Puffs"]
  },
  {
    id: "bangbox-leader-520k",
    marca: "Bang Box",
    nome: "Caixa Vape Bang Leader 520K",
    puffs: "520K PUFFS",
    sabores: [
      "Soda de laranja",
      "Cola Gelada",
      "Mojito de Limão",
      "Champanhe de frutos silvestres",
      "Verde de Inverno",
      "Bebida energética",
      "Congelamento de manga",
      "Gelo de uva",
      "Gelo exuberante",
      "Mirtilo, Framboesa e Limão",
      "Gelo de ananás",
      "Maçã ácida"
    ],
    preco: 66.99,
    imagem: "images/vapes/520kbang.png",
    bestseller: false,
    colecoes: ["Mais Puffs"]
  },
  {
    id: "bangbox-blaze-80k-shisha",
    marca: "Bang Box",
    nome: "Caixa Vape BANG BLAZE 80K Shisha",
    puffs: "80K PUFFS",
    sabores: [
      "Melancia",
      "Maçã Dupla",
      "Cereja Hortelã",
      "Morango e Kiwi",
      "Melancia de pêssego",
      "Melancia Morango Melão",
      "Razz azul",
      "Mistura de Bagas",
      "Maracujá",
      "Red Bull",
      "Melancia de morango"
    ],
    preco: 52.99,
    imagem: "images/vapes/80shishabang.png",
    bestseller: false
  },
  {
    id: "happbar-100k-pro",
    marca: "Happ Bar",
    nome: "Caixa Vape Happ Bar 100K Pro",
    puffs: "100K PUFFS",
    sabores: [],
    preco: 51.50,
    imagem: "images/vapes/ChatGPT Image 29_08_2026, 15_14_38.png",
    bestseller: false,
    disponivel: false
  }
];

/* ======================================================
   ESTADO GLOBAL
   ====================================================== */
let carrinho = JSON.parse(localStorage.getItem("zdv_carrinho") || "[]");
let marcaAtiva = "Todas";

// Guarda quantas unidades de cada sabor foram escolhidas, por produto:
// { [produtoId]: { [sabor]: quantidade } }
const selecaoSabores = {};

// Guarda a nicotina escolhida por produto: { [produtoId]: "0%" | "2%" | "5%" | null }
const selecaoNicotina = {};

// Guarda se o cliente escolheu "sabores misturados" por produto: { [instanceKey]: boolean }
const selecaoMisturado = {};

// Contador para gerar uma chave única sempre que o mesmo produto aparece em mais do que um card na página
// (ex: um produto "mais vendido" aparece tanto na secção "Mais Vendidos" como no Catálogo)
let instanciaContador = 0;

const OPCOES_NICOTINA = ["0%", "2%", "5%"];

function guardarCarrinho() {
  localStorage.setItem("zdv_carrinho", JSON.stringify(carrinho));
}

function formatarPreco(valor) {
  return valor.toFixed(2).replace(".", ",") + " €";
}

/* ======================================================
   ÍCONE PLACEHOLDER (usado enquanto não há foto real)
   ====================================================== */
function vapeIconSVG() {
  return `<svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <rect x="9" y="3" width="6" height="4" rx="1"></rect>
    <path d="M8 7h8l1 4v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8l1-4z"></path>
    <path d="M17 9c1.5 1 2.5 2.4 2.5 4"></path>
    <path d="M19 6.5c1 .6 1.8 1.6 1.8 2.8"></path>
  </svg>`;
}

function mediaProduto(produto) {
  if (produto.imagem) {
    return `<img class="card-image" src="${produto.imagem}" alt="${produto.nome}" loading="lazy" decoding="async">`;
  }
  return `<div class="card-icon">${vapeIconSVG()}</div>`;
}

function ratingHTML(produto) {
  if (typeof produto.avaliacao !== "number") return "";
  const percentagem = (produto.avaliacao / 5) * 100;
  const estrelas = "★★★★★";
  return `
    <div class="rating-row">
      <div class="stars" role="img" aria-label="Avaliação ${produto.avaliacao} de 5">
        <div class="stars-bg">${estrelas}</div>
        <div class="stars-fill" style="width:${percentagem}%">${estrelas}</div>
      </div>
      <span class="rating-value">${produto.avaliacao.toFixed(1)}/5</span>
    </div>
  `;
}

/* ======================================================
   SELEÇÃO DE SABORES
   ====================================================== */
function inicializarSelecao(produto, instanceKey) {
  if (!selecaoSabores[instanceKey]) {
    const base = {};
    produto.sabores.forEach(s => { base[s] = 0; });
    selecaoSabores[instanceKey] = base;
  }
  if (!(instanceKey in selecaoNicotina)) {
    selecaoNicotina[instanceKey] = null;
  }
  if (!(instanceKey in selecaoMisturado)) {
    selecaoMisturado[instanceKey] = false;
  }
}

function totalEscolhido(instanceKey) {
  return Object.values(selecaoSabores[instanceKey]).reduce((a, b) => a + b, 0);
}

function maxParaProduto(qty) {
  return UNIDADES_POR_CAIXA * qty;
}

function atualizarPainelSabores(card, produto, qty, instanceKey) {
  const max = maxParaProduto(qty);
  const total = totalEscolhido(instanceKey);
  const misturado = selecaoMisturado[instanceKey];

  const countWrapperEl = card.querySelector(".flavor-select-count");
  const optionsEl = card.querySelector(".flavor-options");

  if (misturado) {
    countWrapperEl.textContent = "(mistura à escolha do vendedor)";
    optionsEl.classList.add("flavor-options--collapsed");
  } else {
    countWrapperEl.innerHTML = `(<span class="flavor-count-current">${total}</span>/<span class="flavor-count-max">${max}</span> escolhas)`;
    optionsEl.classList.remove("flavor-options--collapsed");
  }

  // Atualiza o preço para refletir a quantidade de caixas escolhida
  card.querySelector(".price").textContent = formatarPreco(produto.preco * qty);

  // A partir de 2 caixas, o envio passa a ser gratuito
  const shippingEl = card.querySelector(".shipping-note");
  if (qty >= 2) {
    shippingEl.textContent = "Envio Grátis";
    shippingEl.classList.add("shipping-note--free");
  } else {
    shippingEl.textContent = `+${TAXA_ENVIO}€ envio`;
    shippingEl.classList.remove("shipping-note--free");
  }

  const nicotinaEscolhida = selecaoNicotina[instanceKey];
  const addBtn = card.querySelector(".add-cart-btn");
  const buyBtn = card.querySelector(".buy-now-btn");
  const saboresOk = misturado || total === max;
  const completo = saboresOk && !!nicotinaEscolhida;

  addBtn.disabled = !completo;
  buyBtn.disabled = !completo;

  const titleEl = card.querySelector(".flavor-select-title");
  titleEl.classList.toggle("flavor-select-title--done", saboresOk);

  // Atualiza cada linha de sabor (contador + estado do botão "+")
  card.querySelectorAll(".flavor-row").forEach(row => {
    const sabor = row.dataset.flavor;
    const count = selecaoSabores[instanceKey][sabor];
    row.querySelector(".flavor-count").textContent = count;
    row.querySelector(".flavor-plus").disabled = total >= max;
    row.querySelector(".flavor-minus").disabled = count === 0;
  });

  // Atualiza o botão de nicotina ativo
  card.querySelectorAll(".nicotine-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.value === nicotinaEscolhida);
  });
}

// Fotos de feedback de clientes (carrossel na página inicial)
const FEEDBACK_IMAGENS = [
  "images/feedbacks/feedback1ze.png",
  "images/feedbacks/feedback2ze.png",
  "images/feedbacks/feedback3ze.png",
  "images/feedbacks/feedback4ze.png",
  "images/feedbacks/feedback5ze.png",
  "images/feedbacks/feedback6ze.png",
  "images/feedbacks/feedback7ze.png",
  "images/feedbacks/feedback8ze.png",
  "images/feedbacks/feedback9ze.png",
  "images/feedbacks/feedback10ze.png",
  "images/feedbacks/feedback11ze.png",
  "images/feedbacks/feedback12ze.png"
];

/* ======================================================
   CARROSSEL DE FEEDBACK
   ====================================================== */
function renderFeedbackMarquee() {
  const track = document.getElementById("feedbackMarquee");
  if (!track) return;

  // Duplica a lista para permitir o loop infinito sem salto visível
  const lista = [...FEEDBACK_IMAGENS, ...FEEDBACK_IMAGENS];
  track.innerHTML = lista
    .map((src, i) => `<img class="feedback-img" src="${src}" alt="Feedback de cliente" loading="lazy" data-idx="${i}">`)
    .join("");

  // Pausa a animação enquanto o rato está por cima (só relevante em desktop)
  const wrap = track.closest(".feedback-marquee-wrap");
  wrap.addEventListener("mouseenter", () => track.classList.add("paused"));
  wrap.addEventListener("mouseleave", () => track.classList.remove("paused"));

  // Loop de deteção de foco: descobre qual imagem está mais perto do centro
  // do ecrã visível e marca-a como "nítida", desfocando as restantes.
  // Corre a cada ~150ms (em vez de todos os frames) para poupar desempenho,
  // e para-se por completo se a pessoa preferir menos animações ou
  // se a aba/separador não estiver visível.
  const prefereMenosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefereMenosMovimento) return;

  const imgs = track.querySelectorAll(".feedback-img");
  let intervalId = null;

  function atualizarFoco() {
    if (document.hidden) return;

    const wrapRect = wrap.getBoundingClientRect();
    const centroWrap = wrapRect.left + wrapRect.width / 2;

    let maisPerto = null;
    let menorDistancia = Infinity;

    imgs.forEach(img => {
      const rect = img.getBoundingClientRect();
      const centroImg = rect.left + rect.width / 2;
      const distancia = Math.abs(centroImg - centroWrap);
      if (distancia < menorDistancia) {
        menorDistancia = distancia;
        maisPerto = img;
      }
    });

    imgs.forEach(img => {
      if (img === maisPerto) img.classList.add("is-sharp");
      else img.classList.remove("is-sharp");
    });
  }

  function iniciar() {
    if (intervalId) return;
    intervalId = setInterval(atualizarFoco, 150);
  }
  function parar() {
    if (!intervalId) return;
    clearInterval(intervalId);
    intervalId = null;
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) parar();
    else iniciar();
  });

  // Só corre enquanto o carrossel está visível no ecrã (poupa CPU quando
  // a pessoa está a ver outra parte da página)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) iniciar();
      else parar();
    });
  }, { threshold: 0.05 });
  observer.observe(wrap);
}

/* ======================================================
   RENDER: BANNER DE CATÁLOGOS (marcas)
   ====================================================== */
function renderHeroCatalogButtons() {
  const marcas = [...new Set(PRODUTOS.map(p => p.marca))];
  const container = document.getElementById("heroCatalogButtons");
  if (!container) return;
  container.innerHTML = "";

  marcas.forEach(marca => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "hero-catalog-btn";
    btn.textContent = marca;
    btn.addEventListener("click", () => {
      marcaAtiva = marca;
      renderFiltros();
      renderProdutos();
      document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
    });
    container.appendChild(btn);
  });
}

/* ======================================================
   RENDER: FILTROS DE MARCA (dentro do catálogo)
   ====================================================== */
function renderFiltros() {
  const marcas = ["Todas", ...new Set(PRODUTOS.map(p => p.marca))];
  const container = document.getElementById("brandFilters");
  container.innerHTML = "";

  marcas.forEach(marca => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filter-pill" + (marca === marcaAtiva ? " active" : "");
    btn.textContent = marca;
    btn.addEventListener("click", () => {
      marcaAtiva = marca;
      renderFiltros();
      renderProdutos();
    });
    container.appendChild(btn);
  });
}

/* ======================================================
   CARD DE PRODUTO ESGOTADO (sem interações possíveis)
   ====================================================== */
function buildOutOfStockCard(produto) {
  const card = document.createElement("div");
  card.className = "product-card product-card--out";

  card.innerHTML = `
    <span class="out-of-stock-tag">ESGOTADO</span>
    <div class="card-top">
      <span class="brand-tag">${produto.marca}</span>
      <span class="puff-badge">${produto.puffs}</span>
    </div>
    <div class="card-media-out">${mediaProduto(produto)}</div>
    <h3 class="product-name">${produto.nome}</h3>
    <p class="pack-note">Cada caixa contém ${UNIDADES_POR_CAIXA} vapes</p>
    <p class="out-of-stock-note">De momento sem stock. Não é possível comprar esta caixa neste momento.</p>
    <div class="card-bottom">
      <span class="price">${formatarPreco(produto.preco)}</span>
    </div>
    <div class="card-actions">
      <button type="button" class="btn btn--ghost btn--sm" disabled>Adicionar ao carrinho</button>
      <button type="button" class="btn btn--primary btn--sm" disabled>Indisponível</button>
    </div>
  `;

  return card;
}

/* ======================================================
   CARD DE PRODUTO (reutilizado no catálogo e nos mais vendidos)
   ====================================================== */
function buildProductCard(produto) {
  if (produto.disponivel === false) {
    return buildOutOfStockCard(produto);
  }

  const instanceKey = `${produto.id}::${instanciaContador++}`;
  inicializarSelecao(produto, instanceKey);

  const card = document.createElement("div");
  card.className = "product-card";
  card.dataset.qty = "1";

  card.innerHTML = `
    ${produto.bestseller ? `<span class="bestseller-tag">MAIS VENDIDO</span>` : ""}
    ${produto.stockBaixo ? `<span class="low-stock-tag">RESTAM POUCAS CAIXAS</span>` : ""}
    <div class="card-top">
      <span class="brand-tag">${produto.marca}</span>
      <span class="puff-badge">${produto.puffs}</span>
    </div>
    ${mediaProduto(produto)}
    <h3 class="product-name">${produto.nome}</h3>
    <p class="pack-note">Cada caixa contém ${UNIDADES_POR_CAIXA} vapes</p>
    ${ratingHTML(produto)}

    <div class="flavor-select">
      <p class="flavor-select-title">
        Escolha os sabores
        <span class="flavor-select-count">(<span class="flavor-count-current">0</span>/<span class="flavor-count-max">${UNIDADES_POR_CAIXA}</span> escolhas)</span>
      </p>

      <label class="mixed-toggle">
        <input type="checkbox" class="mixed-checkbox">
        <span class="mixed-toggle-track"><span class="mixed-toggle-thumb"></span></span>
        <span class="mixed-toggle-label">Sabores misturados (deixo a escolha)</span>
      </label>

      <div class="flavor-options">
        ${produto.sabores.map(sabor => `
          <div class="flavor-row" data-flavor="${sabor}">
            <span class="flavor-row-name">${sabor}</span>
            <div class="flavor-row-stepper">
              <button type="button" class="flavor-minus" aria-label="Remover ${sabor}">−</button>
              <span class="flavor-count">0</span>
              <button type="button" class="flavor-plus" aria-label="Adicionar ${sabor}">+</button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="nicotine-select">
      <p class="nicotine-select-title">Escolha a nicotina</p>
      <div class="nicotine-options">
        ${OPCOES_NICOTINA.map(valor => `<button type="button" class="nicotine-pill" data-value="${valor}">${valor}</button>`).join("")}
      </div>
    </div>

    <div class="card-bottom">
      <span class="price">${formatarPreco(produto.preco)}</span>
      <span class="shipping-note">+${TAXA_ENVIO}€ envio</span>
    </div>
    <div class="card-actions">
      <div class="qty-stepper" data-qty="1">
        <button type="button" class="qty-minus" aria-label="Diminuir quantidade">−</button>
        <span class="qty-value">1</span>
        <button type="button" class="qty-plus" aria-label="Aumentar quantidade">+</button>
      </div>
      <button type="button" class="btn btn--ghost btn--sm add-cart-btn" disabled>Adicionar ao carrinho</button>
      <button type="button" class="btn btn--primary btn--sm buy-now-btn" disabled>Comprar agora</button>
    </div>
  `;

  const qtyStepper = card.querySelector(".qty-stepper");
  const qtyValue = card.querySelector(".qty-value");

  function resetSelecao() {
    produto.sabores.forEach(s => { selecaoSabores[instanceKey][s] = 0; });
  }

  function resetSelecaoCompleta() {
    resetSelecao();
    selecaoNicotina[instanceKey] = null;
    selecaoMisturado[instanceKey] = false;
    card.querySelector(".mixed-checkbox").checked = false;
  }

  qtyStepper.querySelector(".qty-minus").addEventListener("click", () => {
    let q = parseInt(qtyStepper.dataset.qty, 10);
    if (q > 1) {
      q--;
      qtyStepper.dataset.qty = q;
      qtyValue.textContent = q;
      resetSelecao();
      atualizarPainelSabores(card, produto, q, instanceKey);
    }
  });
  qtyStepper.querySelector(".qty-plus").addEventListener("click", () => {
    let q = parseInt(qtyStepper.dataset.qty, 10);
    q++;
    qtyStepper.dataset.qty = q;
    qtyValue.textContent = q;
    resetSelecao();
    atualizarPainelSabores(card, produto, q, instanceKey);
  });

  card.querySelectorAll(".flavor-row").forEach(row => {
    const sabor = row.dataset.flavor;
    row.querySelector(".flavor-plus").addEventListener("click", () => {
      const qty = parseInt(qtyStepper.dataset.qty, 10);
      const max = maxParaProduto(qty);
      if (totalEscolhido(instanceKey) < max) {
        selecaoSabores[instanceKey][sabor]++;
        atualizarPainelSabores(card, produto, qty, instanceKey);
      }
    });
    row.querySelector(".flavor-minus").addEventListener("click", () => {
      const qty = parseInt(qtyStepper.dataset.qty, 10);
      if (selecaoSabores[instanceKey][sabor] > 0) {
        selecaoSabores[instanceKey][sabor]--;
        atualizarPainelSabores(card, produto, qty, instanceKey);
      }
    });
  });

  card.querySelectorAll(".nicotine-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      selecaoNicotina[instanceKey] = pill.dataset.value;
      const qty = parseInt(qtyStepper.dataset.qty, 10);
      atualizarPainelSabores(card, produto, qty, instanceKey);
    });
  });

  card.querySelector(".mixed-checkbox").addEventListener("change", (e) => {
    selecaoMisturado[instanceKey] = e.target.checked;
    const qty = parseInt(qtyStepper.dataset.qty, 10);
    atualizarPainelSabores(card, produto, qty, instanceKey);
  });

  card.querySelector(".add-cart-btn").addEventListener("click", () => {
    const qty = parseInt(qtyStepper.dataset.qty, 10);
    adicionarAoCarrinho(produto, qty, instanceKey);
    resetSelecaoCompleta();
    atualizarPainelSabores(card, produto, qty, instanceKey);
  });

  card.querySelector(".buy-now-btn").addEventListener("click", () => {
    const qty = parseInt(qtyStepper.dataset.qty, 10);
    comprarAgora(produto, qty, instanceKey);
  });

  // estado inicial
  atualizarPainelSabores(card, produto, 1, instanceKey);

  return card;
}

/* ======================================================
   RENDER: GRID DO CATÁLOGO
   ====================================================== */
function renderProdutos() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  const lista = PRODUTOS.filter(p => marcaAtiva === "Todas" || p.marca === marcaAtiva);
  lista.forEach(produto => grid.appendChild(buildProductCard(produto)));
}

/* ======================================================
   RENDER: MAIS VENDIDOS
   ====================================================== */
function renderBestsellers() {
  const grid = document.getElementById("bestsellerGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const lista = PRODUTOS.filter(p => p.bestseller);
  lista.forEach(produto => grid.appendChild(buildProductCard(produto)));
}

/* ======================================================
   RENDER: MAIS PUFFS (coleção transversal a marcas)
   ====================================================== */
function renderMaisPuffs() {
  const grid = document.getElementById("maisPuffsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const lista = PRODUTOS.filter(p => Array.isArray(p.colecoes) && p.colecoes.includes("Mais Puffs"));
  lista.forEach(produto => grid.appendChild(buildProductCard(produto)));
}

/* ======================================================
   CARRINHO: lógica
   ====================================================== */
function saboresEscolhidosTexto(instanceKey) {
  if (selecaoMisturado[instanceKey]) {
    return ["Sabores misturados (à escolha do vendedor)"];
  }
  const mapa = selecaoSabores[instanceKey];
  return Object.entries(mapa)
    .filter(([, count]) => count > 0)
    .map(([sabor, count]) => `${sabor} (x${count})`);
}

function adicionarAoCarrinho(produto, qty, instanceKey) {
  const saboresTexto = saboresEscolhidosTexto(instanceKey);
  const nicotina = selecaoNicotina[instanceKey];

  carrinho.push({
    id: produto.id,
    nome: produto.nome,
    marca: produto.marca,
    preco: produto.preco,
    qty,
    sabores: saboresTexto,
    nicotina
  });

  guardarCarrinho();
  renderCarrinho();
  abrirCarrinho();
}

function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  guardarCarrinho();
  renderCarrinho();
}

function calcularTotal() {
  return carrinho.reduce((soma, item) => soma + item.preco * item.qty, 0);
}

function renderCarrinho() {
  const container = document.getElementById("cartItems");
  const totalRow = document.getElementById("cartTotalRow");
  const form = document.getElementById("shippingForm");
  const countBadge = document.getElementById("cartCount");

  const totalItens = carrinho.reduce((s, i) => s + i.qty, 0);
  countBadge.textContent = totalItens;

  container.innerHTML = "";

  if (carrinho.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.className = "cart-empty";
    emptyMsg.id = "cartEmpty";
    emptyMsg.textContent = "O carrinho está vazio. Adiciona uma caixa do catálogo.";
    container.appendChild(emptyMsg);
    totalRow.hidden = true;
    form.hidden = true;
    return;
  }

  totalRow.hidden = false;
  form.hidden = false;

  carrinho.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="cart-item-info">
        <p class="cart-item-name">${item.nome} ${item.qty > 1 ? `(x${item.qty} caixas)` : ""}</p>
        <p class="cart-item-brand">${item.marca}</p>
        ${item.sabores && item.sabores.length ? `<p class="cart-item-flavors">${item.sabores.join(", ")}</p>` : ""}
        ${item.nicotina ? `<p class="cart-item-nicotine">Nicotina: ${item.nicotina}</p>` : ""}
        <p class="cart-item-price">${formatarPreco(item.preco * item.qty)}</p>
      </div>
      <button class="cart-item-remove" aria-label="Remover">&times;</button>
    `;
    row.querySelector(".cart-item-remove").addEventListener("click", () => removerDoCarrinho(index));
    container.appendChild(row);
  });

  document.getElementById("cartTotal").textContent = formatarPreco(calcularTotal());
}

/* ======================================================
   WHATSAPP: mensagens
   ====================================================== */
function abrirWhatsApp(mensagem) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

function comprarAgora(produto, qty, instanceKey) {
  const saboresTexto = saboresEscolhidosTexto(instanceKey);
  const nicotina = selecaoNicotina[instanceKey];
  const envioTexto = qty >= 2 ? "Envio: Grátis" : `Envio: ${formatarPreco(TAXA_ENVIO)}`;

  const linhas = [
    "Olá! Quero comprar diretamente:",
    "",
    `📦 ${produto.nome} (${produto.marca})`,
    `Puffs: ${produto.puffs}`,
    `Caixas: ${qty} (${qty * UNIDADES_POR_CAIXA} vapes no total)`,
    `Nicotina: ${nicotina}`,
    "Sabores escolhidos:",
    ...saboresTexto.map(s => `  - ${s}`),
    `Preço: ${formatarPreco(produto.preco * qty)}`,
    envioTexto,
    "",
    "Aguardo confirmação para combinarmos envio e pagamento!"
  ];
  abrirWhatsApp(linhas.join("\n"));
}

function finalizarCompra(dadosEnvio) {
  const linhasItens = [];
  carrinho.forEach(item => {
    linhasItens.push(`📦 ${item.nome} (${item.marca}) — x${item.qty} caixa(s) — ${formatarPreco(item.preco * item.qty)}`);
    if (item.nicotina) {
      linhasItens.push(`   Nicotina: ${item.nicotina}`);
    }
    if (item.sabores && item.sabores.length) {
      item.sabores.forEach(s => linhasItens.push(`   - ${s}`));
    }
  });

  const totalCaixas = carrinho.reduce((s, i) => s + i.qty, 0);
  const envioTexto = totalCaixas >= 2 ? "Envio: Grátis" : `Envio: ${formatarPreco(TAXA_ENVIO)}`;

  const linhas = [
    "Olá! Gostaria de finalizar o meu pedido:",
    "",
    ...linhasItens,
    "",
    `Total: ${formatarPreco(calcularTotal())}`,
    envioTexto,
    "",
    "📍 Dados de envio:",
    `Nome: ${dadosEnvio.nome}`,
    `Morada: ${dadosEnvio.morada}`,
    `Código postal: ${dadosEnvio.cp}`,
    `Localidade: ${dadosEnvio.cidade}`,
    `Contacto: ${dadosEnvio.telefone}`,
    "",
    "Aguardo confirmação para combinarmos o pagamento!"
  ];
  abrirWhatsApp(linhas.join("\n"));

  // Limpa o carrinho depois de enviado, para não ficar "preso" com o pedido já feito
  carrinho = [];
  guardarCarrinho();
  renderCarrinho();
  document.getElementById("shippingForm").reset();
  fecharCarrinho();
}

/* ======================================================
   DRAWER DO CARRINHO
   ====================================================== */
function abrirCarrinho() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("drawerOverlay").classList.add("visible");
}
function fecharCarrinho() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("drawerOverlay").classList.remove("visible");
}

/* ======================================================
   INICIALIZAÇÃO
   ====================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // ---- Verificação de idade ----
  const ageGate = document.getElementById("ageGate");
  const ageConfirmada = localStorage.getItem("zdv_idade_confirmada") === "true";

  if (ageConfirmada) {
    ageGate.classList.add("hidden");
  } else {
    document.body.style.overflow = "hidden";
  }

  document.getElementById("ageGateYes").addEventListener("click", () => {
    localStorage.setItem("zdv_idade_confirmada", "true");
    ageGate.classList.add("hidden");
    document.body.style.overflow = "";
  });

  document.getElementById("ageGateNo").addEventListener("click", () => {
    document.querySelector(".age-gate-actions").hidden = true;
    document.getElementById("ageGateBlocked").hidden = false;
  });

  renderHeroCatalogButtons();
  renderFeedbackMarquee();
  renderBestsellers();
  renderMaisPuffs();
  renderFiltros();
  renderProdutos();
  renderCarrinho();

  document.getElementById("cartToggle").addEventListener("click", abrirCarrinho);
  document.getElementById("drawerClose").addEventListener("click", fecharCarrinho);
  document.getElementById("drawerOverlay").addEventListener("click", fecharCarrinho);

  document.getElementById("footerWhatsapp").href = `https://wa.me/${WHATSAPP_NUMBER}`;
  document.getElementById("navSupportLink").href = `https://wa.me/${WHATSAPP_NUMBER}`;
  document.getElementById("navSupportLinkMobile").href = `https://wa.me/${WHATSAPP_NUMBER}`;

  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  menuToggle.addEventListener("click", () => {
    const aberto = mobileNav.classList.toggle("open");
    menuToggle.classList.toggle("open", aberto);
    menuToggle.setAttribute("aria-expanded", aberto ? "true" : "false");
  });
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuToggle.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.getElementById("shippingForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const dadosEnvio = {
      nome: document.getElementById("shipName").value.trim(),
      morada: document.getElementById("shipAddress").value.trim(),
      cp: document.getElementById("shipZip").value.trim(),
      cidade: document.getElementById("shipCity").value.trim(),
      telefone: document.getElementById("shipPhone").value.trim()
    };
    finalizarCompra(dadosEnvio);
  });
});