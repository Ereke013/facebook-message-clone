import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import FlipMove from "react-flip-move";
import "./Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  console.log(isUser);
  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {/* {message.username} : {message.message} */}
            {!isUser && `${message.username}:`} {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

/*function Message({ message, username }) {
  const isUser = username === message.username;
  console.log(isUser);
  return (
    <div className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {console.log("id: " + message.id)}
            {message.username} : {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
} */

export default Message;
