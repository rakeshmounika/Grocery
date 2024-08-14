import React, { useState } from "react";
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu =() => {

    const GroceryCard = ({ image, name, }) => {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(quantity > 0 ? quantity - 1 : 0);
    };



    return (


        <>

        {/* <div className="card">

            <img src={image} alt={name} className="card-image" />
            <h2 className="card-name">{name}</h2>
            <p className="card-price">${price.toFixed(2)}</p>
            <div className="card-quantity">
                <button onClick={decreaseQuantity} className="quantity-button">-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity} className="quantity-button">+</button>
            </div>

            
        </div> */}




        </>
      
    );
};

    const [visibleCount, setVisibleCount] = useState(9);

    const groceries = [
        { image: 'https://www.baskethunt.com/wp-content/uploads/2021/07/atta-dal-rice-combo-chakki-atta-5-kg-toor-dal-2-kg-surti-kolam-rice-2-kg-0-20210531.jpg', name: 'Atta,Rice & Dal', },
        { image: 'https://www.chandanmukhwas.com/cdn/shop/files/1kgsuger_rocksalt_hingranicombopack.jpg?v=1716888549&width=713', name: 'Spices salt & sugar',  },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTN5n2yJDQGfKcaimxSU0ouL4aTIQoq2GStA&s', name: 'Oil & Ghee',  },
        { image: 'https://images.meesho.com/images/products/346828453/lo9e9_256.webp', name: 'Dry Fruits,Nuts & Seeds',  },

        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgc49EbKKim8pkSpT2pGQK7paCt7rcW_CZg&s', name: 'Snacks & Packaged Food',  },
        { image: 'https://www.jiomart.com/images/product/original/rvj88brtvi/healherb-5ltr-dish-wash-5ltr-top-load-liquid-detergent-with-kitchen-cleaner-floor-cleaner-gel-green-product-images-orvj88brtvi-p602874696-0-202306302138.jpg?im=Resize=(1000,1000)', name: 'Laundry & Dishwash',  },
        { image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/OH/IC/AR/4573598/hair-care-shampoo-500x500.jpg', name: 'Hair Care',  },
        { image: 'https://m.media-amazon.com/images/I/51kCZHF1zVL._SY300_SX300_QL70_FMwebp_.jpg', name: 'Oral Care',  },
        { image: 'https://images-cdn.ubuy.co.in/64d5fbaa55f9f81da4268ede-bath-body-works-skin-care-bundle.jpg', name: 'Body & Skin Care',  },
        { image: 'https://assets.winni.in/product/primary/2022/10/76080.jpeg?dpr=1&w=500', name: 'Chocolates & Sweets',  },
        { image: 'https://qph.cf2.quoracdn.net/main-qimg-16f0999d6252d920f93749ce7857e3dd', name: 'Beverages',  },
        { image: 'https://www.detergentsandsoaps.com/images/household-cleaning-products.jpg', name: 'Household & Cleaning',  },



    ];

    const handleViewMore = () => {
        setVisibleCount(visibleCount + 3);
    };

    const handleViewLess = () => {
        setVisibleCount(9);
    };

    return (

        <>
        <div>
            <h1>Shop by Category</h1>
        </div>


        <div className="gro1">
        <ul className="card-list">
        <li className="card30">
          <Link to="/AttaRice">
            <img src={groceries[0].image} alt={`groceries for ${groceries[0].name}`} />
            <p>{groceries[0].name}</p>
          </Link>
        </li>

        <li className="card30">
          <Link to="/SpicesSalt">
            <img src={groceries[1].image} alt={`groceries for ${groceries[1].name}`} />
            <p>{groceries[1].name}</p>
          </Link>
        </li>

        <li className="card30">
          <Link to="/OilGhee">
            <img src={groceries[2].image} alt={`groceries for ${groceries[2].name}`} />
            <p>{groceries[2].name}</p>
          </Link>
        </li>

        <li className="card30">
          <Link to="/DryFruits">
            <img src={groceries[3].image} alt={`groceries for ${groceries[3].name}`} />
            <p>{groceries[3].name}</p>
          </Link>
        </li>

        <li className="card30">
          <Link to="/Snacks">
            <img src={groceries[4].image} alt={`groceries for ${groceries[4].name}`} />
            <p>{groceries[4].name}</p>
          </Link>
        </li>

        <li className="card30">
          <Link to="/AttaRice">
            <img src={groceries[5].image} alt={`groceries for ${groceries[5].name}`} />
            <p>{groceries[5].name}</p>
          </Link>
        </li>

        <li className="card30">
          <Link to="/AttaRice">
            <img src={groceries[6].image} alt={`groceries for ${groceries[6].name}`} />
            <p>{groceries[6].name}</p>
          </Link>
        </li>

        <li className="card30">
          <Link to="/AttaRice">
            <img src={groceries[7].image} alt={`groceries for ${groceries[7].name}`} />
            <p>{groceries[7].name}</p>
          </Link>
        </li>

        <li className="card30">
          <Link to="/AttaRice">
            <img src={groceries[8].image} alt={`groceries for ${groceries[8].name}`} />
            <p>{groceries[8].name}</p>
          </Link>
        </li>

        <li className="card30">
          <Link to="/AttaRice">
            <img src={groceries[9].image} alt={`groceries for ${groceries[9].name}`} />
            <p>{groceries[9].name}</p>
          </Link>
        </li>

        <li className="card30">
          <Link to="/AttaRice">
            <img src={groceries[10].image} alt={`groceries for ${groceries[10].name}`} />
            <p>{groceries[10].name}</p>
          </Link>
        </li>

        <li className="card30">
          <Link to="/AttaRice">
            <img src={groceries[11].image} alt={`groceries for ${groceries[11].name}`} />
            <p>{groceries[11].name}</p>
          </Link>
        </li>


        </ul>
        </div>
        </>
    );
};
export default Menu;    
























