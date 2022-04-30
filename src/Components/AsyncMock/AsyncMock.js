const products = [
  {
    name: "Almohada Avellana",
    id: "11",
    category: "1",
    categoryName: "Cereales",
    description:
      "Almohaditas rellenas con dulce de avellanas. Contienen salvado de trigo y avena.",
    information:
      "INGREDIENTES: Relleno sabor avellana, harina de trigo enriquecida según Ley N° 25.630, harina de avena, salvado de trigo, azúcar, harina de maíz, sal, malta torrada i instantánea, COL: INS 150d, antioxidantes (tocoferoles), relleno sabor avellana: azúcar, aceite de palma, sólidos lácteos, cacao en polvo, EMU: INS 322 INS 476, aromatizante/saborizante artificial de avellana.",
    price: 93,
    picturUrl: "./11.webp",
    stock: 25,
  },
  {
    name: "Almohada Chocolate",
    id: "12",
    category: "1",
    categoryName: "Cereales",
    description: "Almohaditas de trigo y maíz con relleno dulce de chocolate.",
    information:
      "INGREDIENTES: Relleno sabor chocolate (azúcar, aceite vegetal hidrogenado, cacao en polvo, aceite vegetal interesterificado, EMU: lecitina de soja, ANT: INS 476, aromatizantes artificiales, etilvainilla), harina de trigo 000 enriquecida según ley 25630, harina de maíz desgerminada, harina de arroz, azúcar, extracto de malta, leche en polvo, AGREG: bicarbonato de sodio y sal.",
    price: 95,
    picturUrl: "./12.webp",
    stock: 25,
  },
  {
    name: "Almohada Frutilla",
    id: "13",
    category: "1",
    categoryName: "Cereales",
    description:
      "Almohaditas rellenas con un agradabe relleno dulce de frutillas. Contienen salvado de trigo y avena.",
    information:
      "INGREDIENTES: Relleno sabor frutilla, harina de trigo enriquecida, harina de avena, salvado de trigo, azúcar, harina de maíz, extracto de malta, sal, antioxidante.",
    price: 94,
    picturUrl: "./13.webp",
    stock: 25,
  },
  {
    name: "Anillo Frutas",
    id: "14",
    category: "1",
    categoryName: "Cereales",
    description:
      "Buen contenido en fibra alimentaria que ayuda a regular el tránsito intestinal, evitando el estreñimiento. También regula los niveles de colesterol y retarda la entrada de glucosa al torrente sanguíneo.",
    information:
      "INGREDIENTES: Harina de trigo, azúcar, harina de avena, harina de maíz, jarabe de glucosa, aromatizantes, saborizantes, colorantes y sal.",
    price: 43,
    picturUrl: "./14.webp",
    stock: 25,
  },
  {
    name: "Arroz Inflado Dulce",
    id: "15",
    category: "1",
    categoryName: "Cereales",
    description:
      "El arroz inflado, una de las golosinas nutritivas preferidas por los chicos junto a las tutucas. Ideal para acompañar una tarde/noche de pelis, series o dibujitos animados.",
    information:
      "Tambien es la preferida de las personas que buscan alimentarse sanamente sin dejar de darse un gusto de vez en cuando.",
    price: 35,
    picturUrl: "./15.webp",
    stock: 25,
  },
  {
    name: "Avena Instantanea",
    id: "16",
    category: "1",
    categoryName: "Cereales",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    information:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    price: 74,
    picturUrl: "./16.webp",
    stock: 25,
  },
  {
    name: "Avena Tradicional",
    id: "17",
    category: "1",
    categoryName: "Cereales",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    information:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    price: 63,
    picturUrl: "./17.webp",
    stock: 25,
  },
  {
    name: "Aji Molido",
    id: "21",
    category: "2",
    categoryName: "Especias",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    information:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    price: 74,
    picturUrl: "./21.webp",
    stock: 25,
  },
  {
    name: "Ajo Negro",
    id: "22",
    category: "2",
    categoryName: "Especias",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    information:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    price: 56,
    picturUrl: "./22.webp",
    stock: 25,
  },
  {
    name: "Ajo Polvo",
    id: "23",
    category: "2",
    categoryName: "Especias",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    information:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    price: 46,
    picturUrl: "./23.webp",
    stock: 25,
  },
  {
    name: "Condimento Arroz",
    id: "24",
    category: "2",
    categoryName: "Especias",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    information:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    price: 34,
    picturUrl: "./24.webp",
    stock: 25,
  },
  {
    name: "Anana Cubitos",
    id: "31",
    category: "3",
    categoryName: "Frutas Desecadas",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    information:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    price: 121,
    picturUrl: "./31.webp",
    stock: 25,
  },
  {
    name: "Arandano Rojo",
    id: "32",
    category: "3",
    categoryName: "Frutas Desecadas",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    information:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    price: 107,
    picturUrl: "./32.webp",
    stock: 25,
  },
  {
    name: "Chips Banana",
    id: "33",
    category: "3",
    categoryName: "Frutas Desecadas",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    information:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    price: 84,
    picturUrl: "./33.webp",
    stock: 25,
  },
  {
    name: "Ciruela",
    id: "34",
    category: "3",
    categoryName: "Frutas Desecadas",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    information:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    price: 114,
    picturUrl: "./34.webp",
    stock: 25,
  },
];

const categories = [
  { id: "0", name: "Todos" },
  { id: "1", name: "Cereales" },
  { id: "2", name: "Especias" },
  { id: "3", name: "Frutas Desecadas" },
  { id: "4", name: "Frutos Secos" },
  { id: "5", name: "Harinas" },
  { id: "6", name: "Herboristeria" },
  { id: "7", name: "Legumbres" },
  { id: "8", name: "Organicos" },
  { id: "9", name: "Regionales" },
  { id: "10", name: "Semillas" },
  { id: "11", name: "Vinos" },
];

export const getProducts = (categoryId, nameSrc) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        categoryId
          ? products.filter((items) => items.category === categoryId)
          : nameSrc
          ? products.filter((items) => items.name >= nameSrc)
          : products
      );
    }, 1000);
  });
};

export const getProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((item) => item.id === id));
    }, 1000);
  });
};

export const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 1000);
  });
};
