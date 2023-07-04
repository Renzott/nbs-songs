
import React, { use, useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Playlist from '../components/playlist';
import Alert from '../components/alert';
import { Message } from '../utils/webSocketEvents';
import AddPlaylist from '../components/addPlaylist';

// create a div with 3 columns: 1 for the playlist, 1 for the player, 1 for the queue. use tailwindcss to style the divs
const IndexPage = () => {

    const [userID, setUserID] = useState('');
    const [songs, setSongs] = useState([]);
    const [currentSocket, setCurrentSocket] = useState<WebSocket | null>(null);
    const [alert, setAlert] = useState('');

    // conect to websocket
    useEffect(() => {
        const socket = new WebSocket('ws://easy-bugs-attack.loca.lt/ws')

        socket.onopen = () => {
            setAlert('Connected to websocket')
            setCurrentSocket(socket)
        }

        socket.onmessage = (e) => {
            try {
                const message: Message = JSON.parse(e.data)

                if (message.type === 'id') {
                    setUserID(message.payload)
                }

            } catch (error) {
                setAlert('Invalid JSON')
            }
        }

        const unSubscribe = () => {
            socket.close()
        }

        socket.onerror = (e) => {
            setAlert('Error connecting to websocket')
        }

        return () => unSubscribe()
    }, [])

    // create a ping function to send a message to the websocket every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            currentSocket?.send(JSON.stringify({
                type: 'ping',
                message: 'ping'
            }))
        }, 10000)

        return () => clearInterval(interval)

    }, [currentSocket])

    return (
        // classname: create a 3 column flex with percentage widths
        <div className="flex flex-row gap-4 font-thin bg-black text-white h-screen">
            <div className="w-1/5">
                <Playlist />
            </div>
            <div className="w-3/5">
                <h1>Add Song to PlayList</h1>
                <AddPlaylist />
            </div>

            <Alert message={alert} />
        </div>
    );
}

export default IndexPage;