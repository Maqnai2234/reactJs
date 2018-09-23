import React from 'react';
import {render} from 'react-dom';

import Media from './components/media'

const app = document.getElementById("root");

render(<Media type="video" title="¿Qué es responsive Design?" author="Alexei Mamani" image="./images/echame-la-culpa.jpg" />,app)

