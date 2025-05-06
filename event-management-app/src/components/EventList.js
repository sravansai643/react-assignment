import EventItem from "./EventItem";

const EventList = ({ events, onDelete }) => (
  <>
    {events.map((event) => (
      <EventItem key={event.id} event={event} onDelete={onDelete} />
    ))}
  </>
);

export default EventList;
 