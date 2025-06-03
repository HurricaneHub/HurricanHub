import React from 'react';
import Header from '../components/Header';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>Welcome to USF_APP</h1>
            <p>This is the homepage of your Next.js application.</p>
        </div>
    );
};

export default Home;