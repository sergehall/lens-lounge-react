// src/components/HomePage/HomePage.tsx
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import Categories from '../categories/Categories';
import Loader from '../../components/loader/Loader';


const HomePage: React.FC = () => {

    const isAnyCategoryLoading = useSelector((state: RootState) =>
        Object.values(state.categoryBlogs.loading).some((loading) => loading)
    );

    if (isAnyCategoryLoading) {
        return <Loader/>;
    }

    return <Categories/>;
};

export default HomePage;

