import React from "react";
import './ChatBarBody.css';
import { useParams } from "react-router-dom";

const ChatBarBody = () => {
   const { roomId } = useParams();

   return <section className="chatBar_body">{roomId}</section>
};

export default ChatBarBody;