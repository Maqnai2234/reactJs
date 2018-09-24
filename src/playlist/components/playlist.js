import React from 'react';
import Media from './media.js';
import './playlist.css';

function Playlist(props){
  const medias = props.playlist
  return(
    <div className="Playlist">
      {
        medias.map((item) => {
          return <Media {...item} key={item.id}/>
        })                   
      }
    </div>
  )
}

export default Playlist;