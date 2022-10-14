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

    const AddRoom = async () => {
        const room_name = prompt("Enter room name");
        console.log(room_name)
        if (room_name !== '' && room_name !== null) {
            try {
                await addDoc(collection(db, 'Rooms'), {
                    roomName: room_name,
                    created: Timestamp.now()
                })
            } catch (err) {
                console.log(err)
            }
        }
    };

    useEffect(() => {
        const getRooms = async () => {
            const rooms = query(collection(db, 'Rooms'), orderBy('created', 'desc'))
            const roomsSnapshot = await getDocs(rooms)
            setRooms(roomsSnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        }
        getRooms()

    }, []);


    return (
        <section className="Rooms-container">
            <div className="Rooms_btn">
                <h1 onClick={AddRoom}>Add new chat</h1>
            </div>
            <div className={`${'Rooms'} ${hovering && 'scroll'}`}
                onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {rooms.map(room =>
                    <NewRoom
                        id={room.id}
                        key={room.id}
                        roomName={room.data.roomName}
                        createdAt={room.data.created.seconds}
                    />
                )}
            </div>
        </section>
    )
};

export default Rooms;