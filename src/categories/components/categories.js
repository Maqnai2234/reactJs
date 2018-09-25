import React from 'react';
import Category from './category.js';

function Categories(props){
  const categories = props.data.categories
  return(
    <div className="Categories">
      {
        categories.map((category) => {
          return <Category category={category} key={category.id} />
        })
      }
    </div>
  )
}

export default Categories;