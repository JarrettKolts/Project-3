import { Link } from 'react-router-dom';
import { useQuery } from 'apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
import Nav from '../components/NavTabs';
import React from 'react';

const Home = () => {
    const { loading, data } = useQuery(QUERY_MATCHUPS, {
        fetchPolicy: "no-cache"
    });
      
const matchupList = data?.matchups || [];
      
return ( 
    <div>
    <header>
    <h1>Super Supper</h1>
        <nav class="navbar" style="background-color: #1a95ef">
        <Link to="/Login"> Login </Link>
        <Link to="/Signup"> Sign Up </Link>  
        </nav>
        <h1>Super Supper</h1>
    </header>

    <main>
        <section class= "pasta">
        <p>A recipe has no soul. You, as the cook, must bring soul to the recipe.</p>
        </section>
        <div class="container">
  <div class="row col-xs-2">
  <img style= "width: 25%; height: 25%" src="images\curry.jpg" alt="Mister Marbles head tilt"/>
</div>  
<div class="row col-xs-2">
  <img style= "width: 25%; height: 25%"  src="images\Luqaimat.jpg" alt="Kermit the Dog"/>
</div>
<div class="row col-xs-2">
  <img style= "width: 25%; height: 25%" src="images\ramen.jpg" alt="Peach posing magestically"/>  
</div>  
</div>
        <section>
        <div class="container mt-5">
  <div class="row">
    <div class="col-md-4">
      <div class="card">
        <img src="images\Baked Cod.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Baked Cod</h5>
          <p class="card-text">This baked cod recipe is simple, fast, and delicious. The fish is baked in butter, the topped with lemon juice, white wine, and buttery crackers for the perfect ten dinner. This dish is a favorite of ours from a local resturant. Serve with rice pilaf and sauteed spinach with garlic.</p>
          <a href="#" class="btn btn-primary">View More</a>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <img src="images\chinese-pan-fried-dumplings.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Chinese-pan fried dumplings</h5>
          <p class="card-text">Delicious crispy pan-fried dumplings are a satisfying favorite. Often they are filled with pork, cabbage, shiitake mushrooms, and garlic chives</p>
          <a href="#" class="btn btn-primary">View More</a>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <img src="images\Jollof-Rice.webp" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Jollof Rice</h5>
          <p class="card-text">Jollof Rice, a West-African one-pot dish with rice, tomatoes, peppers, and spices.</p>
          <a href="#" class="btn btn-primary">View More</a>
        </div>
      </div>
    </div>
  </div>
</div>
        </section>
        
        
    </main>
    </div>
    
)
};

export default Home;
