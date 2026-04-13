import React, { Suspense } from 'react';
import Banner from '../../Components/HomePage/Banner';
import AllBooks from '../../Components/HomePage/AllBooks';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
                <AllBooks></AllBooks>
            </Suspense>
        </div>
    );
};

export default HomePage;