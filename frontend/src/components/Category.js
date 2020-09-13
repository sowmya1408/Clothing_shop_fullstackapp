import React from "react";
import { Link } from "react-router-dom";

const Category = ({ productsData }) => {
  const categoryList = productsData.filter(
    (product, index) =>
      index ===
      productsData.findIndex(
        (productCategory) => productCategory.category === product.category
      )
  );

  return (
    <div>
      <ul className="category-list">
        {categoryList &&
          categoryList.map((category) => (
            <li key={category.id}>
              <Link to={`/search/${category.category}/${category.gender}`}>
                {category.category.toUpperCase()}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Category;
