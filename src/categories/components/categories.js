import React from 'react';
import Category from './category.js';

function Categories(props){
  return(
    <div className="Categories">
      {
        props.categories.map((category) => {
          return <Category category={category} key={category.id} />
        })
      }
    </div>
  )
}

export default Categories;