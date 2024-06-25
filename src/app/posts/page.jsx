import Post from '@/components/Post/Post';
import React from 'react';
import getPosts from '../services/getPosts';
import {redirect} from 'next/navigation';

export const metadata = {
    title: "Posts",
    description: "Next posts",
    keywords: ['new post', 'old post', 'most read post']
};

const PostPage = async () => {
    const postData = await getPosts();
    console.log('post:', postData[0].id);

    if (postData && postData.length > 0) {
        // return redirect(`/posts/${postData[0].id}`)
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit mx-auto gap-6 p-6'>
            {
                postData?.slice(0, 18)?.map(post => <Post key={post.id} post={post} />)
            }
        </div>
    );
};

export default PostPage;