// import React, { useState } from "react";
// import './Menu.css';
// import { Link } from 'react-router-dom';

// const Menu = () => {

//     const GroceryCard = ({ image, name }) => {
//         const [quantity, setQuantity] = useState(0);

//         const increaseQuantity = () => {
//             setQuantity(quantity + 1);
//         };

//         const decreaseQuantity = () => {
//             setQuantity(quantity > 0 ? quantity - 1 : 0);
//         };

//         return (
//             // <Link to={`/detail/${name}`} className="card-link">
//             //     <div className="card">
//             //         <img src={image} alt={name} className="card-image" />
//             //         <h2 className="card-name">{name}</h2>
//             //     </div>
//             // </Link>

// <ul>
//     <li>

    
//             <Link to="/Atta,Rice & Dal">
//                 <div className="card">
//             <img src={groceries[0].image} alt={`groceries for ${groceries[0].name}`} className="card-image"/>
//             <p>{groceries[0].name}</p>
//             </div>
//            </Link>
//            </li>

// <li>
//            <Link to="/SpicesSalt">
//                 <div className="card">
//             <img src={groceries[1].image} alt={`groceries for ${groceries[1].name}`} className="card-image"/>
//             <p>{groceries[1].name}</p>
//             </div>
//            </Link>
//            </li>
//            </ul>
           
//         );
//     };

//     const [visibleCount, setVisibleCount] = useState(9);

//     const groceries = [
//         { image: 'https://www.baskethunt.com/wp-content/uploads/2021/07/atta-dal-rice-combo-chakki-atta-5-kg-toor-dal-2-kg-surti-kolam-rice-2-kg-0-20210531.jpg', name: 'Atta,Rice & Dal' },
//         { image: 'https://www.chandanmukhwas.com/cdn/shop/files/1kgsuger_rocksalt_hingranicombopack.jpg?v=1716888549&width=713', name: 'spices salt & sugar' },
//         { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTN5n2yJDQGfKcaimxSU0ouL4aTIQoq2GStA&s', name: 'Oil & Ghee' },
//         { image: 'https://images.meesho.com/images/products/346828453/lo9e9_256.webp', name: 'Dry Fruits,Nuts & Seeds' },
//         { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgc49EbKKim8pkSpT2pGQK7paCt7rcW_CZg&s', name: 'Snacks & Packaged Food' },
//         { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgc49EbKKim8pkSpT2pGQK7paCt7rcW_CZg&s', name: 'Snacks & Packaged Food' },
//     ];

//     const handleViewMore = () => {
//         setVisibleCount(visibleCount + 3);
//     };

//     const handleViewLess = () => {
//         setVisibleCount(9);
//     };

//     return (
//         <>
//             <div>
//                 <h1>Shop by Category</h1>
//             </div>
//             <div className="menu">
//                 {groceries.slice(0, visibleCount).map((item, index) => (
//                     <GroceryCard key={index} image={item.image} name={item.name} />
//                 ))}
//                 {visibleCount < groceries.length && (
//                     <button onClick={handleViewMore} className="view-more-button">View More</button>
//                 )}
//                 {visibleCount > 9 && (
//                     <button onClick={handleViewLess} className="view-less-button">View Less</button>
//                 )}
//             </div>
//         </>
//     );
// };

// export default Menu;



