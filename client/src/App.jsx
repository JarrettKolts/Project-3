import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Nav from './components/NavTabs';
import Home from './pages/Home'
import SignUp from './pages/Signup';
import Login from './pages/Login'

const client = new ApolloClient({
    uri: '/graphl',
    cache: new InMemoryCache(),
});

function App() {

    return (
        <>
        <Nav />
        <main classsName="app">
            <Outlet />
        </main>
        </>
    );
}



export default App;