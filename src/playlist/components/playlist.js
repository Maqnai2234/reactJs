import React from 'react';
import Media from './media.js';
import './playlist.css';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import FullScreen from '../../icons/components/full-screen';
import Volumen from '../../icons/components/volumen';

function Playlist(props){
  const medias = props.playlist
  return(
    <div className="Playlist">
      <Play size={25} color="red"/>
      <Pause size={25} color="yellow"/>
      <FullScreen size={25} color="blue"/>
      <Volumen size={25} color="gray"/>
      <br></br>
      {
        medias.map((item) => {
          return <Media {...item} key={item.id}/>
        })                   
      }
    </div>
  )
}

export default Playlist;