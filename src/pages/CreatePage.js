import React, { useState } from "react";

import { Config, Events } from "invirtu-javascript-api";
import { Link } from "react-router-dom";

Config.setAuthToken(process.env.REACT_APP_AUTH_TOKEN);

function CreatePage()  {

    const [event, setEvent] = useState(null);

    function createEvent() {

        let data = {
            organizer_id : process.env.REACT_APP_ORGANIZER_ID, 
            type : 7,
            template_id: process.env.REACT_APP_TEMPLATE_ID
        };

        Events.createEvent(data). then((response) => {

            let result = response.data;

            if(result.status == "success") {

                const data = result.data;

                setEvent(
                    <div>
                      <p className='lead'>Live shopping event created. Do you want to broadcast or join the video chat?.</p>
                      <Link target={'_blank'} className="btn btn-info m-1" to={`/video/${data.id}`}>Video Chat</Link> 
                      <Link target={'_blank'} className="btn btn-info m-1" to={`/watch/${data.id}`}>Watch Broadcast</Link> 
                    </div>
                  );
            } else {

            }
        }).catch(error => {

        });
    }

    return (
        <>
        <h1 className="text-center">Live Shopping Event</h1>

        <div className="text-center mt-5">
              <p className='lead'>Use the button to create a live event.</p>
              <button className="btn btn-success" onClick={createEvent.bind()} >Create Live Event</button>
        </div>
        <div className="text-center mt-5">
            {event}
        </div>

      </>
    )
}

export default CreatePage;