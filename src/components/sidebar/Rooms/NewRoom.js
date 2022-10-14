import React, { useMemo } from "react";
import './NewRoom.css';

const NewRoom = ({ createdAt, roomName }) => {

   const color = useMemo(() => {
        const colors = ['green', 'yellow', 'red', 'cyan', 'yellowgreen', 'purple'];
        return colors[(Math.floor(Math.random() * colors.length))];
    }, []);


    const abbreviatedName = roomName.split(" ").map(el => el[0]).join("");
    const day = new Date(createdAt * 1000).getDay();
    const month = new Date(createdAt * 1000).getMonth();
    const year = new Date(createdAt * 1000).getFullYear();

    return (
        <div className="new-room">
            <div className="new-room_profile" style={{ backgroundColor: color }}>
                <h1>{abbreviatedName}</h1>
            </div>
            <div className="new-room_profile_details">
                <h3>{roomName}</h3>
                <p>{year}-{month}-{day}</p>
            </div>
        </div>
    )
};

export default NewRoom;