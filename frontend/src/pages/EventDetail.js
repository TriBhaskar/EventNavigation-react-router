import { Link, useParams } from "react-router-dom";

export default function EventDetailPage() {
  const param = useParams();
  return (
    <>
      <h1>Event Detail Page</h1>
      <p>{param.eventId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}
