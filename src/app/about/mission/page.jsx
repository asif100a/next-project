import Link from 'next/link';
import React from 'react';

const pageMission = () => {
    return (
        <div>
            <h1>Mission page</h1>
            <div className='mt-6'>
                <Link href={'/about/mission/vision'}><button className='bg-slate-200 border'>Vision</button></Link>
            </div>
        </div>
    );
};

export default pageMission;