import React, { useEffect, useState } from "react";
import NotificationItem from "../components/NotificationItem";

import { notifications } from "../utils/notifications";

const NotificationPage = () => {
  const [notificationArray, setNotificationArray] = useState([]);
  const [notificationCount, setNotificationCount] = useState(3);

  useEffect(() => {
    setNotificationArray(notifications);
  }, []);

  const toggleNotification = () => {
    const newArray = [...notificationArray];
    for (let i = 0; i < notificationArray.length; i++) {
      if (notificationArray[i].read === true) {
        notificationArray[i].read = false;
      }
    }
    setNotificationCount(0);
    setNotificationArray(newArray);
  };

  return (
    <div className="main-container">
      <main className="notification">
        <section className="header">
          <div className="header__heading">
            <h1 className="heading-primary">notifications</h1>
            <span className="header__notification-count">
              {notificationCount}
            </span>
          </div>
          <p className="header__mark-as-read" onClick={toggleNotification}>
            Mark all as read
          </p>
        </section>
        <section className="notification-container">
          <div className="notification-container__list">
            {notificationArray.map((item, index) => (
              <NotificationItem key={index} item={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default NotificationPage;
