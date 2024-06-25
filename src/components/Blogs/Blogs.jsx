import React from 'react';
import Blog from './Blog/Blog';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-fit mx-auto mt-6'>
            {
                blogs.map((blog, i) => <Blog key={i} blog={blog} />)
            }
        </div>
    );
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

export default Blogs;