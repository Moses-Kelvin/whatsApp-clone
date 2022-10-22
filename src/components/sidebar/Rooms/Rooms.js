import React, { useEffect, useState } from "react";
import NewRoom from "./NewRoom";
import './Rooms.css';
import { db } from '../../../firebase';
import { collection, addDoc, Timestamp, onSnapshot } from 'firebase/firestore';
import useScroll from "../../../hooks/use-scroll";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    const { handleMouseOver, handleMouseOut, hovering } = useScroll();

    const colors = ["Red", "cyan", "yellowgreen", "purple", "orange", "aqua", "yellow"]

    const AddRoom = async () => {
        const room_name = prompt("Enter room name");
        console.log(room_name)
        if (room_name !== '' && room_name !== null) {
            try {
                const color = colors[Math.round(Math.random() * colors.length)];
                await addDoc(collection(db, 'Rooms'), {
                    roomName: room_name,
                    color: color,
                    created: Timestamp.now()
                })
            } catch (err) {
                console.log(err)
            }
        }
    };

    useEffect(() => {
        const unsuscribed = onSnapshot(collection(db, "Rooms"), (snapShot) => {
            setRooms(snapShot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
        return unsuscribed;
    }, [])

    return (
        <section className="Rooms-container">
            <div className="Rooms_btn">
                <h1 onClick={AddRoom}>Add new chat</h1>
            </div>
            <div className={`Rooms scroller ${hovering && "scroll"}`}
                onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {rooms.map(room =>
                    <NewRoom
                        id={room.id}
                        key={room.id}
                        roomName={room.data.roomName}
                        color={room.data.color}
                        createdAt={room.data.created.seconds}
                    />
                )}
            </div>
        </section>
    )
};

export default Rooms;