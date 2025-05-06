import { useEffect, useState } from 'react';
import api from '../services/api';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';

export default function Home() {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

  const fetchEvents = async () => {
    const res = await api.get('/events');
    setEvents(res.data);
  };

  useEffect(() => { fetchEvents(); }, []);

  const handleAddOrUpdate = async (event) => {
    if (event.id) {
      await api.put(`/events/${event.id}`, event);
    } else {
      await api.post('/events', event);
    }
    fetchEvents();
    setEditingEvent(null);
  };

  const handleDelete = async (id) => {
    await api.delete(`/events/${id}`);
    fetchEvents();
  };

  return (
    <div className="container">
      <h1>Event Management</h1>
      <EventForm onSubmit={handleAddOrUpdate} event={editingEvent} />
      <EventList events={events} onDelete={handleDelete} onEdit={setEditingEvent} />
    </div>
  );
}
