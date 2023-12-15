// Notification.js

import React from 'react';
import classes from './Notification.module.css';

const Notification = (props) => {
  const { status, title, message } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  } else if (status === 'error') {
    statusClasses = classes.error;
  } else if (status === 'pending') {
    statusClasses = classes.pending;
  }

  return (
    <section className={`${classes.notification} ${statusClasses}`}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
};

export default Notification;
