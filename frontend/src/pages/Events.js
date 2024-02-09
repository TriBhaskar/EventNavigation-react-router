import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const data = useLoaderData(); // useLoaderData() converts response to objects
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>LOADING.....</p>}>
      <Await resolve={data.events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Failed to fetch events" };
    // throw new Response(JSON.stringify({ message: "Failed to fetch events" }), {
    //   status: 500,
    // });
    throw json({ message: "Failed to fetch events" }, { status: 500 }); // json() is a helper function that returns a response object with a JSON body
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

/**
 * Fetches events from the server.
 * @returns {Promise<Array>} A promise that resolves to an array of events.
 */
export function loader() {
  return defer({
    events: loadEvents(),
  });
}

export default EventsPage;
