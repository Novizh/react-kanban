import React from 'react';
import Navbar from '../components/Navbar';
import Category from '../components/Category';

function Home() {
    return(
        <React.Fragment>
            <Navbar />
            <section className="container-fluid my-3">
                {/* Category, map by default categories state*/}
                <Category />
            </section>
        </React.Fragment>
    )
}

export default Home;