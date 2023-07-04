// create a playlist component: this component will be used to display the playlist in a dashboard with tailwindcss

import React from 'react';
import 'tailwindcss/tailwind.css';

const mockData = [
    {
        id: 1,
        title: 'Song 1',
        download_url: 'https://www.bensound.com/bensound-music/bensound-summer.mp3',
    },
    {
        id: 2,
        title: 'Song 2',
        download_url: 'https://www.bensound.com/bensound-music/bensound-summer.mp3',
    },
    {
        id: 3,
        title: 'Song 3',
        download_url: 'https://www.bensound.com/bensound-music/bensound-summer.mp3',
    }
]

const Playlist = () => {
    return <div>
        <h1>Playlist</h1>

        {mockData.map((song) => {
            return (
                <div key={song.id} className="bg-gray-700 p-4 m-2 rounded-lg">
                    <h2>{song.title}</h2>
                </div>
            )
        })}
        
    </div>;
}

export default Playlist;