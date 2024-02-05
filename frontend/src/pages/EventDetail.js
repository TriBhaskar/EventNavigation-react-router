import { Link, json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  // const data = useLoaderData(); // useLoaderData is a hook that returns the data loaded by the loader for the current page
  const data = useRouteLoaderData("event-detail"); // useRouteLoaderData is a hook that returns the data loaded by the loader by the given ID
  console.log(data);
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
    const data = await response.json();
    console.log(data);
    return data;
  }
}
