import React from 'react';
import './search.css';

const Search = (props) => (
  <form 
    action="" 
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <input 
    type="text" 
    className="Search-input" 
    placeholder="Busca tu video favorito" 
    ref={props.setRef}
    onChange={props.handleChange}
    value={props.value} />
  </form>
)

export default Search;
