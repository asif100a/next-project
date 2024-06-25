import React from 'react';

const categoriesDetails = ({params}) => {
    console.log(params)
    if(params.features.length === 2)
        return (
            <div>
                {params.features[1]}
            </div>
        )
        if(params.features.length === 3)
            return(
                <div>
                    {params.features[2]}
                </div>
            )
    return (
        <div>
            <h1>Categories details</h1>
        </div>
    );
};

export default categoriesDetails;