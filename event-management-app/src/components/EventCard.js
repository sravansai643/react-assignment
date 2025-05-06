import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventCard extends Component {
  render() {
    const { event, onDelete } = this.props;
    return (
      <div>
        <h3>{event.name}</h3>
        <p>{event.location}</p>
        <p>{event.date}</p>
        <Link to={`/edit/${event.id}`}>Edit</Link>
        <button onClick={() => onDelete(event.id)}>Delete</button>
      </div>
    );
  }
}

export default EventCard;
