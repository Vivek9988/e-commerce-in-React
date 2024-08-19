import { useState } from 'react';
import { Link ,NavLink} from 'react-router-dom';
import Box1Image from './images/box1_image.jpg';
import Box2Image from './images/box2_image.jpg';
import Box3Image from './images/box3_image.jpg';
import Box4Image from './images/box4_image.jpg';
import Box5Image from './images/box5_image.jpg';
import Box6Image from './images/box6_image.jpg';
import Box7Image from './images/box7_image.jpg';
import Box8Image from './images/box8_image.jpg';
import l1 from './images/1.png';
import l2 from './images/2.png';
import logo from './images/3.png'



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
            {/*navbar like section*/}

            <div>
                

                <div>
                    <header className=" sticky z-50 top-0">
                        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                                {/* Logo */}
                                <Link to="/" className="flex items-center order-1">
                                    <img
                                        src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                        className="mr-3 h-12"
                                        alt="Logo"
                                    />
                                </Link>

                                {/* Home Link */}
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `order-2 block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>

                                {/* Search Bar */}
                                <div className="order-3 flex justify-center w-full lg:w-auto lg:flex-1 lg:mx-4">
                                    <input
                                        type="text"
                                        placeholder="Search your Favourite"
                                        value={filter}
                                        onChange={(e) => setFilter(e.target.value)}
                                        className="p-3 w-full max-w-xl border border-gray-300 rounded-[19px] shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300"
                                    />
                                </div>

                                {/* Login and Sign Up */}
                                <div className="order-4 flex items-center lg:order-4">
                                    <Link
                                        to="/login"
                                        className="text-gray-800 hover:bg-gray-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        to="/signup"
                                        className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                    >
                                        Sign UP
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </header>
                </div>
                <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl mb-2 mt-3 '>
                    <Link to="/mobiles">
                        <button className="outline-none px-8 py-1 rounded-full shadow-lg font-medium hover:bg-slate-300">Mobile</button>
                    </Link>
                    <Link to="/shoes">
                        <button className="outline-none px-8 py-1 rounded-full shadow-lg font-medium hover:bg-slate-300">Shoes</button>
                    </Link>
                    <Link to="/men">
                        <button className="outline-none px-8 py-1 rounded-full shadow-lg font-medium hover:bg-slate-300">Men</button>
                    </Link>
                    <Link to="/women">
                        <button className="outline-none px-8 py-1 rounded-full shadow-lg font-medium hover:bg-slate-300">Women</button>
                    </Link>
                    <Link to="/kids">
                        <button className="outline-none px-8 py-1 rounded-full shadow-lg font-medium hover:bg-slate-300">Kids</button>
                    </Link>
                </div>
            </div>
         
              
            {/*Landing on the page */}
            {/* <div>
                <div className='flex justify-between'>
                    <div className='pt-4 md:p-4 border-gray-400 ml-6 md:ml-12 max-w-full overflow-hidden'>
                        <h1 className='text-5xl md:text-8xl mb-5 relative font-serif'>
                            Daily Fabulous <span className="relative before:absolute before:left-0 before:bottom-[-10px] before:w-[38vw] before:h-[4vh] before:bg-yellow-300 before:z-[-1]">Styles for you</span>
                        </h1>
                        <p className="text-xl mb-3 text-slate-500">Ready to impress with our fabulous style collection</p>
                        <div className="flex mb-6">
                            <Link className="w-[200px] text-white text-3xl font-semibold py-3 px-6 rounded-full bg-gradient-to-r from-[#25aae1] to-[#2bb673] shadow-lg transition-all duration-400 ease-in-out hover:bg-[#40e495]" to="/shop">Shop Now</Link>
                            <a className="w-[200px] text-white text-3xl font-semibold py-3 px-6 ml-4 rounded-full bg-gradient-to-r from-[#ed6ea0] to-[#fbb03b] shadow-lg transition-all duration-400 ease-in-out hover:bg-[#ec8c69]" href="#next">Learn More</a>
                        </div>
                        <div className="flex mt-4">
                            <div className='mr-4'>
                                <img className="h-[25vh] w-[15vw] rounded-lg" src={logo} alt="Sweater" />
                                <div className='flex justify-between mt-2'>
                                    <p className='text-blue-400'>Sweater</p>
                                    <p className='text-green-600'>$95.00</p>
                                </div>
                            </div>
                            <div>
                                <img className="h-[25vh] w-[15vw] rounded-lg" src={l2} alt="Jacket" />
                                <div className='flex justify-between mt-2'>
                                    <p className='text-pink-400'>Jacket</p>
                                    <p className='text-green-600'>$55.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={l1} className="h-[80vh] w-auto hidden md:block" alt="Logo" />
                </div>
            </div> */}

            
            {/*Bottom part */}


            <div className="flex flex-wrap justify-evenly bg-gray-200">
                {filter && filteredBoxes.length === 0 ? (
                    <div className="w-full text-center py-8">
                        <p className="text-lg font-medium text-gray-600">Oops, nothing to show 🙁</p>
                    </div>
                ) : (
                    filteredBoxes.map(box => (
                        <Link key={box.id} to={box.link} className="w-[23%] mt-4">
                            <div className="h-[400px] bg-white p-5 box-border">
                                <div className="h-[300px] bg-cover" style={{ backgroundImage: `url(${box.image})` }}></div>
                                <div className="mx-4">
                                    <h2 className="text-lg font-medium">{box.title}</h2>
                                    <p className="text-blue-500">See more</p>
                                </div>
                            </div>
                        </Link>
                    ))
                )}
            </div>
            <div>
                <div className='flex justify-between mt-5'>
                    <div className='pt-4 md:p-4 border-gray-400 ml-6 md:ml-12 max-w-full overflow-hidden'>
                        <h1 className='text-5xl md:text-8xl mb-5 relative font-serif'>
                            Daily Fabulous <span className="relative before:absolute before:left-0 before:bottom-[-10px] before:w-[38vw] before:h-[4vh] before:bg-yellow-300 before:z-[-1]">Styles for you</span>
                        </h1>
                        <p className="text-xl mb-3 text-slate-500">Ready to impress with our fabulous style collection</p>
                        <div className="flex mb-6">
                            <Link className="w-[200px] text-white text-3xl font-semibold py-3 px-6 rounded-full bg-gradient-to-r from-[#25aae1] to-[#2bb673] shadow-lg transition-all duration-400 ease-in-out hover:bg-[#40e495]" to="/shop">Shop Now</Link>
                            <a className="w-[200px] text-white text-3xl font-semibold py-3 px-6 ml-4 rounded-full bg-gradient-to-r from-[#ed6ea0] to-[#fbb03b] shadow-lg transition-all duration-400 ease-in-out hover:bg-[#ec8c69]" href="#next">Learn More</a>
                        </div>
                        <div className="flex mt-4">
                            <div className='mr-4'>
                                <img className="h-[25vh] w-[15vw] rounded-lg" src={logo} alt="Sweater" />
                                <div className='flex justify-between mt-2'>
                                    <p className='text-blue-400'>Sweater</p>
                                    <p className='text-green-600'>$95.00</p>
                                </div>
                            </div>
                            <div>
                                <img className="h-[25vh] w-[15vw] rounded-lg" src={l2} alt="Jacket" />
                                <div className='flex justify-between mt-2'>
                                    <p className='text-pink-400'>Jacket</p>
                                    <p className='text-green-600'>$55.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={l1} className="h-[80vh] w-auto hidden md:block" alt="Logo" />
                </div>
            </div>
        </>
    );
}

export default Home;
