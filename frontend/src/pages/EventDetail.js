import { Link, json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const data = useLoaderData(); // useLoaderData() converts response to objects (from the loader function)
  return (
    <>
      <EventItem event={data.event} />
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export async function loader({ request, params }) {
  // This function will be called to load data for the page (when the page is being navigated to)
  const id = params.eventId; // This is the ID from the URL path
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
}
