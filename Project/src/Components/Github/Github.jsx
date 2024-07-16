import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const [data, setData] = useState(null); // Initialize state to store fetched data
  const loaderData = useLoaderData();

  useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Display a loading state while data is being fetched
  }

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

// Loader function to fetch GitHub user info
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};
