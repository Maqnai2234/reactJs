import React, {Component} from 'react';

class Video extends Component {

  togglePlay() {
    if (this.props.pause){
      this.video.play();
    } else {
      this.video.pause();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.pause !== this.props.pause){
      this.togglePlay();
    }
  }

  setRef = element => {
    this.video = element;
  }
  render (){
    return(
      <div className="video.css">
        <video
          ref={this.setRef}
          autoPlay={this.props.autoplay}
          src={this.props.src}
        />
      </div>
    )
  }
}

export default Video;