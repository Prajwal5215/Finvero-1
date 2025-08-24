import React from 'react';
function Hero() {
    return (
        <div className='container border-bottom'>
            <div className='row text-center mt-5 p-3'>
                <h1>Technology</h1>
                <h5 className='text-muted fs-4'>sleek,midern and intuitive trading platfrom</h5>
                <p className='mt-1 mb-5'>checkout our <a href='' style={{ textDecoration: "none" }}>investment offerings<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
    );
}

export default Hero;