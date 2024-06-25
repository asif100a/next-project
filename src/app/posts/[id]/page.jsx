import axios from 'axios';
import React from 'react';

export const generateMetadata = async ({params}) => {
    const {data} = await axios(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    return{
        title: data.title,
        description: data.body,
        keywords: data.body.split(' ')
    }
};

const getSpecificPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
};

const postDetails = async ({ params }) => {
    console.log(params?.id);
    const post = await getSpecificPost(params?.id);
    console.log(post);
    const { id, userId, title, body } = post;

    return (
        <div className='p-24'>
            <h2>Details of {params?.id}</h2>
            <div className='mt-10'>
                <h1>id: {id}</h1>
                <h3>User id: {userId}</h3>
                <h1 className='text-xl font-semibold'>{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default postDetails;