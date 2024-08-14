import React, { useState } from "react";
import { Link } from "react-router-dom";
import './AttaRice.css';


const AttaRice = () => {
    const rice = [
        { id: 1, image1: 'https://krblrice.com/wp-content/uploads/2019/05/Untitled-5-1-1.png', name: 'Regional & Other Rice Varieties' },
        { id: 2, image1: 'https://m.media-amazon.com/images/I/91o0m2iIpVL.jpg', name: 'Atta' },
        { id: 3, image1: 'https://rukminim2.flixcart.com/image/750/900/koixwnk0/flour/d/a/a/500-premium-healthy-nutritious-besan-gram-flour-1-besan-original-imag2yhzhafm63kn.jpeg?q=20&crop=false', name: 'Besan, Maida & Other Flours' },
        { id: 4, image1: 'https://m.media-amazon.com/images/I/61fXVPdRZ5L.jpg', name: 'Toor, Urad & Other Dals' },
        { id: 5, image1: 'https://m.media-amazon.com/images/I/61ee5qPa-1L._AC_UF1000,1000_QL80_.jpg', name: 'Masoor, Rajma & Other Pulses' },
    ];

    const [quantity, setQuantity] = useState(0);
    const [visibleItems, setVisibleItems] = useState(4);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(quantity > 0 ? quantity - 1 : 0);
    };

    const Rice1 = [
        { id: 1, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 2, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'b', price: 50 },
        { id: 3, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'c', price: 50 },
        { id: 4, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'd', price: 50 },
        { id: 5, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'e', price: 50 },
        { id: 6, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'f', price: 50 },
        { id: 7, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'g', price: 50 },
        { id: 8, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'h', price: 50 },
        { id: 9, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'i', price: 50 },
        { id: 10, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'j', price: 50 },
        { id: 11, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'k', price: 50 },
        { id: 12, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'l', price: 50 },
        { id: 13, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'm', price: 50 },
        { id: 14, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 15, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 16, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 17, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 18, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 19, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 20, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },

    ];



    const Atta = [
        { id: 21, image: 'https://assets.winni.in/product/primary/2022/10/76080.jpeg?dpr=1&w=500', name: 'Rice', price: 50 },
        { id: 22, image: 'https://assets.winni.in/product/primary/2022/10/76080.jpeg?dpr=1&w=500', name: 'Dal', price: 50 },
        { id: 23, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 24, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 25, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 26, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 27, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 28, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 29, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 30, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 31, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 32, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 33, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 34, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 35, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 36, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 37, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 38, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 39, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 40, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },

    ];



    const Flour = [
        { id: 41, image: 'https://m.media-amazon.com/images/I/51kCZHF1zVL._SY300_SX300_QL70_FMwebp_.jpg', name: 'Rice', price: 50 },
        { id: 42, image: 'https://assets.winni.in/product/primary/2022/10/76080.jpeg?dpr=1&w=500', name: 'Dal', price: 50 },
        { id: 43, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 44, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 45, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 46, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 47, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 48, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 49, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 50, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 51, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 52, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 53, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 54, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 55, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 56, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 57, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 58, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 59, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 60, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },

    ];





    const Dals = [
        { id: 61, image: 'https://m.media-amazon.com/images/I/51kCZHF1zVL._SY300_SX300_QL70_FMwebp_.jpg', name: 'Rice', price: 50 },
        { id: 62, image: 'https://assets.winni.in/product/primary/2022/10/76080.jpeg?dpr=1&w=500', name: 'Dal', price: 50 },
        { id: 63, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 64, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 65, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 66, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 67, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 68, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 69, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 70, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 71, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 72, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 73, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 74, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 75, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 76, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 77, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 78, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 79, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 80, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },

    ];


    
    const Pulses = [
        { id: 81, image: 'https://m.media-amazon.com/images/I/51kCZHF1zVL._SY300_SX300_QL70_FMwebp_.jpg', name: 'Rice', price: 50 },
        { id: 82, image: 'https://assets.winni.in/product/primary/2022/10/76080.jpeg?dpr=1&w=500', name: 'Dal', price: 50 },
        { id: 83, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 84, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 85, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 86, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 87, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 88, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 89, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 90, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 91, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 92, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 93, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 94, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 95, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 96, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 97, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 98, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 99, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },
        { id: 100, image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Atta, Rice & Dal', price: 50 },

    ];


    const displayedRice1 = Rice1.slice(0, visibleItems);
    const displayedAtta = Atta.slice(0, visibleItems);
    const displayedFlour = Flour.slice(0, visibleItems);
    const displayedDals = Dals.slice(0, visibleItems);
    const displayedPulses = Pulses.slice(0, visibleItems);




    const handleViewMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
    };

    const handleViewLess = () => {
        setVisibleItems((prevVisibleItems) => (prevVisibleItems > 4 ? prevVisibleItems - 4 : 4));
    };

    return (
        <>
            <div className="gro1">
                {rice.map((item) => (
                    <ul className="card-list" key={item.id}>
                        <li className="atta">
                            <Link to={`/product/${item.id}`}>
                                <img src={item.image1} alt={`groceries for ${item.name}`} />
                                <p>{item.name}</p>
                            </Link>
                        </li>
                    </ul>
                ))}
            </div>


{/* Card1 */}
            <div className="regional">
                <h2>Regional & Other Rice Varieties</h2>
                <div className="atta-container">
                    {displayedRice1.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.image} alt={item.name} className="card-image" />
                            <h2 className="card-name">{item.name}</h2>
                            <p className="card-price">${item.price.toFixed(2)}</p>
                            <div className="card-quantity">
                                <button onClick={decreaseQuantity} className="quantity-button">-</button>
                                <span>{quantity}</span>
                                <button onClick={increaseQuantity} className="quantity-button">+</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    {visibleItems < Rice1.length && (
                        <button className="view-more-button" onClick={handleViewMore}>
                            View More
                        </button>
                    )}
                    {visibleItems > 4 && (
                        <button className="view-less-button" onClick={handleViewLess}>
                            View Less
                        </button>
                    )}
                </div>
            </div>


{/* Card2 */}
<div>
            <div className="atta-card">
                <h1>Atta</h1>
            </div>

            <div className="atta-container">
                    {displayedAtta.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.image} alt={item.name} className="card-image" />
                            <h2 className="card-name">{item.name}</h2>
                            <p className="card-price">${item.price.toFixed(2)}</p>
                            <div className="card-quantity">
                                <button onClick={decreaseQuantity} className="quantity-button">-</button>
                                <span>{quantity}</span>
                                <button onClick={increaseQuantity} className="quantity-button">+</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    {visibleItems < Rice1.length && (
                        <button className="view-more-button" onClick={handleViewMore}>
                            View More
                        </button>
                    )}
                    {visibleItems > 4 && (
                        <button className="view-less-button" onClick={handleViewLess}>
                            View Less
                        </button>
                    )}
                </div>
    </div>



{/* Card3 */}


<div>
            <div className="atta-card">
                <h1>Flours</h1>
            </div>

            <div className="atta-container">
                    {displayedFlour.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.image} alt={item.name} className="card-image" />
                            <h2 className="card-name">{item.name}</h2>
                            <p className="card-price">${item.price.toFixed(2)}</p>
                            <div className="card-quantity">
                                <button onClick={decreaseQuantity} className="quantity-button">-</button>
                                <span>{quantity}</span>
                                <button onClick={increaseQuantity} className="quantity-button">+</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    {visibleItems < Flour.length && (
                        <button className="view-more-button" onClick={handleViewMore}>
                            View More
                        </button>
                    )}
                    {visibleItems > 4 && (
                        <button className="view-less-button" onClick={handleViewLess}>
                            View Less
                        </button>
                    )}
                </div>
    </div>




{/* Card4 */}



<div>
            <div className="atta-card">
                <h1>Dals</h1>
            </div>

            <div className="atta-container">
                    {displayedDals.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.image} alt={item.name} className="card-image" />
                            <h2 className="card-name">{item.name}</h2>
                            <p className="card-price">${item.price.toFixed(2)}</p>
                            <div className="card-quantity">
                                <button onClick={decreaseQuantity} className="quantity-button">-</button>
                                <span>{quantity}</span>
                                <button onClick={increaseQuantity} className="quantity-button">+</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    {visibleItems < Dals.length && (
                        <button className="view-more-button" onClick={handleViewMore}>
                            View More
                        </button>
                    )}
                    {visibleItems > 4 && (
                        <button className="view-less-button" onClick={handleViewLess}>
                            View Less
                        </button>
                    )}
                </div>
    </div>



{/* Card5 */}


<div>
            <div className="atta-card">
                <h1>Pulses</h1>
            </div>

            <div className="atta-container">
                    {displayedPulses.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.image} alt={item.name} className="card-image" />
                            <h2 className="card-name">{item.name}</h2>
                            <p className="card-price">${item.price.toFixed(2)}</p>
                            <div className="card-quantity">
                                <button onClick={decreaseQuantity} className="quantity-button">-</button>
                                <span>{quantity}</span>
                                <button onClick={increaseQuantity} className="quantity-button">+</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    {visibleItems < Pulses.length && (
                        <button className="view-more-button" onClick={handleViewMore}>
                            View More
                        </button>
                    )}
                    {visibleItems > 4 && (
                        <button className="view-less-button" onClick={handleViewLess}>
                            View Less
                        </button>
                    )}
                </div>
    </div>
        </>
    );
};

export default AttaRice;
