import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
            <img src='media/homeHero.png' alt='Hero Image' className='mb-5'/>
            
            <h1 className='mt-5'>Invest in everything </h1>
            <p>Online platforms to invest stoks,derivatives,mutual funds</p>
            <button className='p-3 btn fs-5' style={{width:"25%", margin:"0 auto", backgroundColor:"#966D5C", color:"white"}}>Signup now</button>
            </div>
        </div>
     );
}

export default Hero;