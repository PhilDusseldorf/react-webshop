import { createContext, useEffect, useState } from "react";
import { getCollectionAndDocuments } from "../utils/firebase";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionAndDocuments("categories");
      console.log(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
