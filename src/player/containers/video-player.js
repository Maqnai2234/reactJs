import React, {Component} from 'react';
import VideoPlayerLayout from '../components/video-player';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause'

class VideoPlayer extends Component {
  state = {
    pause: true,
  }

  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  render (){
    return (
      <VideoPlayerLayout>
        <Title title="Video Prueba" />
        <PlayPause
          pause={this.state.pause} 
          handleClick={this.togglePlay}
        />
        <Video 
          src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
          pause={this.state.pause}
          autoplay={this.props.autoplay}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;