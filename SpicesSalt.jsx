import React from "react";
import { Link } from "react-router-dom";

const SpicesSalt = () => {


    const rice = [
        { id: 1, image1: 'https://krblrice.com/wp-content/uploads/2019/05/Untitled-5-1-1.png', name: 'Regional & Other Rice Varieties' },
        { id: 2, image1: 'https://m.media-amazon.com/images/I/91o0m2iIpVL.jpg', name: 'Atta' },
        { id: 3, image1: 'https://rukminim2.flixcart.com/image/750/900/koixwnk0/flour/d/a/a/500-premium-healthy-nutritious-besan-gram-flour-1-besan-original-imag2yhzhafm63kn.jpeg?q=20&crop=false', name: 'Besan, Maida & Other Flours' },
        { id: 4, image1: 'https://m.media-amazon.com/images/I/61fXVPdRZ5L.jpg', name: 'Toor, Urad & Other Dals' },
        { id: 5, image1: 'https://m.media-amazon.com/images/I/61ee5qPa-1L._AC_UF1000,1000_QL80_.jpg', name: 'Masoor, Rajma & Other Pulses' },
    ];

    return (
        <>
        <div>
            <div>
        <h1>Spices, Salt & Sugar</h1>
        <p>Details about Spices, Salt & Sugar.</p>
        </div>

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
    </div>

    </>
        );
};

export default SpicesSalt;