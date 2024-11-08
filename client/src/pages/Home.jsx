import { Link } from 'react-router-dom';
import { useQuery } from 'apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_MATCHUPS, {
        fetchPolicy: "no-cache"
    });
      
const matchupList = data?.matchups || [];
      
return ( 
    <div>
        <nav class="navbar" style="background-color: #1a95ef">
        <Link to="/Login"> Login </Link>  
        </nav>
    </div>