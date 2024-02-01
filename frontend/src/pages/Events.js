import { Link } from "react-router-dom";

const EVENTS = [
  {
    id: "e1",
    title: "First Event",
    description: "This is the first event!",
  },
  {
    id: "e2",
    title: "Second Event",
    description: "This is the second event!",
  },
  {
    id: "e3",
    title: "Third Event",
    description: "This is the third event!",
  },
  {
    id: "e4",
    title: "Fourth Event",
    description: "This is the fourth event!",
  },
];

export default function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {EVENTS.map((e) => (
          <li key={e.id}>
            <Link to={e.id}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
