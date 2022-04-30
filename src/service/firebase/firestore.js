import { firestoreDb } from "./index";
import { getDocs, getDoc, doc, collection, query, where, orderBy } from "firebase/firestore";
import { createAdapterProdFromFirestore } from "../../Components/Adapter/ProductAdapter";


export const getProducts = (categoryId, nameSrc) => {

    return new Promise((resolve, reject) =>{

        const collectionRef = categoryId
        ? query(
            collection(firestoreDb, "products"),
            where("category", "==", categoryId)
            )
        : nameSrc
        ? query(
            collection(firestoreDb, "products"),
            where("name", ">=", nameSrc)
            )
        : query(collection(firestoreDb, "products"), orderBy("name", "asc"));

        getDocs(collectionRef)
            .then((response) => {
                const products = response.docs.map((doc) => {
                    return createAdapterProdFromFirestore(doc);
                    /* return { id: doc.id, ...doc.data() }; */
                });
                resolve(products);
            })
            .catch(error => {
                reject(error);
            });

        });
}

export const getProduct = (id) => {

    return new Promise((resolve, reject) =>{

        getDoc(doc(firestoreDb, "products", id))
            .then((response) => {
                /* const product = { id: response.id, ...response.data() }; */
                const product = createAdapterProdFromFirestore(response);
                resolve(product);
            })
            .catch(error => {
                reject(error);
            })
        });
}

export const getCategories = () => {

    return new Promise((resolve, reject) =>{

        getDocs(query(collection(firestoreDb, "categories"), orderBy("name", "asc")))
            .then((response) => {
                const categories = response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                resolve(categories);
            })
            .catch(error => {
                reject(error);
            })

        });
}