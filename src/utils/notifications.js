import user1 from "../images/avatar-angela-gray.webp";
import user2 from "../images/avatar-anna-kim.webp";
import user3 from "../images/avatar-jacob-thompson.webp";
import user4 from "../images/avatar-kimberly-smith.webp";
import user5 from "../images/avatar-mark-webber.webp";
import user6 from "../images/avatar-nathan-peterson.webp";
import user7 from "../images/avatar-rizky-hasanuddin.webp";

import post from "../images/image-chess.webp";

export const notifications = [
  {
    userIcon: user5,
    username: "Mark Webber",
    event: "reacted to you recent post",
    group: "My first tournament today!",
    post: undefined,
    time: "1m ago",
    read: true,
    message: undefined,
  },
  {
    userIcon: user1,
    username: "Angela Gray",
    event: "follwed you",
    group: undefined,
    post: undefined,
    time: "5m ago",
    read: true,
    message: undefined,
  },
  {
    userIcon: user3,
    username: "Jacob Thompson",
    event: "has joined your group",
    group: "Chess Club",
    post: undefined,
    time: "1 day ago",
    read: true,
    message: undefined,
  },
  {
    userIcon: user7,
    username: "Rizky Hasanuddin",
    event: "send you a private message",
    group: undefined,
    post: undefined,
    time: "5 days ago",
    read: false,
    message: `Hello, thanks for setting up the Chess Club. I've been a member for
            a few weeks now and I'm already having a lot of fun and imporving my
            game.`,
  },
  {
    userIcon: user4,
    username: "Kimberly Smith",
    event: "commented on your picture",
    group: undefined,
    post: post,
    time: "1 week ago",
    read: false,
    message: undefined,
  },
  {
    userIcon: user6,
    username: "Nathan Peterson",
    event: "reacted to your recent post",
    group: "5 end-game strategies to increase your win rate",
    post: undefined,
    time: "2 weeks ago",
    read: false,
    message: undefined,
  },
  {
    userIcon: user2,
    username: "Anna Kim",
    event: "left the group",
    group: "Chess Club",
    post: undefined,
    time: "2 weeks ago",
    read: false,
    message: undefined,
  },
];
