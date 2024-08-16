import { createContext, useEffect, useState } from "react";
import { getCollectionAndDocuments } from "../utils/firebase";

export const CategoriesContext = createContext({
  categories: {},
  setCategories: () => {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionAndDocuments("categories");
      setCategories(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categories, setCategories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
