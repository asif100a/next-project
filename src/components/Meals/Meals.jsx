'use client'
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const Meals = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);

    const getValue = (e) => {
        setSearch(e.target.value)
        console.log(search);
    };

    const searchedData = async () => {
        try {
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
            console.log(data)
            setMeals(data?.meals);

        } catch(error) {
            console.error(error);
        }
    };

    console.log(meals);

    useEffect(() => {
        searchedData();
    }, [search]);

    return (
        <div className='mt-8 w-fit mx-auto'>
            <input
                type="text"
                name="meal"
                id="meal"
                placeholder='Search here......'
                onChange={getValue}
                className='border border-cyan-400 py-2 px-3 rounded-l-lg'
            />
            <input
                type="submit"
                value={'Search'}
                onClick={searchedData}
                className='px-3 py-2 border border-cyan-400 bg-cyan-300 hover:bg-cyan-200 hover:cursor-pointer rounded-r-lg'
            />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                {
                    meals?.map(({ idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb }) => (
                        <div key={idMeal} className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800 border-2">
                            <div>
                                {/* <img src={strMealThumb} alt="Food image" className='w-[348.8px] h-[348.8px]' /> */}
                                <Image src={strMealThumb} alt={strMeal} width={348.8} height={348.8} />
                            </div>
                            <div>
                                <h1 className={`mt-2 text-lg font-semibold text-gray-800 dark:text-white ${styles.textc_olor_tamato} ${styles.font_xl}`}>{strMeal}</h1>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Meal id: {idMeal}</p>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Meal category: {strCategory}</p>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Meal area: {strArea}</p>
                            </div>

                            <div className='mt-6'>
                                <Link href={`/blogs/${idMeal}`}>
                                    <button className="bg-slate-200 hover:bg-slate-100 border border-slate-400 px-3 py-1">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default Meals;