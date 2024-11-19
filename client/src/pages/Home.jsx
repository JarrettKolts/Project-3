import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/NavTabs';
import { QUERY_PROFILES } from '../utils/queries';

  const Home = () => {
    const { loading, error, data } = useQuery(QUERY_PROFILES);
    const profiles = data?.profiles || [];
  
return ( 
    <div>
    <header>
    <h1>Super Supper</h1>
        <nav className="navbar" style="background-color: #1a95ef">
        <Link to="/Login"> Login </Link>
        <Link to="/Signup"> Sign Up </Link>  
        </nav>
        <h1>Super Supper</h1>
    </header>

    <main>
        <section className= "pasta">
        <p>A recipe has no soul. You, as the cook, must bring soul to the recipe.</p>
        </section>
        <div className="container">
  <div className="row col-xs-2">
  <img style= "width: 25%; height: 25%" src="images\curry.jpg" alt="Mister Marbles head tilt"/>
</div>  
<div className="row col-xs-2">
  <img style= "width: 25%; height: 25%"  src="images\Luqaimat.jpg" alt="Kermit the Dog"/>
</div>
<div className="row col-xs-2">
  <img style= "width: 25%; height: 25%" src="images\ramen.jpg" alt="Peach posing magestically"/>  
</div>  
</div>
        <section>
        <div className="container mt-5">
  <div className="row">
    <div className="col-md-4">
      <div className="card">
        <img src="images\Baked Cod.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Baked Cod</h5>
          <p className="card-text">This baked cod recipe is simple, fast, and delicious. The fish is baked in butter, the topped with lemon juice, white wine, and buttery crackers for the perfect ten dinner. This dish is a favorite of ours from a local resturant. Serve with rice pilaf and sauteed spinach with garlic.</p>
          <a href="#" className="btn btn-primary">View More</a>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <img src="images\chinese-pan-fried-dumplings.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Chinese-pan fried dumplings</h5>
          <p className="card-text">Delicious crispy pan-fried dumplings are a satisfying favorite. Often they are filled with pork, cabbage, shiitake mushrooms, and garlic chives</p>
          <a href="#" className="btn btn-primary">View More</a>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <img src="images\Jollof-Rice.webp" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Jollof Rice</h5>
          <p className="card-text">Jollof Rice, a West-African one-pot dish with rice, tomatoes, peppers, and spices.</p>
          <a href="#" className="btn btn-primary">View More</a>
        </div>
      </div>
    </div>
  </div>
</div>
        </section>
        
        
    </main>
    </div>
    
    );
};

export default Home;