import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    console.log(blog)
    return (
        <div>
            <div class="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800 border-2">
                <div>
                    <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{blog.name}</h1>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">Created by: {blog.developer}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">Creation year: {blog.release_year}</p>
                </div>

                <div>
                    <div class="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                        <span>Visit on:</span>
                        <a class="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline" tabindex="0" role="link">edx.org</a>
                        <span>or</span>
                        <a class="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline" tabindex="0" role="link">classcentral.com</a>
                    </div>

                    <div className='mt-6'>
                        <p>Main Features:</p>
                        <ul class="list-disc ml-6">
                            {
                                blog.features.map((feature, i) => <li key={i}>{feature}</li>)
                            }
                        </ul>
                    </div>

                    <div className='mt-6'>
                        <Link href={`/blogs/${blog.name}`}>
                            <button className="bg-slate-200 hover:bg-slate-100 border border-slate-400 px-3 py-1">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object
};

export default Blog;