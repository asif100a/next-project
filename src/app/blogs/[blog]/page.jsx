import React from 'react';
import PropTypes from 'prop-types';

const page = ({ params }) => {
    console.log(params);

    const displayBlog = blogs.find(blog => blog?.name === params?.blog);
    return (
        <div>
            <h1 className='p-4 text-center text-2xl font-medium'>Details of {params.blog}</h1>

            <div class="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800 border-2 mx-auto">
                <div>
                    <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{displayBlog?.name}</h1>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">Created by: {displayBlog?.developer}</p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">Creation year: {displayBlog?.release_year}</p>
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
                                displayBlog?.features?.map((feature, i) => <li key={i}>{feature}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

page.propTypes = {
    params: PropTypes.any
};

const blogs = [
    {
        "name": "Python",
        "developer": "Guido van Rossum",
        "release_year": 1991,
        "features": [
            "Easy to learn and use",
            "Extensive libraries",
            "Supports multiple paradigms",
            "Interpreted language",
            "Strong community support"
        ]
    },
    {
        "name": "JavaScript",
        "developer": "Brendan Eich",
        "release_year": 1995,
        "features": [
            "Client-side and server-side scripting",
            "Event-driven",
            "Prototype-based",
            "High interactivity",
            "Vast ecosystem and libraries"
        ]
    },
    {
        "name": "Java",
        "developer": "James Gosling",
        "release_year": 1995,
        "features": [
            "Object-oriented",
            "Platform-independent (Write Once, Run Anywhere)",
            "Robust and secure",
            "Automatic memory management",
            "Rich standard library"
        ]
    },
    {
        "name": "C++",
        "developer": "Bjarne Stroustrup",
        "release_year": 1985,
        "features": [
            "Object-oriented",
            "Low-level manipulation",
            "Efficient performance",
            "Rich standard library",
            "Wide application areas"
        ]
    },
    {
        "name": "Ruby",
        "developer": "Yukihiro Matsumoto",
        "release_year": 1995,
        "features": [
            "Simple and intuitive syntax",
            "Dynamic and reflective",
            "Supports multiple programming paradigms",
            "Extensive libraries and frameworks",
            "Strong focus on developer happiness"
        ]
    },
    {
        "name": "C#",
        "developer": "Microsoft",
        "release_year": 2000,
        "features": [
            "Object-oriented",
            "Component-oriented",
            "Part of .NET framework",
            "Automatic garbage collection",
            "Strong typing"
        ]
    },
    {
        "name": "Go",
        "developer": "Robert Griesemer, Rob Pike, Ken Thompson",
        "release_year": 2009,
        "features": [
            "Statically typed",
            "Compiled language",
            "Concurrency support",
            "Simple syntax",
            "Efficient performance"
        ]
    },
    {
        "name": "Swift",
        "developer": "Apple Inc.",
        "release_year": 2014,
        "features": [
            "Safe and fast",
            "Modern syntax",
            "Objective-C interoperability",
            "Automatic memory management",
            "Strongly typed"
        ]
    },
    {
        "name": "Kotlin",
        "developer": "JetBrains",
        "release_year": 2011,
        "features": [
            "Interoperable with Java",
            "Concise syntax",
            "Null safety",
            "Functional programming support",
            "Tool-friendly"
        ]
    },
    {
        "name": "Rust",
        "developer": "Graydon Hoare",
        "release_year": 2010,
        "features": [
            "Memory safety",
            "Concurrency without data races",
            "High performance",
            "Zero-cost abstractions",
            "Modern syntax"
        ]
    }
]

export default page;