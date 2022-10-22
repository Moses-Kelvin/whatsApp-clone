import React, { useEffect, useState } from "react";
import './ChatBarBody.css';
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { collection, onSnapshot, orderBy } from 'firebase/firestore';
import useScroll from "../../hooks/use-scroll";

const ChatBarBody = () => {

   const [messages, setMessages] = useState([]);

   const { roomId } = useParams();

   const { handleMouseOver, handleMouseOut, hovering } = useScroll();

   useEffect(() => {
      onSnapshot(collection(db, "Rooms", roomId, "messages"),
         orderBy('timestamp', 'asc'), (snapShot) => {
            setMessages(snapShot.docs.map(doc => doc.data()
            ))
         })
   }, [roomId]);

   return <section className={`chatBar_body scroller ${hovering && "scroll"}`}
      onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {messages.map(message => (
         <div className="chatBar_body_message">
            name
            <div className="message_container">
               <p className="message">{message.message}</p>
               <p className="message_time">{new Date(message.sentAt?.toDate()).toUTCString()}</p>
            </div>
         </div>
      ))}
   </section>
};

export default ChatBarBody;
