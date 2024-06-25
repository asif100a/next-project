import Meals from '@/components/Meals/Meals';
import React from 'react';

export const metadata = {
    title: {
        absolute: "Meals"
    },
    description: "Next meals ",
};

const page = () => {
    return (
        <div className='p-8'>
            <h1 className='capitalize text-3xl font-semibold text-center'>Search your favourite Meals</h1>
            <p className='mt-6 text-center'>
                The platform features advanced search and filtering <br />
                options to easily find meals based on ingredients, <br />
                cuisine type, cooking time, and dietary requirements.
            </p>

            <Meals />
        </div>
    );
};

export default page;