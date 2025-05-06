import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEvent, updateEvent } from "../services/eventService";
import EventForm from "../components/EventForm";

export default function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    getEvent(id).then(res => setInitialData(res.data));
  }, [id]);

  const handleUpdate = async (updatedData) => {
    await updateEvent(id, updatedData);
    alert("Event updated!");
    navigate("/");
  };

  return initialData ? <EventForm onSubmit={handleUpdate} initialData={initialData} /> : <p>Loading...</p>;
}
