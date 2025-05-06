import { useState, useEffect } from "react";
import { validateEvent } from "../utils/validation";

const EventForm = ({ onSubmit, initialData = {} }) => {
  const [event, setEvent] = useState({
    name: "",
    country: "",
    date: "",
    ...initialData
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setEvent({ ...event, ...initialData });
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateEvent(event);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={event.name} onChange={handleChange} />
      {errors.name && <p>{errors.name}</p>}
      <input name="country" placeholder="Country" value={event.country} onChange={handleChange} />
      {errors.country && <p>{errors.country}</p>}
      <input name="date" type="date" value={event.date} onChange={handleChange} />
      {errors.date && <p>{errors.date}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
