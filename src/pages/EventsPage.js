import { Config, Events } from "invirtu-javascript-api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EventsPage()  {

    const [events, setEvents] = useState([]);

    Config.setAuthToken(process.env.REACT_APP_AUTH_TOKEN);

    useEffect(() => {

        Events.getEvents({organizer_id : process.env.REACT_APP_ORGANIZER_ID})
        .then((response) => {
            let result = response.data;

            if(result.status == 'success'){

              const data = result.data;
              setEvents(data);
            }
        }).catch(error => {
          console.error(error);
        });

    }, [])

    return (
      <>
        <h1 className="text-center">Past Live Events</h1>

        <ul>
            {events.map(function(event, index){
                return <li className="mb-4" key={ index }>
                  <p>{event.title}</p>
                  <Link className="btn btn-success m-1" to={`/video/${event.id}`}>Join Chat</Link> 
                  <Link className="btn btn-success m-1" to={`/stream/${event.id}`}>Watch Stream</Link> 
                  <Link className="btn btn-success m-1" to={`/watch/${event.id}`}>Watch Chat</Link>

                  </li>;
            })}
        </ul>
      </>
    );
}

export default EventsPage;