import { Fragment, useContext, useEffect } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card";

import "./shop.styles.scss";

const Shop = () => {
  const { categories } = useContext(CategoriesContext);

  useEffect(() => {
    console.log(categories);
  }, []);

  return (
    <>
      {Object.keys(categories).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className='products-container'>
            {categories[title].map((product) => (
              <ProductCard key={`card${product.id}`} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Shop;
