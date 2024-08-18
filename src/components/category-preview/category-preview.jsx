import { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card";

import "./category-preview.styles.scss";

const CategoryPreview = () => {
  const { categories } = useContext(CategoriesContext);
  const [isExpanded, setIsExpanded] = useState({});
  const navigate = useNavigate();

  const toggleExpansion = (title) => {
    console.log("expansion clicked!");
    setIsExpanded((preview) => ({
      ...preview,
      [title]: !preview[title],
    }));
  };

  const handleTitleClick = (title) => {
    console.log("title clicked!!")
    navigate(`/shop/${title}`);
  };

  return (
    <>
      {Object.keys(categories).map((title) => (
        <Fragment key={title}>
          <div className='title-container'>
            <h2 onClick={() => handleTitleClick(title)}>
              {title.toUpperCase()}
            </h2>
            <span onClick={() => toggleExpansion(title)}>
              {isExpanded[title] ? "hide" : "show more"}
            </span>
          </div>
          <div className='products-container'>
            {
              // checks isExpanded for a specific title and den slices the output to 4 elements if needed
              isExpanded[title]
                ? categories[title].map((product) => (
                    <ProductCard key={`card${product.id}`} product={product} />
                  ))
                : categories[title]
                    .map((product) => (
                      <ProductCard
                        key={`card${product.id}`}
                        product={product}
                      />
                    ))
                    .slice(0, 4)
            }
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default CategoryPreview;
