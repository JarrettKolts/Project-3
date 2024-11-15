import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Nav from './components/NavTabs';

const client = new ApolloClient({
    uri: '/graphl',
    cache: new InMemoryCache(),
});

function App() {

    return (
        <>
        <Nav />
        <main classsName="mx-3">
            <Outlet />
        </main>
        </>
    );
}



export default App;