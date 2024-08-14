import React from 'react';
import './OilGhee.css';


const OilGhee = () => {
    return (
        // <div>
        //     <h1>Oil & Ghee</h1>
        //     <p>Details about Oil & Ghee.</p>
        // </div>




<div className='opening'>
    <div class="opening-time">
    <h2>OPENING TIME</h2>
    <ul>
        <li><span>Monday</span><span>Closed</span></li>
        <li><span>Tuesday</span><span>9 am - 8 pm</span></li>
        <li><span>Wednesday</span><span>8 am - 8 pm</span></li>
        <li><span>Thursday</span><span>10 am - 8 pm</span></li>
        <li><span>Friday</span><span>8 am - 6 pm</span></li>
        <li><span>Saturday</span><span>8 am - 4 pm</span></li>
        <li><span>Sunday</span><span>8 am - 4 pm</span></li>
    </ul>

    </div>

<div class="profile">
<div class="profile_images">
    <div class="image_con">
        {/* <img src="./pr-1.jpg" alt=""> */}

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xO4UktfIe6YAE0bSQ1nbm8VJwY7gh5_NjA&s" alt="Profile" />
        <p class="imagepara">jora</p>
    </div>
    <div class="image_con">
        {/* <img src="./pr-2.jpeg" alt=""> */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xO4UktfIe6YAE0bSQ1nbm8VJwY7gh5_NjA&s" alt="Profile" />

        <p class="imagepara">karan</p>
    </div>
    <div class="image_con">
        {/* <img src="./pr-3.webp" alt=""> */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xO4UktfIe6YAE0bSQ1nbm8VJwY7gh5_NjA&s" alt="Profile" />

        <p class="imagepara">kali</p>
    </div>
</div>
<div class="paragraph">
<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
</div>
</div>
</div>
    );
};

export default OilGhee;
