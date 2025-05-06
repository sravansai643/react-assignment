import { useEffect, useState } from "react";
import { getEvents, deleteEvent } from "../services/eventService";
import EventList from "../components/EventList";

export default function Home() {
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    const res = await getEvents();
    setEvents(res.data);
  };

  const handleDelete = async (id) => {
    await deleteEvent(id);
    alert("Event deleted!");
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Event Summary</h2>
      <EventList events={events} onDelete={handleDelete} />
    </div>
  );
}
