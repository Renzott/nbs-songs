// create a absolute component: this component will be used to alert the user from the top right of the screen with tailwindcss

import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css';

interface AlertProps {
    message: string;
}

const Alert = ({ message }: AlertProps) => {

    useEffect(() => {
        // if the message is not empty, set a timeout to clear the message after 5 seconds

        if (message !== '') {
            document.getElementById('alert')?.classList.remove('hidden')

            const idTimeout = setTimeout(() => {
                document.getElementById('alert')?.classList.add('hidden')
            }, 3000)

            return () => clearTimeout(idTimeout)
        }
    }, [message])

    return <div id="alert" className="absolute top-0 right-0 bg-gray-700 p-4 m-2 rounded-lg hidden">
        <h2>{message}</h2>
    </div>;

}

export default Alert;


