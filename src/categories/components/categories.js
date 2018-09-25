import React from 'react';
import Category from './category.js';
import './categories.css';
function Categories(props){
  return(
    <div className="Categories">
      {
        props.categories.map((category) => {
          return (
            <Category 
              category={category} 
              key={category.id}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories;