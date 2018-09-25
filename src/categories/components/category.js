import React from 'react';
import Playlist from '../../playlist/components/playlist';

function Category(props) {
    const category = props.category
    return(
      <div className="Category">
        <p>{category.description}</p>
        <h2>{category.title}</h2>
        <Playlist playlist={category.playlist}/>
      </div>
    )
}

export default Category;