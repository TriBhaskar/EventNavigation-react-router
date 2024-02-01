import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const fetchedEvents = useLoaderData();
  return (
    <>
      <EventsList events={fetchedEvents} />
    </>
  );
}

export default EventsPage;
