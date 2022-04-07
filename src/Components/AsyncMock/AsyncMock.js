const products = [
  {
    nombre: "Almohada Avellana",
    id: "11",
    categoria: "1",
    descripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    precio: 23,
    picturUrl: "./11.webp",
  },
  {
    nombre: "Almohada Chocolate",
    id: "12",
    categoria: "1",
    descripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    precio: 55,
    picturUrl: "./12.webp",
  },
  {
    nombre: "Almohada Frutilla",
    id: "13",
    categoria: "2",
    descripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    precio: 74,
    picturUrl: "./13.webp",
  },
  {
    nombre: "Anillo Frutas",
    id: "14",
    categoria: "3",
    descripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    precio: 23,
    picturUrl: "./14.webp",
  },
  {
    nombre: "Arroz Inflado Dulce",
    id: "15",
    categoria: "1",
    descripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    precio: 55,
    picturUrl: "./15.webp",
  },
  {
    nombre: "Avena Instantanea",
    id: "16",
    categoria: "1",
    descripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    precio: 74,
    picturUrl: "./16.webp",
  },
  {
    nombre: "Avena Tradicional",
    id: "17",
    categoria: "1",
    descripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, exercitationem?",
    precio: 23,
    picturUrl: "./17.webp",
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
    }, 2000);
  });
};

export const getItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((item) => item.id === id));
    }, 2000);
  });
};
