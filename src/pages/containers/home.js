import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories'
import data from '../../api.json'

class Home extends Component {
  render(){
    return(
      <HomeLayout>
        <Categories  data={data} />
      </HomeLayout>
    )
  }
}

export default Home;