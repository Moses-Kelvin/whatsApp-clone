import React from "react";
import './NewRoom.css';
import { Link } from "react-router-dom";

const NewRoom = ({ createdAt, roomName, color, id }) => {

    const abbreviatedName = roomName.split(" ").map(el => el[0]).join("");
    const day = new Date(createdAt * 1000).getDay();
    const month = new Date(createdAt * 1000).getMonth();
    const year = new Date(createdAt * 1000).getFullYear();


    return (
        <Link to={`/rooms/${id}`}>
            <div className="new-room">
                <div className="new-room_profile" style={{ backgroundColor: color }}>
                    <h1>{abbreviatedName}</h1>
                </div>
                <div className="new-room_profile_details">
                    <h3>{roomName}</h3>
                    <p>{year}-{month}-{day}</p>
                </div>
            </div>
        </Link>
    )
};

export default NewRoom;