import EventsList from "../components/EventsList";

function EventsPage() {
  return (
    <>
      <EventsList />
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
    //
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
