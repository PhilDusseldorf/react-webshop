import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [categories, category]);

  return (
    <div>
      <div className='categories-header'>
      {
        categories && Object.keys(categories).map((key) => {
          return <span key={key}>{key.toUpperCase()}</span>;
        })
      }
      </div>
      <div className='title-container'>
        <h2>{category.toUpperCase()}</h2>
      </div>
      <div className='products-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
