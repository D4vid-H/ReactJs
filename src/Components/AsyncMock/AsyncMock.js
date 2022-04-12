const products = [
  {
    nombre: "Almohada Avellana",
    id: "11",
    categoria: "1",
    categoriName: "Cereales",
    descripcion: "Almohaditas rellenas con dulce de avellanas. Contienen salvado de trigo y avena.",
    informacion: "INGREDIENTES: Relleno sabor avellana, harina de trigo enriquecida según Ley N° 25.630, harina de avena, salvado de trigo, azúcar, harina de maíz, sal, malta torrada i instantánea, COL: INS 150d, antioxidantes (tocoferoles), relleno sabor avellana: azúcar, aceite de palma, sólidos lácteos, cacao en polvo, EMU: INS 322 INS 476, aromatizante/saborizante artificial de avellana.",
    precio: 93,
    picturUrl: "./11.webp",
  },
  {
    nombre: "Almohada Chocolate",
    id: "12",
    categoria: "1",
    categoriName: "Cereales",
    descripcion: "Almohaditas de trigo y maíz con relleno dulce de chocolate.",
    informacion: "INGREDIENTES: Relleno sabor chocolate (azúcar, aceite vegetal hidrogenado, cacao en polvo, aceite vegetal interesterificado, EMU: lecitina de soja, ANT: INS 476, aromatizantes artificiales, etilvainilla), harina de trigo 000 enriquecida según ley 25630, harina de maíz desgerminada, harina de arroz, azúcar, extracto de malta, leche en polvo, AGREG: bicarbonato de sodio y sal.",
    precio: 95,
    picturUrl: "./12.webp",
  },
  {
    nombre: "Almohada Frutilla",
    id: "13",
    categoria: "1",
    categoriName: "Cereales",
    descripcion: "Almohaditas rellenas con un agradabe relleno dulce de frutillas. Contienen salvado de trigo y avena.",
    informacion: "INGREDIENTES: Relleno sabor frutilla, harina de trigo enriquecida, harina de avena, salvado de trigo, azúcar, harina de maíz, extracto de malta, sal, antioxidante.",
    precio: 94,
    picturUrl: "./13.webp",
  },
  {
    nombre: "Anillo Frutas",
    id: "14",
    categoria: "1",
    categoriName: "Cereales",
    descripcion: "Buen contenido en fibra alimentaria que ayuda a regular el tránsito intestinal, evitando el estreñimiento. También regula los niveles de colesterol y retarda la entrada de glucosa al torrente sanguíneo.",
    informacion: "INGREDIENTES: Harina de trigo, azúcar, harina de avena, harina de maíz, jarabe de glucosa, aromatizantes, saborizantes, colorantes y sal.",
    precio: 43,
    picturUrl: "./14.webp",
  },
  {
    nombre: "Arroz Inflado Dulce",
    id: "15",
    categoria: "1",
    categoriName: "Cereales",
    descripcion: "El arroz inflado, una de las golosinas nutritivas preferidas por los chicos junto a las tutucas. Ideal para acompañar una tarde/noche de pelis, series o dibujitos animados.",
    informacion: "Tambien es la preferida de las personas que buscan alimentarse sanamente sin dejar de darse un gusto de vez en cuando.",
    precio: 35,
    picturUrl: "./15.webp",
  },
  {
    nombre: "Avena Instantanea",
    id: "16",
    categoria: "1",
    categoriName: "Cereales",
    descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    informacion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    precio: 74,
    picturUrl: "./16.webp",
  },
  {
    nombre: "Avena Tradicional",
    id: "17",
    categoria: "1",
    categoriName: "Cereales",
    descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    informacion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    precio: 63,
    picturUrl: "./17.webp",
  },
  {
    nombre: "Aji Molido",
    id: "21",
    categoria: "2",
    categoriName: "Especias",
    descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    informacion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    precio: 74,
    picturUrl: "./21.webp"
  },
  {
    nombre: "Ajo Negro",
    id: "22",
    categoria: "2",
    categoriName: "Especias",
    descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    informacion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    precio: 56,
    picturUrl: "./22.webp"
  },
  {
    nombre: "Ajo Polvo",
    id: "23",
    categoria: "2",
    categoriName: "Especias",
    descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    informacion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    precio: 46,
    picturUrl: "./23.webp"
  },
  {
    nombre: "Condimento Arroz",
    id: "24",
    categoria: "2",
    categoriName: "Especias",
    descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    informacion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    precio: 34,
    picturUrl: "./24.webp"
  },
  {
    nombre: "Anana Cubitos",
    id: "31",
    categoria: "3",
    categoriName: "Frutas Desecadas",
    descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    informacion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    precio: 121,
    picturUrl: "./31.webp"
  },
  {
    nombre: "Arandano Rojo",
    id: "32",
    categoria: "3",
    categoriName: "Frutas Desecadas",
    descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    informacion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    precio: 107,
    picturUrl: "./32.webp"
  },
  {
    nombre: "Chips Banana",
    id: "33",
    categoria: "3",
    categoriName: "Frutas Desecadas",
    descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    informacion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    precio: 84,
    picturUrl: "./33.webp"
  },
  {
    nombre: "Ciruela",
    id: "34",
    categoria: "3",
    categoriName: "Frutas Desecadas",
    descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    informacion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    precio: 114,
    picturUrl: "./34.webp"
  },
];

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        categoryId
          ? products.filter((items) => items.categoria === categoryId)
          : products
      );
    }, 1000);
  });
};

export const getItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((item) => item.id === id));
    }, 500);
  });
};
