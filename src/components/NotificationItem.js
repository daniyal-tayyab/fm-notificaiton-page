import React from "react";

import postImage from "../images/image-chess.webp";

const NotificationItem = ({ item }) => {
  const { userIcon, username, event, group, post, time, read, message } = item;
  return (
    <div className="notification-item">
      <div className="notification-content">
        <img className="notification-item__icon" src={userIcon} alt="user" />

        <div className="notification-item-message-container">
          <div className="notification-item__message">
            <p>
              <span className="notification-item__message__username">
                {username}
              </span>
              <span className="notification-item__message__event">{event}</span>
              {group && (
                <span className="notification-item__message__group">
                  {group}
                </span>
              )}
            </p>
            {read && <div className="notification-item__unread">&nbsp;</div>}
          </div>
          <p className="notification-item__time">{time}</p>
        </div>
        {post && (
          <img
            className="notification-item__post-image"
            src={postImage}
            alt="post"
          />
        )}
      </div>
      {message ? (
        <p className="notification-item__private-message">{message}</p>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default NotificationItem;
