import React, { useEffect, useState, useCallback } from "react";
import NewRoom from "./NewRoom";
import './Rooms.css';
import { db } from '../../../firebase';
import { collection, addDoc, query, orderBy, Timestamp, getDocs } from 'firebase/firestore';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    const [hovering, setHovering] = useState(false);

    const handleMouseOver = useCallback(() => {
        setHovering(true);
    }, []);

    const handleMouseOut = useCallback(() => {
        setHovering(false)
    }, []);

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
        const getRooms = async () => {
            const rooms_col = query(collection(db, 'Rooms'), orderBy('created', 'desc'))
            const roomsSnapshot = await getDocs(rooms_col)
            setRooms(roomsSnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        }
        getRooms()

    }, [rooms]);


    return (
        <section className="Rooms-container">
            <div className="Rooms_btn">
                <h1 onClick={AddRoom}>Add new chat</h1>
            </div>
            <div className={`Rooms ${hovering && "scroll"}`}
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