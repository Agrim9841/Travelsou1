import React from 'react';
import Searchresult from '../partials/Searchresult';

function Packages() {
  return (
    <div class="section">
    	Our Packages
    	<input type="text" name="search" placeholder="Search package"/><button>Filter</button>
    	<Searchresult />
    </div>
  );
}

export default Packages;