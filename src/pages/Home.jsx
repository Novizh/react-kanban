import React from 'react';
import Navbar from '../components/Navbar';
import Category from '../components/Category';
import { useSelector } from 'react-redux';

function Home() {
    const categories = useSelector(state => state.taskReducer.categories);

    return(
        <React.Fragment>
            <Navbar />
            <section className="container-fluid my-3">
                {
                    categories.map((category) => {
                        return <Category key={category.id} category={category}/>
                    })
                }
                {/* Category, map by default categories state*/}
            </section>
        </React.Fragment>
    )
}

export default Home;