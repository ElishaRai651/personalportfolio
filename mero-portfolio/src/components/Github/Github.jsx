import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            {data ? (
                <>
                    Github followers: {data.followers}
                    <img src={data.avatar_url} alt="Git picture" width={300} />
                </>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
}

export const githubInfoLoader = async () => {
    try {
        const response = await fetch('https://github.com/ElishaRai651');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
        return null; // Or handle it as needed
    }
};
export default Github;
