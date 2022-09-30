import React from 'react';
import "./Home.css";
import Product from './Product.js';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""></img>
        </div>

        <div className='home_row'>
            <Product title='APPLE iPhone 13(Blue, 128 GB)'
            price={69900} image='https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70'
            rating={5} />
             <Product title='2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD'
            price={90900} image='https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg'
            rating={4} />

        </div>

        <div className='home_row'>
            <Product 
            title="boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers"
            price={1099} 
            rating={4}
            image="https://m.media-amazon.com/images/I/61u1VALn6JL._AC_UY218_.jpg" />
            <Product 
            title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Blue)"
            price={2449} 
            rating={5}
            image="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY218_.jpg" />
            <Product 
            title="2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 128GB) - Space Grey (5th Generation)"
            price={81999} 
            rating={4}
            image="https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_UY218_.jpg" />

        </div>

        <div className='home_row'>
            <Product 
            title="LG Ultragear - 34Gl750-B, 34 Inch (86.6 cm) LCD 2560 X 1080 Pixels G-Sync Compatible Curved Ultrawide, 1Ms, 144Hz, HDR 10, IPS Gaming Monitor with Height Adjust Stand, Hdmi X 2, Display Port (Black)"
            price={56999} 
            rating={4}
            image="https://m.media-amazon.com/images/I/71S9dis6PRL._SX679_.jpg" />
        </div>
    </div>
  )
}

export default Home