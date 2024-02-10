import {
  Await,
  Link,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

export default function EventDetailPage() {
  // const data = useLoaderData(); // useLoaderData is a hook that returns the data loaded by the loader for the current page
  const { event, events } = useRouteLoaderData("event-detail"); // useRouteLoaderData is a hook that returns the data loaded by the loader by the given ID

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>LOADING.....</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>LOADING.....</p>}>
        <Await resolve={events}>
          {(loadEvents) => <EventsList events={loadEvents} />}
        </Await>
      </Suspense>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    const data = await response.json();
    return data.event;
  }
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

export async function loader({ request, params }) {
  // This function will be called to load data for the page (when the page is being navigated to)
  const id = params.eventId; // This is the ID from the URL path
  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  } else {
    return redirect("/events");
  }
}
