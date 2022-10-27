import React from "react";

import { useParams } from 'react-router';
import { VideoConferencing } from "invirtu-react-widgets";

function WatchPage()  {

    const { id } = useParams();     

    return (
        <>
            <h1 className="text-center">Watch Only Page</h1>

            <VideoConferencing id={id} />
        </>
    )
}

export default WatchPage;