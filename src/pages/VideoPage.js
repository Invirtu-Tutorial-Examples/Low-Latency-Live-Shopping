import React from "react";

import { useParams } from 'react-router';
import { VideoConferencing } from "invirtu-react-widgets";

function VideoPage()  {

    const { id } = useParams();     

    return (
        <>
            <h1 className="text-center">Host And Panelist Join</h1>

            <VideoConferencing id={id} auth_token={process.env.REACT_APP_USER_AUTH_TOKEN} />
        </>
    )
}

export default VideoPage;