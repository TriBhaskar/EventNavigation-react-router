import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function EditEventPage() {
  const data = useRouteLoaderData("event-detail"); // This is a placeholder for the data that will be loaded by the loader (we don't need it here

  return <EventForm event={data.event} method="patch" />;
}
