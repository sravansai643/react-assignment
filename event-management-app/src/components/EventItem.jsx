import { Link } from "react-router-dom";

const EventItem = ({ event, onDelete }) => (
  <div>
    <h3>{event.name}</h3>
    <p>{event.country} - {event.date}</p>
    <Link to={`/edit/${event.id}`}>Edit</Link>
    <button onClick={() => onDelete(event.id)}>Delete</button>
  </div>
);

export default EventItem;
