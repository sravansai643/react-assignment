import { useNavigate } from "react-router-dom";
import EventForm from "../components/EventForm";
import { createEvent } from "../services/eventService";

export default function CreateEvent() {
  const navigate = useNavigate();

  const handleCreate = async (eventData) => {
    await createEvent(eventData);
    alert("Event created!");
    navigate("/");
  };

  return <EventForm onSubmit={handleCreate} />;
}
