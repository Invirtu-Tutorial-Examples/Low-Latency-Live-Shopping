import React from "react";

import { Broadcasting } from "invirtu-react-widgets";
import { useParams } from 'react-router';

function StreamPage()  {

    const { id } = useParams();  

    return (
        <>
            <h1 className="text-center">Stream The Live Event</h1>
            <Broadcasting id={id} />
        </>
    )
}

export default StreamPage;