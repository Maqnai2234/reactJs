import React, {Component} from 'react';
class Media extends Component {
  render (){
    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid lightblue'
      }
    }
    return (     
      <div style={styles.container}>
        <div>
          <img 
            src="" 
            alt=""
            width={260}
            height={160}
          />
          <h3>¿Por qué aprender React?... </h3>
          <p>Alexei Mamani</p>
        </div>
      </div>
    )
  }
}

export default Media;

