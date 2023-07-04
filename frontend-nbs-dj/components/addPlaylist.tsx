
import exp from "constants";
import React, { useState } from "react";

// use tailwindcss to style the divs
const AddPlaylist = () => {

    // github repo url
    const [repoUrl, setRepoUrl] = useState('');

    const handleSearch = async () => {
        // transform the github repo url into a github api url

        // from: https://github.com/nickg2/NBSsongs/tree/master/songs
        // to: https://api.github.com/repos/nickg2/NBSsongs/contents/

        let githubApiUrl = repoUrl.replace('github.com', 'api.github.com/repos');
        githubApiUrl = githubApiUrl.replace('/tree/master', '/contents');

        // if the url give a last slash, add last slash to the end of the url
        
    
        console.log(githubApiUrl);

    }


    return (
        // this is a children div, set background color to gray-700, padding to 4, margin to 2, rounded-lg 
        <div className="grid grid-flow-row bg-green-900 p-4 m-2 rounded-lg">
            <div className="p-2">
                <label htmlFor="repoUrl">Repo URL: </label>
                <input
                    type="text"
                    placeholder="insert github repo url"
                    className="text-black p-1"
                    onChange={(e) => setRepoUrl(e.target.value)} />
                <button
                    className="bg-blue-500 text-white p-1 rounded-lg"
                    onClick={handleSearch}>Search
                </button>
            </div>



        </div>
    );
}

export default AddPlaylist;