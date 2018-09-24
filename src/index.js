import React from 'react';
import {render} from 'react-dom';
import Categories from './categories/components/categories';
import data from './api.json'

const app = document.getElementById("root");

render(<Categories data={data} />,app)

