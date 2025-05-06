export const validateEvent = (event) => {
  const errors = {};
  if (!event.name) errors.name = "Name is required";
  if (!event.country) errors.country = "Country is required";
  if (!event.date) errors.date = "Date is required";
  return errors;
};
