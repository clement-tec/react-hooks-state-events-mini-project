import React from "react";

function CategoryFilter({categories, selectCategory, handleSelectCategory}) {

  const categoryButtons = categories.map(category => (
    <button key= {category}
    onClick ={() => handleSelectCategory(category)}
    className={category === selectCategory? 'selected' : null}
    >{category}</button> 
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;