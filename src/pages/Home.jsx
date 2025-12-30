import { useState } from 'react'
import Hero from './HomePage/Hero';
import ShowCase from './HomePage/ShowCase';
import Header from './Header';
import Footer from './Footer';


export default function Home() {
    const [activeTab, setActiveTab] = useState('Buy');

    return (
        <div>
            {/* --- Elegant Navigation --- */}
            <Header />


            {/* --- Refined Hero --- */}
            <Hero />

            {/* --- Properties Grid --- */}
            <ShowCase/>

            {/* --- Aesthetic CTA --- */}
           <Footer/>
        </div>
    )
}