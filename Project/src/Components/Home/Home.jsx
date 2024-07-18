import { useState } from 'react';
import './App.css';


import Box1Image from './images/box1_image.jpg'
import Box2Image from './images/box2_image.jpg'
import Box3Image from './images/box3_image.jpg'
import Box4Image from './images/box4_image.jpg'
import Box5Image from './images/box5_image.jpg'
import Box6Image from './images/box6_image.jpg'
import Box7Image from './images/box7_image.jpg'
import Box8Image from './images/box8_image.jpg'


function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <div className="shop-section">
                    <div className="box1 box">
                        <div className="box-content">
                            <h2>Cloths</h2>
                            <div className="box-img" style={{ backgroundImage: `url(${Box1Image})` }}></div>
                            <p>See more</p>
                        </div>
                    </div>
                    <div className="box2 box">
                        <div className="box-content">
                            <h2>Health & Personal Care</h2>
                            <div className="box-img" style={{ backgroundImage: `url(${Box2Image})` }}></div>
                            <p>See more</p>
                        </div>
                    </div>
                    <div className="box3 box">
                        <div className="box-content">
                            <h2>Furniture</h2>
                            <div className="box-img" style={{ backgroundImage: `url(${Box3Image})` }}></div>
                            <p>See more</p>
                        </div>
                    </div>
                    <div className="box4 box">
                        <div className="box-content">
                            <h2>Mobiles</h2>
                            <div className="box-img" style={{ backgroundImage: `url(${Box4Image})` }}></div>
                            <p>See more</p>
                        </div>
                    </div>
                    <div className="box1 box">
                        <div className="box-content">
                            <h2>Painting</h2>
                            <div className="box-img" style={{ backgroundImage: `url(${Box5Image})` }}></div>
                            <p>See more</p>
                        </div>
                    </div>
                    <div className="box2 box">
                        <div className="box-content">
                            <h2>Dog Food</h2>
                            <div className="box-img" style={{ backgroundImage: `url(${Box6Image})` }}></div>
                            <p>See more</p>
                        </div>
                    </div>
                    <div className="box3 box">
                        <div className="box-content">
                            <h2>Aeroplane</h2>
                            <div className="box-img" style={{ backgroundImage: `url(${Box7Image})` }}></div>
                            <p>See more</p>
                        </div>
                    </div>
                    <div className="box4 box">
                        <div className="box-content">
                            <h2>Ladies Cloths</h2>
                            <div className="box-img" style={{ backgroundImage: `url(${Box8Image})` }}></div>
                            <p>See more</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
