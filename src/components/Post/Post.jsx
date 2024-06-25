import Link from 'next/link';
import React from 'react';

const Post = ({ post }) => {
    // console.log(post)
    const { id, title, body } = post;

    return (
        <div className='border border-cyan-400 space-y-3 p-6'>
            <h1 className='text-2xl font-medium'>{title}</h1>
            <p>{body}</p>
            <div className='mt-6'>
                <Link href={`/posts/${id}`}><button className='px-3 py-1 border border-cyan-400 bg-cyan-200 hover:bg-cyan-100'>Details</button></Link>
            </div>
        </div>
    );
};

export default Post;