import React from 'react';
import Playlist from '../../playlist/components/playlist';
import './category.css';
function Category(props) {
    const category = props.category
    return(
      <div className="Category" >
        <p className="Category-description">{category.description}</p>
        <h2 className="Category-title">{category.title}</h2>
        <Playlist handleOpenModal={props.handleOpenModal} playlist={category.playlist}/>
      </div>
    )
}

export default Category;