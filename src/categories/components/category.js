import React, {Component} from 'react';
import Playlist from '../../playlist/components/playlist';

class Category extends Component {
  render(){
    const category = this.props.category
    const playlists = this.props.category.playlist
    return(
      <div className="Category">
        <h3>{category.title}</h3>
        <Playlist playlist={playlists}/>
      </div>
    )
  }
}

export default Category;