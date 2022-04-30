export const createAdapterProdFromFirestore = (doc) => {
  const data = doc.data();

  const formattedProduct = {
    id: doc.id,
    name: data.name,
    category: data.category,
    categoryName: data.categoryName,
    description: data.description,
    information: data.information,
    picturUrl: data.picturUrl,
    price: data.price,
    stock: data.stock,
  };

  return formattedProduct;
};
