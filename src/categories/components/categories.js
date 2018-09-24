import React, {Component} from 'react';
import Category from './category.js';

class Categories extends Component {
  render(){
    const categories = this.props.data.categories
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
}

export default Categories;