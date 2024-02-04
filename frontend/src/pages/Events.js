import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData(); // useLoaderData() converts response to objects
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

/**
 * Fetches events from the server.
 * @returns {Promise<Array>} A promise that resolves to an array of events.
 */
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Failed to fetch events" };
    // throw new Response(JSON.stringify({ message: "Failed to fetch events" }), {
    //   status: 500,
    // });
    throw json({ message: "Failed to fetch events" }, { status: 500 }); // json() is a helper function that returns a response object with a JSON body
  } else {
    return response;
  }
}
