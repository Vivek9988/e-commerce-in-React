import { useState } from 'react';
import { Link } from 'react-router-dom';
//import './App.css'; // You might want to remove if you're using Tailwind

import Box1Image from './images/box1_image.jpg';
import Box2Image from './images/box2_image.jpg';
import Box3Image from './images/box3_image.jpg';
import Box4Image from './images/box4_image.jpg';
import Box5Image from './images/box5_image.jpg';
import Box6Image from './images/box6_image.jpg';
import Box7Image from './images/box7_image.jpg';
import Box8Image from './images/box8_image.jpg';

function Home() {
    const [filter, setFilter] = useState('');

    const boxes = [
        { id: 1, title: 'Cloths', image: Box1Image, link: '/cloths' },
        { id: 2, title: 'Health & Personal Care', image: Box2Image, link: '/health' },
        { id: 3, title: 'Furniture', image: Box3Image, link: '/furniture' },
        { id: 4, title: 'Mobiles', image: Box4Image, link: '/mobiles' },
        { id: 5, title: 'Painting', image: Box5Image, link: '/painting' },
        { id: 6, title: 'Dog Food', image: Box6Image, link: '/dog-food' },
        { id: 7, title: 'Aeroplane', image: Box7Image, link: '/aeroplane' },
        { id: 8, title: 'Ladies Cloths', image: Box8Image, link: '/ladies-cloths' }
    ];

    const filteredBoxes = boxes.filter(box => box.title.toLowerCase().includes(filter.toLowerCase()));

    return (
        <>
            <div className="flex justify-center mb-8">
                <input
                    type="text"
                    placeholder="Search your Favourite"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="p-3 w-full max-w-3xl border border-gray-300 rounded-[19px] shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300"
                />

            </div>
            <div className="flex flex-wrap justify-evenly bg-gray-200">
                {filteredBoxes.map(box => (
                    <Link key={box.id} to={box.link} className="w-[23%] mt-4">
                        <div className="h-[400px] bg-white p-5 box-border">
                            <div className="h-[300px] bg-cover" style={{ backgroundImage: `url(${box.image})` }}></div>
                            <div className="mx-4">
                                <h2 className="text-lg font-semibold">{box.title}</h2>
                                <p className="text-blue-500">See more</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Home;
