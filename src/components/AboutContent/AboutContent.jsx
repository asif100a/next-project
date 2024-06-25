import Link from 'next/link';
import React from 'react';

const getTime = async() => {
    // const res = await fetch('http://localhost:3000/time', {cache: 'no-store'});
    const res = await fetch(`${process.env.NEXT_PUBLIC_TIME_URL}/time`, {next: {revalidate: 5}});
    const data = await res.json();
    return data?.currentTime;
};

const AboutContent = async() => {
    const time = await getTime();

    return (
        <div className='my-6'>
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, beatae suscipit ipsam eaque qui deserunt! Impedit vero minima, ipsam quae ipsum laborum asperiores totam accusantium voluptates aliquam! Sequi, exercitationem quasi?</h1>

            <p className='text-2xl font-medium'>Time: {time}</p>

            <div className='mt-6 space-x-6'>
                <button className='bg-slate-200 hover:bg-slate-100 border border-slate-400 px-3 py-1'><Link href={'/about/history'}>History</Link></button>
                <button className='bg-slate-200 hover:bg-slate-100 border border-slate-400 px-3 py-1'><Link href={'/about/mission'}>Mission</Link></button>
            </div>
        </div>
    );
};

export default AboutContent;